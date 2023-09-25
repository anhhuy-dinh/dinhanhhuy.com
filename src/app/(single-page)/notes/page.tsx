import NotesIcon from '@/public/notes.svg'
import SkeletonPostList from '@notion-x/SkeletonPostList'
import { ImageType, Tag } from '@notion-x/interface'
import cn from 'classnames'
import { Suspense } from 'react'

import topics from '../../../data/topics'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import HeaderPage from '../../components/HeaderPage'
import NoteTopicSection from '../../components/NoteTopicSection'
import NotesToc from '../../components/NotesToc'
import { bodyPadding, containerWide } from '../../lib/config'
import { getTags } from '../../lib/fetcher'
import { getMetadata } from '../../lib/helpers'

export const revalidate = 60

export const metadata = getMetadata({
  title: 'Notes',
  description: 'When I learn something new, I write it down here.'
})

export default async function NotesPage() {
  const tags: Tag[] = await getTags()
  for (const tag of tags) {
    const predefinedTag = topics.find(t => t.name === tag.name)
    if (!predefinedTag) continue
    tag.icon = { staticImageData: predefinedTag?.icon } as ImageType
    tag.description = predefinedTag?.description
    tag.pinned = predefinedTag?.pinned
  }

  const pinnedTags = tags.filter(tag => tag.pinned)
  const predefinedPinnedTags = topics.filter(topic => topic.pinned)

  return (
    <div className="thi-bg-stone flex flex-col">
      <HeaderPage
        title="Notes"
        headerType="gray"
        headerWidth="wide"
        icon={{ staticImageData: NotesIcon }}
        iconClassName="h-12 w-12"
      />
      <Container className={cn(bodyPadding, containerWide)}>
        <div className="flex flex-col md:flex-row gap-8">
          <Suspense fallback={<SkeletonNotesPageBody />}>
            <div className="order-2 flex-1 flex flex-col gap-12">
              {pinnedTags.map((tag: Tag) => (
                <NoteTopicSection key={tag.id} tag={tag} />
              ))}
            </div>
          </Suspense>

          <NotesToc
            className={'order-1 md:order-2 md:sticky top-[70px] h-fit md:w-fit w-full'}
            tags={predefinedPinnedTags}
          />
        </div>
      </Container>
      <Footer footerType="gray" />
    </div>
  )
}

function SkeletonNotesPageBody() {
  return (
    <div className="flex-1 flex flex-col gap-12">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="flex gap-2 items-center animate-pulse">
            <div className="h-[30px] w-[30px] rounded-full bg-slate-200"></div>
            <div className="h-[30px] bg-slate-200 w-[250px] rounded-md"></div>
          </div>
          <div className="thi-box-code overflow-hidden flex-1">
            <SkeletonPostList
              count={2}
              postType="PostSimple"
              options={{
                className: 'flex flex-col divide-y'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
