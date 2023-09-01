import Link from 'next/link'
import ImageComponent from 'notion-nextjs-lib/dist/components/ImageComponent'
import PostList from 'notion-nextjs-lib/dist/components/PostsList'
import { Tag } from 'notion-nextjs-lib/dist/interface'

import { getPostsBy } from '../lib/fetcher'
import { poppins } from '../lib/fonts'
import { getFilterOf } from '../lib/helpers'

type NoteTopicSectionProps = {
  tag: Tag
  className?: string
}

export default async function NoteTopicSection(props: NoteTopicSectionProps) {
  const numToDisplay = 8
  const tag = props.tag
  const notes = await getPostsBy({
    filter: getFilterOf('tag', tag),
    pageSize: numToDisplay,
    getFull: true
  })
  if (notes.length === 0) return null
  return (
    <div className="group flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <div>
          <ImageComponent
            image={tag.icon}
            alt="Heading icon"
            imageProps={{ width: 30, height: 30 }}
          />
        </div>
        <h2 id={tag.id} className="font-heading text-2xl font-semibold text-slate-700">
          <span>{tag.name}</span>
          <Link className="text-[80%] ml-2 italic text-slate-600 font-normal" href={tag.uri!}>
            ...more
          </Link>
        </h2>
      </div>
      <div className="thi-box-code overflow-hidden">
        <PostList
          posts={notes}
          postType="PostSimple"
          postTypeOpts={{
            fontClassName: poppins.className,
            updatedOnLabel: 'updated',
            humanizeDate: true
          }}
          options={{
            className: 'flex flex-col divide-y'
          }}
        />
      </div>
    </div>
  )
}
