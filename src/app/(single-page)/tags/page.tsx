import TopicIcon from '@/public/topics.svg'
import ImageComponent from '@notion-x/components/ImageComponent'
import { ImageType, Tag } from '@notion-x/interface'
import cn from 'classnames'
import Link from 'next/link'
import { Suspense } from 'react'

import topics from '../../../data/topics'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import HeaderPage from '../../components/HeaderPage'
import { bodyPadding, containerWide } from '../../lib/config'
import { getTags } from '../../lib/fetcher'
import { getMetadata } from '../../lib/helpers'

export const revalidate = 60

export const metadata = getMetadata({
  title: 'List of topics',
  description: 'A list of topics I write about'
})

export default async function TagsPage() {
  const tags = await getTags()
  for (const tag of tags) {
    const predefinedTag = topics.find(t => t.name === tag.name)
    if (!predefinedTag) continue
    tag.icon = { staticImageData: predefinedTag?.icon } as ImageType
    tag.description = predefinedTag?.description
  }
  const tagListContainerClass =
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'
  return (
    <div className="thi-bg-stone flex flex-col">
      <HeaderPage
        headerType="gray"
        headerWidth="wide"
        title="List of topics"
        icon={{ staticImageData: TopicIcon }}
        iconClassName="h-12 w-12"
      />
      <Container className={cn('basis-auto grow shrink-0', bodyPadding, containerWide)}>
        <Suspense fallback={<SkeletonTags className={tagListContainerClass} />}>
          {tags.length === 0 && <div className="my-4 text-xl font-bold">There is no tag yet!</div>}
          {tags.length > 0 && (
            <div className={tagListContainerClass}>
              {tags.map((tag: Tag) => (
                <Link
                  href={tag.uri!}
                  key={tag.id}
                  className={cn(
                    'thi-box-code flex items-center gap-2 p-4',
                    'transition duration-200 ease-in-out hover:-translate-y-0.5',
                    { 'tooltip-auto': tag.description }
                  )}
                  data-title={tag.description}
                >
                  {tag.icon && (
                    <div>
                      <ImageComponent
                        image={tag.icon}
                        alt={tag.name}
                        imageProps={{ width: 30, height: 30 }}
                      />
                    </div>
                  )}
                  <div>{tag.name}</div>
                </Link>
              ))}
            </div>
          )}
        </Suspense>
      </Container>
      <Footer footerType="gray" />
    </div>
  )
}

function SkeletonTags(props: { className?: string }) {
  return (
    <div className={props.className}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="thi-box-code w-full h-[62px] animate-pulse bg-white"></div>
      ))}
    </div>
  )
}
