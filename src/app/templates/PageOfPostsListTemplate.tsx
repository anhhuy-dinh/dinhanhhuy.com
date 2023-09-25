import Container from '@/src/app/components/Container'
import SkeletonPostList from '@notion-x/SkeletonPostList'
import Pagination from '@notion-x/components/Pagination'
import PostList from '@notion-x/components/PostsList'
import { Post, Tag } from '@notion-x/interface'
import cn from 'classnames'

import Footer from '../components/Footer'
import HeaderPage, { HeaderPageSkeleton } from '../components/HeaderPage'
import { bodyPadding, containerWide } from '../lib/config'
import { poppins } from '../lib/fonts'

type PageOfPostsListTemplateProps = {
  object: Tag
  posts: Post[]
  totalPages: number
  currentPage: number
}

export default function PageOfPostsListTemplate(props: PageOfPostsListTemplateProps) {
  const { object, posts, totalPages, currentPage } = props

  return (
    <div className="thi-bg-stone">
      <HeaderPage
        headerType="gray"
        headerWidth="wide"
        title={object.name}
        icon={object.icon}
        iconClassName={object.className}
      />
      <Container className={cn(bodyPadding, containerWide)}>
        {posts.length === 0 && <div className="my-4 text-xl">There is no post yet!</div>}
        {posts.length > 0 && (
          <>
            <div className="flex flex-col gap-12">
              {posts.length > 0 && (
                <div className="thi-box-code overflow-hidden">
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
                </div>
              )}
            </div>
            {totalPages > 1 && object.uri && (
              <Pagination
                className="my-8"
                path={object.uri}
                total={totalPages}
                current={currentPage}
                pageAlias="page"
              />
            )}
          </>
        )}
      </Container>
      <Footer footerType="gray" />
    </div>
  )
}

export function SkeletonPageOfPostsListTemplate() {
  return (
    <div className="thi-bg-stone">
      <HeaderPageSkeleton headerType="gray" />
      <Container className={cn(bodyPadding, containerWide)}>
        <div className="thi-box-code overflow-hidden">
          <SkeletonPostList
            count={4}
            postType="PostSimple"
            options={{
              className: 'flex flex-col divide-y'
            }}
          />
        </div>
      </Container>
      <Footer footerType="gray" />
    </div>
  )
}
