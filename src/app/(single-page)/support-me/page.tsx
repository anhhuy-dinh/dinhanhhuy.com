import { notFound } from 'next/navigation'

import { defaultBlockOptionsContext } from '../../lib/config'
import { getBlocks, getPostHeader } from '../../lib/fetcher'
import { getMetadata } from '../../lib/helpers'
import SinglePostTemplate from '../../templates/SinglePostTemplate'

export const revalidate = 60

export const metadata = getMetadata({
  title: 'Support Thi'
})

export default async function SupportThiPage() {
  try {
    const postHeader = await getPostHeader(process.env.SUPPORT_ME as string)
    const contentBlocks = await getBlocks(process.env.SUPPORT_ME as string)
    return (
      <SinglePostTemplate
        isPage={true}
        hideMeta={true}
        blockOptionsContext={{ disableAnchorHeading: true, ...defaultBlockOptionsContext }}
        postHeader={postHeader}
        contentBlocks={contentBlocks}
      />
    )
  } catch (error) {
    console.log('🚨Error when loading Support Thi page', error)
    notFound()
  }
}
