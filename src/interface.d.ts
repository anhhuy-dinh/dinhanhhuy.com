export type SiteTheme = 'dark' | 'light'

export type EnvMode = 'dev' | 'prod'

export type HeaderIcon = {
  url: string
  emoji: string
}

export type SlugTypeLabels = 'about' | 'blog'
export type GroupTypeReturn = { categories: Category[] } | { tags: Tag[] } | { authors: Author[] }

export type NotionPost = {
  id: string
  created_time: string
  last_edited_time?: string
  cover?: {
    external?: {
      url: string
    }
    file?: {
      url: string
    }
  }
  icon?: {
    emoji: string
    external?: {
      url: string
    }
    file?: {
      url: string
    }
  }
  properties?: {
    Name: {
      title: { plain_text: string }[]
    }
    url: string
    tags?: {
      multi_select: NotionTagData[]
    }
    author?: {
      select: { name: string }
    }
    excerpt?: {
      rich_text: { plain_text: string }[]
    }
  }
}

export type NotionTagData = {
  id: string
  name: string
  color: sting
}

export type NotionHeader = {
  cover?: { external: { url: string }; file: { url: string } }
  properties: {
    name: { title: { plain_text: string }[] }
    tags: { multi_select: { name: string }[] }
    slug: { rich_text: { plain_text: string }[] }
    draft: { checkbox: boolean }
    blog: { checkbox: boolean }
  }
}

export type ImgurUrlType = 't' | 'm' | 'l' | 'h'
