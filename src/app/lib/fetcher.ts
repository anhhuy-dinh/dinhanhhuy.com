import { NotionSorts, Post, Tag } from '@notion-x/src/interface'
import { getUnofficialDatabase, queryDatabase, retrieveDatabase } from '@notion-x/src/lib/db'
import { getJoinedRichText, makeSlugText } from '@notion-x/src/lib/helpers'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import { get } from 'lodash'
import { CollectionInstance } from 'notion-types'

import { NotionPost, NotionTagData } from '../../interface'
import { Project } from '../components/ProjectItem'
import { defaultPostDate, defaultPostTitle } from './config'
import { getFilter, getPostProperties, getUri } from './helpers'

export async function getUnofficialPosts() {
  try {
    const data = await getUnofficialDatabase({
      spaceId: process.env.SPACE_ID,
      sourceId: process.env.SOURCE_ID,
      collectionViewId: process.env.COLLECTION_VIEW_ID,
      notionTokenV2: process.env.NOTION_TOKEN_V2,
      notionActiveUser: process.env.NOTION_ACTIVE_USER,
      notionApiWeb: process.env.NOTION_API_WEB
    })
    return transformUnofficialPosts(data)
  } catch (error) {
    console.error('🚨 Error in getUnofficialPosts()', error)
    return []
  }
}

export async function getPosts(options: {
  filter?: QueryDatabaseParameters['filter']
  startCursor?: string
  pageSize?: number
  sorts?: NotionSorts[]
}): Promise<Post[]> {
  if (!process.env.NOTION_DB_POSTS) throw new Error('getPosts(): NOTION_DB_POSTS is not defined')
  const { filter, startCursor, pageSize, sorts } = options

  try {
    const defaultSort = {
      property: 'finalModified',
      direction: 'descending'
    } as NotionSorts

    const sortsToUse: any = sorts?.length ? sorts.push(defaultSort) : [defaultSort]
    const filterToUse = getFilter(filter)

    const data = await queryDatabase({
      dbId: process.env.NOTION_DB_POSTS as string,
      filter: filterToUse,
      startCursor,
      pageSize,
      sorts: sortsToUse
    })

    return await transformNotionPostsData({ data: data?.results as any[] })
  } catch (error) {
    console.error('🚨 Error in getPosts()', error)
    return []
  }
}

export const getTags = async () => {
  if (!process.env.NOTION_DB_POSTS) throw new Error('process.env.NOTION_DB_POSTS is not defined')
  try {
    const data = await retrieveDatabase(process.env.NOTION_DB_POSTS)
    return (
      data?.properties?.tags?.multi_select?.options?.map((opt: NotionTagData) => mapTag(opt)) || []
    )
  } catch (error) {
    console.error('🚨 Error in getTags()', error)
    return []
  }
}

export async function getProjects() {
  try {
    const data = await getUnofficialDatabase({
      spaceId: process.env.SPACE_ID,
      sourceId: process.env.PROJECTS_SOURCE_ID,
      collectionViewId: process.env.PROJECTS_COLLECTION_VIEW_ID,
      notionTokenV2: process.env.NOTION_TOKEN_V2,
      notionActiveUser: process.env.NOTION_ACTIVE_USER,
      notionApiWeb: process.env.NOTION_API_WEB
    })
    return transformProjects(data)
  } catch (error) {
    console.error('🚨 Error in getProjects()', error)
    return []
  }
}

function transformProjects(data: CollectionInstance): Project[] {
  const block = data?.recordMap?.block
  const projectIds = Object.keys(block)
  const projects = [] as Project[]

  for (const id of projectIds) {
    const project = block[id]
    const properties = project?.value?.properties
    const description = properties?.[`${process.env.PROJECTS_DESC_KEY}`]?.[0]?.[0]
    if (!description) continue // because there are useless blocks in the database
    const type = properties?.[`${process.env.PROJECTS_TYPE_KEY}`]?.[0]?.[0]?.split(',')
    const title = properties?.title?.[0]?.[0]
    const tech = properties?.[`${process.env.PROJECTS_TECH_KEY}`]?.[0]?.[0]?.split(',')
    const source = properties?.[`${process.env.PROJECTS_SOURCE_KEY}`]?.[0]?.[0]
    const url = properties?.[`${process.env.PROJECTS_URL_KEY}`]?.[0]?.[0]
    const techText = properties?.[`${process.env.PROJECTS_TECH_TEXT_KEY}`]?.[0]?.[0]?.split(',')
    const choice = properties?.[`${process.env.PROJECTS_CHOICE_KEY}`]?.[0]?.[0] === 'Yes'
    const icon = project?.value?.format?.page_icon
    const lastModified =
      properties?.[`${process.env.PROJECTS_LAST_MODIFIED_KEY}`]?.[0]?.[1]?.[0]?.[1]?.start_date ??
      new Date(project?.value?.last_edited_time).toISOString()

    projects.push({
      id,
      title,
      description,
      type,
      tech,
      source,
      url,
      techText,
      choice,
      icon,
      lastModified
    })
  }

  projects.sort(function (a, b) {
    const keyA = new Date(a.lastModified)
    const keyB = new Date(b.lastModified)
    if (keyA < keyB) return 1
    if (keyA > keyB) return -1
    return 0
  })

  return projects
}

function transformUnofficialPosts(data: CollectionInstance): Post[] {
  const block = data?.recordMap?.block
  const postIds = Object.keys(block)
  const posts = []
  for (const id of postIds) {
    const post = block[id]
    const properties = post?.value?.properties
    const slug = properties?.[`${process.env.NEXT_PUBLIC_ID_SLUG}`]?.[0]?.[0]
    if (!slug) continue

    posts.push(getPostProperties(post?.value))
  }

  return posts
}

function mapTag(tag: NotionTagData): Tag {
  if (!tag || !tag.name) throw new Error('tag is invalid')
  return {
    id: makeSlugText(tag.name),
    name: tag.name,
    slug: makeSlugText(tag.name),
    uri: getUri('tag', makeSlugText(tag.name))
  }
}

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

      // isDraft
      const isDraft = get(post, 'properties.draft.checkbox') || false

      return {
        id,
        title,
        slug,
        uri: getUri('note', slug),
        date,
        createdDate,
        tags,
        isDraft
      } as Post
    })
  )
}
