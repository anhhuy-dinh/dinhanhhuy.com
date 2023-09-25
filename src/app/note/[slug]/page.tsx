import { notionMaxRequest } from '@/src/app/lib/config'
import { getPosts } from '@/src/app/lib/fetcher'
import SinglePostTemplate from '@/src/app/templates/SinglePostTemplate'
import { getJoinedRichText } from '@notion-x/helpers'
import { DynamicSegmentParamsProps } from '@notion-x/interface'
import { notionX } from '@notion-x/notionx'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getMetadata } from '../../lib/helpers'

export const revalidate = 60

export async function generateMetadata({ params }: DynamicSegmentParamsProps): Promise<Metadata> {
  const slug = params.slug || ''
  const untitled = 'Unknown note | Site of Huy'
  if (!slug) return { title: untitled }
  const allPosts = await getAllNotes()
  const post = allPosts.find(post => post.slug === slug)
  if (!post) return { title: untitled, description: undefined }

  return getMetadata({
    title: post.title,
    description: getJoinedRichText(post.excerpt)
  })
}

export async function generateStaticParams() {
  const allPosts = await getAllNotes()
  const params = allPosts.filter(post => post.slug).map(post => ({ slug: post.slug }))
  return params
}

export default async function SingleNotePage({ params }: DynamicSegmentParamsProps) {
  const slug = params.slug || ''
  console.debug(`\n👉 Slug:  ${slug}\n`)
  if (!slug) notFound()
  // const ctx = useNotionContext() // think of using previewImage?

  try {
    const allPosts = await getAllNotes()
    const post = allPosts.find(post => post.slug === slug)
    const pageIdwithDash = post?.id
    if (!pageIdwithDash) notFound()

    const recordMap = await notionX.getPage(pageIdwithDash)

    return <SinglePostTemplate recordMap={recordMap} />
  } catch (error) {
    console.log('🚨Error when loading a single note page', error)
    notFound()
  }
}

async function getAllNotes() {
  return await getPosts({
    dbId: process.env.NOTION_DB_POSTS as string,
    pageSize: notionMaxRequest
  })
}

// (Archived)
// async function getPreviewImage(
//   recordMap: ExtendedRecordMap,
//   ctx: ReturnType<typeof useNotionContext>
// ): Promise<{ base64: string; width: number; height: number } | null> {
//   const { mapImageUrl } = ctx
//   const id = Object.keys(recordMap.block)[0]
//   const block = recordMap.block[id]?.value
//   const { page_cover } = block.format
//   const coverUrl = mapImageUrl(page_cover as any, block)
//   if (!coverUrl) return null
//   const { base64, width, height } = await getPlaceholderImage(coverUrl)
//   return { base64, width, height }
// }
