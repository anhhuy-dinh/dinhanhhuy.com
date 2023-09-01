'use client'

import {
  BlockObjectResponse,
  ListBlockChildrenResponse
} from '@notionhq/client/build/src/api-endpoints'
import toTopImg from '@root/public/to-top.webp'
import PostAside from '@root/src/app/components/PostAside'
import PostHeader from '@root/src/app/components/PostHeader'
import cn from 'classnames'
import { BlockOptionsContextType } from 'notion-nextjs-lib/dist/components/BlockRender'
import PostBody from 'notion-nextjs-lib/dist/components/PostBody'
import PostToc from 'notion-nextjs-lib/dist/components/PostToc'
import ScrollToTop from 'notion-nextjs-lib/dist/components/ScrollToTop'
import { PostHeaderType } from 'notion-nextjs-lib/dist/interface'

// import Comments from '../components/Comments'
import Container from '../components/Container'
import Footer from '../components/Footer'
import { bodyPadding, containerNormal } from '../lib/config'

type SinglePostTemplateProps = {
  postHeader: PostHeaderType
  contentBlocks: ListBlockChildrenResponse['results']
  blockOptionsContext?: BlockOptionsContextType
  isPage?: boolean
  hideMeta?: boolean
}

// Note: If we change the breakpoint here, we have to change the breakpoint of showing TOC on
// small screens in component post-toc.tsx too.
const asideClass = cn('hidden 2xl:block flex-1', 'h-[calc(100vh-130px)] sticky top-[70px] pt-8')

export default function SinglePostTemplate(props: SinglePostTemplateProps) {
  return (
    <>
      <div className="animate-fadeIn">
        {props.postHeader && <PostHeader postHeader={props.postHeader} hideMeta={props.hideMeta} />}
        <div className={cn('flex justify-center', bodyPadding)}>
          <aside className={cn(asideClass)}>
            <PostAside position="left">
              <div className="hidden">Left aside</div>
            </PostAside>
          </aside>

          <Container className={containerNormal}>
            <article>
              <PostBody
                className={cn('w-full')}
                contentBlocks={props.contentBlocks as BlockObjectResponse[]}
                showToc={true}
                blockOptionsContext={props.blockOptionsContext}
                labelTocTitle="In this note"
              ></PostBody>
            </article>

            {/* <Comments /> */}
          </Container>

          <aside className={cn(asideClass)}>
            <PostAside position="right">
              <PostToc
                showToc={true}
                contentBlocks={props.contentBlocks as BlockObjectResponse[]}
                labelTocTitle="In this note"
              />
            </PostAside>
          </aside>
        </div>

        <Footer footerType="white" />
      </div>
      <ScrollToTop image={toTopImg} />
    </>
  )
}
