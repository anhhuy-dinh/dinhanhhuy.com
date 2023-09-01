/* eslint-disable quotes */
import cn from 'classnames'
import Link from 'next/link'
import ImageComponent from 'notion-nextjs-lib/dist/components/ImageComponent'
import PostList from 'notion-nextjs-lib/dist/components/PostsList'
import SkeletonPostList from 'notion-nextjs-lib/dist/components/SkeletonPostList'
import { makeSlugText } from 'notion-nextjs-lib/dist/helpers/helpers'
import { ImageType } from 'notion-nextjs-lib/dist/interface'
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
  title: "Hi! I'm Thi",
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
  <h2 id="notes" className="font-heading text-3xl font-semibold text-slate-700">
    <span>{title}</span>
    <Link
      className="text-[60%] ml-4 italic text-slate-600 hover:m2it-link-hover font-normal"
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
                      // 'grayscale hover:grayscale-0'
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-3 xl:grid-cols-3">
              {projects.slice(0, 6).map((project: Project) => (
                <Suspense key={project.id} fallback={<SkeletonProjectItem />}>
                  <ProjectItem key={project.id} project={project} grayScale={true} />
                </Suspense>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer footerType="gray" />
    </div>
  )
}
