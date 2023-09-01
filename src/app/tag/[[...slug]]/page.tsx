import { notionMaxRequest, numPostsPerPage } from '@root/src/app/lib/config'
import { getPostsBy, getTags } from '@root/src/app/lib/fetcher'
import { generateMetaTitle, getFilterOf, getMetadata, getUri } from '@root/src/app/lib/helpers'
import PageOfPostsListTemplate from '@root/src/app/templates/PageOfPostsListTemplate'
import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { getStartCursorForCurrentPage } from 'notion-nextjs-lib/dist/helpers/helpers'
import {
  ImageType,
  OptionalCatchAllParams,
  OptionalCatchAllProps,
  Post,
  Tag
} from 'notion-nextjs-lib/dist/interface'

import topics from '../../../data/topics'

export const revalidate = 60

export async function generateMetadata({ params }: OptionalCatchAllProps): Promise<Metadata> {
  const slug = params.slug[0] || ''
  const currentPage = +(params?.slug?.[2] || 1)
  const [totalPages] = await getTotalPages({ slug } as Tag)
  const tags = await getTags()
  const tag = getTag(slug, tags)
  if (!tag)
    return {
      title: generateMetaTitle('Cannot find this tag!')
    }
  const title =
    totalPages > 1 ? `Topic "${tag?.name}" - Page ${currentPage}` : `Topic "${tag?.name}"`

  return getMetadata({
    title
  })
}

export async function generateStaticParams() {
  const tags = await getTags()
  const params = [] as OptionalCatchAllParams[]
  for (const tag of tags) {
    const [totalPages] = await getTotalPages(tag)
    for (let i = 1; i <= totalPages; i++) {
      const path =
        i === 1
          ? { slug: [tag.slug!] }
          : {
              slug: [tag.slug!, 'page', i.toString()]
            }

      params.push(path)
    }
  }
  return params
}

export default async function TagPage({ params }: OptionalCatchAllProps) {
  const currentPage = +(params?.slug?.[2] || 1)

  if (
    !params ||
    !params?.slug ||
    (params.slug.length > 1 && params.slug[1] !== 'page') ||
    params.slug.length > 3
  ) {
    notFound()
  }

  const notRootPage = params.slug.length > 1
  const slug = params.slug[0] || ''

  const tags = await getTags()
  const tag = getTag(slug, tags)
  if (!tag) notFound()

  const predefinedTag = topics.find(t => t.name === tag.name)
  if (predefinedTag) {
    tag.icon = {
      staticImageData: predefinedTag.icon
    } as ImageType
    tag.className = predefinedTag.className
  }
  const [totalPages, allPosts] = await getTotalPages(tag)

  if (notRootPage && currentPage === 1) {
    redirect(getUri('tag', slug)!)
  }

  if (currentPage !== 1 && currentPage > totalPages) {
    notFound()
  }

  const startCursor = getStartCursorForCurrentPage(currentPage, allPosts, numPostsPerPage)
  const postsOnThisPage = !allPosts.length
    ? []
    : await getPostsBy({
        filter: getFilterOf('tag', tag),
        startCursor,
        pageSize: numPostsPerPage,
        getFull: true
      })

  return (
    <PageOfPostsListTemplate
      object={tag}
      posts={postsOnThisPage}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  )
}

async function getTotalPages(tag: Tag): Promise<[number, Post[]]> {
  const allPosts = await getPostsBy({
    filter: getFilterOf('tag', tag),
    pageSize: notionMaxRequest,
    getFull: true
  })
  const numPosts = allPosts?.length || 0
  const totalPages = Math.ceil(numPosts / numPostsPerPage)
  return [totalPages, allPosts]
}

function getTag(slug: string, tags: Tag[]) {
  return tags.find(t => t.slug === slug || t.slug === slug.replace(/%26/g, '&'))
}
