import _dImg from '@root/public/featured-images/_default.png'
import { BlockOptionsContextType } from 'notion-nextjs-lib/dist/components/BlockRender'

export const defaultBlockOptionsContext: BlockOptionsContextType = {
  siteDomain: process.env.SITE_DOMAIN
}

export const defaultBlurDataURL = `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwC
  AAAAC0lEQVR42mN8XA8AAksBZG7LpHYAAAAASUVORK5CYII=`
export const numPostsPerPage = 50

export const containerNormal = 'max-w-3xl'
export const containerWide = 'xl:max-w-6xl'
export const bodyPadding = 'py-12'

export const defaultFeaturedImage = _dImg

export const notionMaxRequest = 100

export const defaultPostTitle = 'Untitled'

export const defaultPostDate = new Date().toISOString().split('T')[0]

/**
 * We can use @mention in Notion to link to a post. However, because a single page is written
 * like a post, we need to distinguish them with a normal post. This is the list of slugs of
 * single pages.
 *
 * REQUIRED: The "slug" on Notion must be the same as the name of the folder of the single page!!!
 */
export const SINGLE_PAGE_SLUGS = ['about', 'notes', 'support-me']

export const revalidateTime = 60
