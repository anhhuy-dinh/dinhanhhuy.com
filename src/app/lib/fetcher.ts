import {
  getBlocks as getNotionBlocks,
  getNotionPageWithoutCache,
  getPostsWithoutCache,
  retrieveNotionDatabaseWithoutCache
} from '@notion-x/db'
import { getJoinedRichText, makeSlugText } from '@notion-x/helpers'
import { NotionSorts, Post, Tag } from '@notion-x/interface'
import {
  ListBlockChildrenResponse,
  QueryDatabaseParameters
} from '@notionhq/client/build/src/api-endpoints'
import { get } from 'lodash'
import { cache } from 'react'

import { NotionPost, NotionTagData } from '../../interface'
import { SINGLE_PAGE_SLUGS, defaultPostDate, defaultPostTitle } from './config'
import { getFilter, getUri, parseImgurUrl } from './helpers'

export async function getPosts(options: {
  dbId: string
  filter?: unknown
  startCursor?: string
  pageSize?: number
  sorts?: NotionSorts[]
  getFull?: boolean
}): Promise<Post[]> {
  const { dbId, filter, startCursor, pageSize, sorts, getFull } = options

  try {
    const defaultSort = {
      property: 'finalModified',
      direction: 'descending'
    } as NotionSorts

    const sortsToUse: any = sorts?.length ? sorts.push(defaultSort) : [defaultSort]
    const filterToUse = getFilter(filter, getFull)

    // console.debug(
    //   `input of getPostsFromNotion: ${JSON.stringify({
    //     dbId,
    //     filterToUse,
    //     startCursor,
    //     pageSize,
    //     sortsToUse
    //   })}`
    // )

    const postsList: NotionPost[] = await getPostsFromNotion(
      dbId,
      filterToUse,
      startCursor,
      pageSize,
      sortsToUse
    )

    // console.debug(`👉 Before transformNotionPostsData with postsList length: ${postsList.length}`)

    const posts = await transformNotionPostsData({
      data: postsList
    })
    return posts
  } catch (error) {
    console.error('🐞🐞🐞 Error in getPosts()', error)
    return []
  }
}

export async function getPostsBy(options: {
  filter: unknown
  pageSize: number
  startCursor?: string
  getFull?: boolean
}) {
  const { filter, pageSize, startCursor, getFull } = options
  try {
    const posts = await getPosts({
      dbId: process.env.NOTION_DB_POSTS as string,
      filter,
      pageSize,
      startCursor,
      getFull
    })
    return posts
  } catch (error) {
    console.error('🐞🐞🐞 Error in getPostsBy()', error)
    return []
  }
}

export const getTags = async () => {
  if (!process.env.NOTION_DB_POSTS) throw new Error('process.env.NOTION_DB_POSTS is not defined')
  try {
    const data = await retrieveNotionDatabase(process.env.NOTION_DB_POSTS)
    return (
      data?.properties?.tags?.multi_select?.options?.map((opt: NotionTagData) => mapTag(opt)) || []
    )
  } catch (error) {
    console.error('🐞🐞🐞 Error in getTags()', error)
    return []
  }
}

function mapTag(tag: NotionTagData): Tag {
  if (!tag || !tag.name) throw new Error('Tag is invalid')
  return {
    id: makeSlugText(tag.name),
    name: tag.name,
    slug: makeSlugText(tag.name),
    uri: getUri('tag', makeSlugText(tag.name))
  }
}

// ARCHIVED: We use the information in the recordMap instead of this method
// export async function getPostHeader(pageId: string): Promise<PostHeaderType> {
//   try {
//     const pageData = await getNotionPage(pageId)
//     const properties = pageData?.properties

//     // title
//     const title = getJoinedRichText(properties?.Name?.title as any) || defaultPostTitle

//     // date
//     const gotDate = get(
//       pageData,
//       'properties.finalModified.formula.date.start',
//       get(pageData, 'last_edited_time', defaultPostDate)
//     )
//     const date = new Date(gotDate).toISOString()

//     // createdDate
//     const createdDate = new Date(
//       get(
//         pageData,
//         'properties.createdDate.date.start',
//         get(pageData, 'created_time', defaultPostDate)
//       )
//     ).toISOString()

//     // tags
//     const tags = properties?.tags?.multi_select?.map((tag: NotionTagData) => mapTag(tag)) || []

//     // icon
//     const icon = pageData.icon
//       ? {
//           emoji: pageData.icon.emoji,
//           img:
//             pageData.icon.external?.url || pageData.icon.file?.url
//               ? await parseImage({
//                   sourceUrl: pageData.icon.external?.url || pageData.icon.file?.url,
//                   altText: `Icon for "${title}"`
//                 })
//               : undefined
//         }
//       : undefined

//     // featured image
//     const sourceUrl = pageData?.cover?.external?.url || pageData?.cover?.file?.url
//     const featuredImage = await parseImage({
//       sourceUrl,
//       altText: `Ảnh đại diện cho bài viết "${title}"`
//     })

//     return {
//       title,
//       date,
//       createdDate,
//       tags,
//       icon,
//       featuredImage
//     }
//   } catch (error) {
//     console.error('🐞🐞🐞 Error in getPostHeader()', error)
//     return {
//       title: '',
//       date: '',
//       createdDate: '',
//       tags: [],
//       icon: undefined,
//       featuredImage: undefined
//     }
//   }
// }

/**
 * Make sure that the return of this method is always an image (from Notion or from the default image)
 */
// async function parseImage(options: { sourceUrl: string; altText?: string }): Promise<ImageType> {
//   const { sourceUrl, altText } = options
//   if (!sourceUrl) return null
//   const image: ImageType = { altText, sourceUrl }
//   const imgUrl = parseNotionImageUrl(sourceUrl)
//   const { base64, width, height } = await getPlaceholderImage(imgUrl)
//   image.blurDataURL = base64
//   image.width = width
//   image.height = height

//   return image
// }

async function transformNotionPostsData(options: { data: NotionPost[] }): Promise<Post[]> {
  const { data } = options
  if (!data || !data.length) return []
  return Promise.all(
    data?.map(async post => {
      // id
      const id = get(post, 'id') as string

      // title
      const title = getJoinedRichText(get(post, 'properties.Name.title') as any) || defaultPostTitle

      // date
      const gotDate = get(
        post,
        'properties.finalModified.formula.date.start',
        get(post, 'last_edited_time', defaultPostDate)
      )
      const date = new Date(gotDate).toISOString()

      // createdDate
      const createdDate = new Date(
        get(post, 'properties.createdDate.date.start', get(post, 'created_time', defaultPostDate))
      ).toISOString()

      // Tags
      const tags =
        post.properties?.tags?.multi_select?.map((tag: NotionTagData) => mapTag(tag)) || []

      // slug
      const slug =
        get(post, 'properties.slug.rich_text[0].plain_text', '') ||
        makeSlugText(getJoinedRichText(post?.properties?.Name?.title as any))

      // prefixSlug
      // const prefixSlug = get(post, 'properties.blog.checkbox') ? 'blog' : 'note'
      const prefixSlug = 'note'

      // isBlog
      const isBlog = get(post, 'properties.blog.checkbox') || false

      // isDraft
      const isDraft = get(post, 'properties.draft.checkbox') || false

      return {
        id,
        title,
        slug,
        uri: getUri(prefixSlug, slug),
        date,
        createdDate,
        tags,
        isBlog,
        isDraft
      } as Post
    })
  )
}

export async function getBlocks(blockId: string): Promise<ListBlockChildrenResponse['results']> {
  try {
    return await getNotionBlocks(
      blockId,
      process.env.NOTION_TOKEN as string,
      process.env.NOTION_VERSION as string,
      undefined,
      getPageUri,
      parseImgurUrlForGettingBlocks
    )
  } catch (error) {
    console.error('🐞🐞🐞 Error in getBlocks()', error)
    return []
  }
}

function parseImgurUrlForGettingBlocks(url: string) {
  return parseImgurUrl({ url, type: 'h', ignoreImgType: 'png' })
}

/**
 * Get uri (not slug) of a Notion page
 */
async function getPageUri(pageId: string): Promise<string | undefined> {
  const pageData = await getNotionPage(pageId)
  const slug =
    get(pageData, 'properties.slug.rich_text[0].plain_text', '') ||
    makeSlugText(getJoinedRichText(pageData?.properties?.Name?.title as any))
  if (!slug) return undefined
  return !SINGLE_PAGE_SLUGS.includes(slug) ? `/note/${slug}/` : `/${slug}/`
}

/**
 * Get posts from Notion using the official Notion APIs. We use React cache() to cache the data.
 *
 * @see {@link https://developers.notion.com/reference/post-database-query Query a database - Notion API}
 * @see {@link https://nextjs.org/docs/app/building-your-application/data-fetching/caching#react-cache React cache()}
 * @see {@link https://developers.notion.com/reference/request-limits Notion API request limits}
 */
const getPostsFromNotion = cache(
  async (
    dataId: string,
    filter?: QueryDatabaseParameters['filter'],
    startCursor?: string,
    pageSize?: number,
    sorts?: NotionSorts[]
  ) =>
    getPostsWithoutCache({
      dbId: dataId,
      notionToken: process.env.NOTION_TOKEN as string,
      notionVersion: process.env.NOTION_VERSION as string,
      filter,
      startCursor,
      pageSize,
      sorts
    })
)

export const retrieveNotionDatabase = cache(async (dataId: string) =>
  retrieveNotionDatabaseWithoutCache(
    dataId,
    process.env.NOTION_TOKEN as string,
    process.env.NOTION_VERSION as string
  )
)

/**
 * Get Notion Page by pageId
 *
 * It's "notion.pages.retrieve()" if we use Notion API directly.
 *
 * @see {@link https://developers.notion.com/reference/retrieve-a-page Retrieve a page - Notion API}
 */
const getNotionPage = cache(async (pageId: string) =>
  getNotionPageWithoutCache(
    pageId,
    process.env.NOTION_TOKEN as string,
    process.env.NOTION_VERSION as string
  )
)
