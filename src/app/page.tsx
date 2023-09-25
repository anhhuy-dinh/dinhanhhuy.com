/* eslint-disable quotes */
import SkeletonPostList from '@notion-x/SkeletonPostList'
import ImageComponent from '@notion-x/components/ImageComponent'
import PostList from '@notion-x/components/PostsList'
import { makeSlugText } from '@notion-x/helpers'
import { ImageType } from '@notion-x/interface'
import cn from 'classnames'
import Link from 'next/link'
import { Suspense } from 'react'

import me from '../data/me'
import projects from '../data/projects'
import topics from '../data/topics'
import Container from './components/Container'
import Footer from './components/Footer'
import HeaderIndex from './components/HeaderIndex'
import ProjectItem, { Project, SkeletonProjectItem } from './components/ProjectItem'
import { bodyPadding, containerWide } from './lib/config'
import { getPosts } from './lib/fetcher'
import { poppins } from './lib/fonts'
import { getMetadata, getUri } from './lib/helpers'

export const revalidate = 60

export const metadata = getMetadata({
  title: "Hi! I'm Huy",
  description: me.quote,
  images: [
    {
      url: 'https://i.imgur.com/PyXUtfTh.png',
      width: 1024,
      height: 581
    }
  ]
})

const HeadingWithMore = ({ title, href }: { title: string; href: string }) => (
  <h2
    id="notes"
    className={cn(
      'font-heading text-3xl font-semibold text-slate-700 flex items-baseline flex-wrap gap-y-0 gap-x-4'
    )}
  >
    <span>{title}</span>
    <Link
      className="text-[60%] italic text-slate-600 hover:m2it-link-hover font-normal"
      href={href}
    >
      ...more
    </Link>
  </h2>
)

export default async function Home() {
  const posts = await getPosts({
    dbId: process.env.NOTION_DB_POSTS as string,
    pageSize: 10,
    getFull: true
  })

  const projectsToShow = projects.slice(0, 6)
  const isThereDsProject = projectsToShow.some(project => project.type.includes('ds'))
  const isThereWebProject = projectsToShow.some(project => project.type.includes('web'))
  const isThereOtherProject = projectsToShow.some(project => project.type.includes('other'))

  return (
    <div className="thi-bg-stone">
      <HeaderIndex />
      <Container className={cn(bodyPadding, containerWide)}>
        <div className="flex flex-col gap-14">
          {/* Notes */}
          <div className="flex flex-col gap-2">
            <HeadingWithMore title="Recently updated notes" href="/notes/" />
            <div className="thi-box-code overflow-hidden">
              <Suspense
                fallback={
                  <SkeletonPostList
                    count={4}
                    postType="PostSimple"
                    options={{
                      className: 'flex flex-col divide-y'
                    }}
                  />
                }
              >
                <PostList
                  posts={posts}
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
              </Suspense>
            </div>
          </div>

          {/* Topics */}
          <div className="flex flex-col gap-4">
            <HeadingWithMore title="Main topics" href="/tags/" />
            <div className="flex flex-wrap gap-4">
              {topics
                .filter(t => t.pinned)
                .map(topic => (
                  <Link
                    href={getUri('tag', makeSlugText(topic.name))!}
                    key={makeSlugText(topic.name)}
                    className={cn(
                      'flex items-center gap-1 p-2 thi-box-code',
                      'transition duration-200 ease-in-out hover:-translate-y-0.5',
                      { 'tooltip-auto': topic.description }
                    )}
                    data-title={topic.description}
                  >
                    {topic.icon && (
                      <div>
                        <ImageComponent
                          image={{ staticImageData: topic.icon } as ImageType}
                          alt={`Icon of ${topic.name}`}
                          imageProps={{ width: 20, height: 20 }}
                        />
                      </div>
                    )}
                    <div>{topic.name}</div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            <HeadingWithMore title="Recent projects" href="/projects/" />
            <div className="flex flex-col gap-x-3 gap-y-4">
              <div className="flex gap-4 flex-wrap">
                {isThereDsProject && (
                  <div className="flex gap-2 items-center">
                    <div className="h-1 rounded-xl w-8 sm:w-16 bg-sky-600"></div>
                    <div className="text-slate-600 text-sm">
                      <span className="hidden sm:inline whitespace-nowrap">Data Science</span>
                      <span className="sm:hidden">DS</span>
                    </div>
                  </div>
                )}

                {isThereWebProject && (
                  <div className="flex gap-2 items-center">
                    <div className="h-1 rounded-xl w-8 sm:w-16 bg-amber-500"></div>
                    <div className="text-slate-600 text-sm">
                      <span className="hidden sm:inline whitespace-nowrap">Web Development</span>
                      <span className="sm:hidden">Web</span>
                    </div>
                  </div>
                )}

                {isThereOtherProject && (
                  <div className="flex gap-2 items-center">
                    <div className="h-1 rounded-xl w-8 sm:w-16 bg-emerald-600"></div>
                    <div className="text-slate-600 text-sm whitespace-nowrap">Others</div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-3 xl:grid-cols-3">
                {projects.slice(0, 6).map((project: Project) => (
                  <Suspense key={project.id} fallback={<SkeletonProjectItem />}>
                    <ProjectItem key={project.id} project={project} grayScale={true} />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer footerType="gray" />
    </div>
  )
}
