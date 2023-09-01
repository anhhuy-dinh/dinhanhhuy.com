import { defaultBlockOptionsContext, notionMaxRequest } from '@root/src/app/lib/config'
import { getBlocks, getPostHeader, getPosts } from '@root/src/app/lib/fetcher'
import SinglePostTemplate from '@root/src/app/templates/SinglePostTemplate'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getJoinedRichText } from 'notion-nextjs-lib/dist/helpers/block-helpers'
import { DynamicSegmentParamsProps } from 'notion-nextjs-lib/dist/interface'

import { getMetadata } from '../../lib/helpers'

export const revalidate = 60

export async function generateMetadata({ params }: DynamicSegmentParamsProps): Promise<Metadata> {
  const slug = params.slug || ''
  const untitled = 'Unknown note | Site of Thi'
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
  if (!slug) notFound()

  try {
    const allPosts = await getAllNotes()
    const post = allPosts.find(post => post.slug === slug)
    const pageIdwithDash = post?.id
    if (!pageIdwithDash) notFound()

    const postHeader = await getPostHeader(pageIdwithDash)
    const contentBlocks = await getBlocks(pageIdwithDash)

    return (
      <SinglePostTemplate
        postHeader={postHeader}
        contentBlocks={contentBlocks}
        blockOptionsContext={{
          headingStyle: 'borderLeftH2Only',
          showAnchorRight: true,
          siteDomain: defaultBlockOptionsContext.siteDomain
        }}
      />
    )
  } catch (error) {
    console.log('🚨Error when loading a single note page', error)
    notFound()
  }
}

async function getAllNotes() {
  return await getPosts({
    dbId: process.env.NOTION_DB_POSTS as string,
    pageSize: notionMaxRequest
    // filter: {
    //   property: 'blog',
    //   checkbox: {
    //     equals: false
    //   }
    // }
  })
}
