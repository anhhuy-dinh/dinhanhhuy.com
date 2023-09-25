import { ImgurUrlType } from '@/src/interface'
import { Author, Tag } from '@notion-x/interface'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import { intersectionWith } from 'lodash'

import me from '../../data/me'

export function getUri(type: 'tag' | 'blog' | 'note', slug?: string): string | undefined {
  if (!slug) return undefined
  switch (type) {
    case 'tag':
      return `/tag/${slug}/`

    case 'blog':
      return `/blog/${slug}/`

    case 'note':
      return `/note/${slug}/`

    default:
      return `/note/${slug}/`
  }
}

export function parseAuthorsForPost(authorIdsList: string[], authorsList: Author[]): Author[] {
  return intersectionWith(authorsList, authorIdsList, (author, id) => author.id === id)
}

export function parseNotionImageUrl(url: string): string {
  if (url.startsWith('/images')) {
    url = `https://www.notion.so${url}`
    return url
  }
  return url
}

/**
 * Imgur has an api for resizing images based on the url of the image.
 *
 * @see {@link https://api.imgur.com/models/image#thumbs Image thumbnails - Imgur API}
 *
 * @param url
 * @param type t (160x160), m (320x320), l (640x640), h (1024x1024) all the image proportions are maintained
 * @param ignoreImgType in case we don't want to add "type" to the url of certain images
 */
export const parseImgurUrl = (opts: {
  url: string
  type?: ImgurUrlType
  ignoreImgType?: string
}) => {
  if (!opts.url || !opts.type || !opts.url.includes('imgur')) return opts.url
  // If url is a gif or png, return the original url
  if (opts.url.includes('.gif') || (opts.ignoreImgType && opts.url.includes(opts.ignoreImgType))) {
    return opts.url
  }
  // return url + type
  return opts.url.replace(/(\.\w+$)/, `${opts.type}$1`)
}

export function getFilterOf(type: 'tag' | 'blog', data?: Tag): unknown {
  switch (type) {
    case 'tag':
      return {
        property: 'tags',
        multi_select: {
          contains: data?.name
        }
      }
    case 'blog':
      return {
        property: 'blog',
        checkbox: {
          equals: false
        }
      }
    default:
      return null
  }
}

/**
 * Filter to be used in getPosts(). Remark, we ignore single page (where isPage = true on Notion)
 */
export function getFilter(filter?: any, getFull?: boolean): QueryDatabaseParameters['filter'] {
  const defaultFilter = [] as any[]

  // Ignore single page
  defaultFilter.push({
    property: 'isPage',
    checkbox: {
      equals: false
    }
  })
  // Ignore sandbox posts in production
  if (process.env.ENV_MODE === 'prod') {
    defaultFilter.push({
      property: 'published',
      checkbox: {
        equals: true
      }
    })
  }
  if (!filter) return { and: defaultFilter }
  if (!filter?.and)
    return {
      and: [...defaultFilter, filter]
    }
  if (filter?.and)
    return {
      and: [...defaultFilter, ...(filter?.and ?? [])]
    }
}

export function generateMetaTitle(title: string) {
  return `${title} | Site of Thi`
}

export function getMetadata(opts: { title: string; description?: string; images?: any[] }) {
  return {
    title: generateMetaTitle(opts.title),
    description: opts.description || me.quote,
    openGraph: {
      title: opts.title || "Hi! I'm Huy",
      description: opts.description || me.quote,
      type: 'website',
      images: opts.images || [
        {
          url: 'https://i.imgur.com/PyXUtfTh.png',
          width: 1024,
          height: 581
        }
      ]
    }
  }
}
