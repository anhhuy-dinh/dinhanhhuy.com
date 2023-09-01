'use client'

import { defaultFeaturedImage } from '@root/src/app/lib/config'
import cn from 'classnames'
import dynamic from 'next/dynamic'
// import DateComponent from 'notion-nextjs-lib/dist/components/Date'
import ImageComponent from 'notion-nextjs-lib/dist/components/ImageComponent'
import PostHeaderCover from 'notion-nextjs-lib/dist/components/PostHeaderCover'
import PostHeaderTopics from 'notion-nextjs-lib/dist/components/PostHeaderTopics'
import { isDateAfter } from 'notion-nextjs-lib/dist/helpers/helpers'
import AiOutlineClockCircle from 'notion-nextjs-lib/dist/icons/AiOutlineClockCircle'
import RiUser3Line from 'notion-nextjs-lib/dist/icons/RiUser3Line'
import { PostHeaderType } from 'notion-nextjs-lib/dist/interface'
import { useEffect, useState } from 'react'

import me from '../../data/me'
import Header from './Header'

const DateComponent = dynamic(() => import('notion-nextjs-lib/dist/components/Date'), {
  ssr: false
})

export const fullWidthPostCoverHeight = 'h-[25vh] max-h-[25vh] min-h-[25vh]'
export const gapHeaderItems = 'mb-3'

type PostHeaderProps = {
  postHeader: PostHeaderType
  hideMeta?: boolean
}

export const containerHeaderClass = 'max-w-full bg-slate-50 drop-shadow-sm py-4'

export default function PostHeader(props: PostHeaderProps) {
  const [isIn7Days, setIsIn7Days] = useState(false)
  const [isNew, setIsNew] = useState(false)
  const { title, date, tags, icon, featuredImage, createdDate } = props.postHeader

  useEffect(() => {
    const lastModifiedDate = new Date(date!)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - lastModifiedDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays <= 7) {
      setIsIn7Days(true)
    }

    const cDate = new Date(createdDate!)
    const diffTime2 = Math.abs(today.getTime() - cDate.getTime())
    const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24))
    if (diffDays2 <= 7) {
      setIsNew(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {featuredImage && (
        <PostHeaderCover
          defaultCover={defaultFeaturedImage}
          cover={featuredImage}
          alt={`Cover for post "${title}"`}
          coverHeight="h-[25vh] max-h-[25vh] min-h-[25vh]"
        />
      )}

      {/* Main header with infos */}
      <Header headerType={'white'} headerWidth="normal">
        <div className="py-8 flex flex-col gap-3">
          <div className={cn('flex flex-col md:flex-row gap-3 items-center')}>
            {/* icon */}
            {!!icon && (
              <div>
                {icon.img && (
                  <ImageComponent
                    image={icon.img}
                    alt="icon"
                    className="w-14 h-14 rounded-full"
                    imageProps={{ width: 64, height: 64 }}
                  />
                )}
                {icon.emoji && (
                  <span className="text-[3rem] md:text-[3.25rem]">
                    <span role="img" aria-label="icon">
                      {icon.emoji}
                    </span>
                  </span>
                )}
              </div>
            )}

            {/* Title */}
            <h1
              className={cn(
                `text-2xl md:text-3xl xl:text-4xl font-bold leading-tight
                tracking-tight text-center md:text-left thi-text-rainbow`
              )}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          {/* Authors & Date */}
          {date && !props.hideMeta && (
            <div
              className={cn(
                `flex w-full flex-wrap gap-3 md:w-auto md:flex-nowrap items-center
                justify-center md:justify-start text-slate-100`,
                'mt-[-5px] mb-[5px]'
              )}
            >
              <div className="flex items-center gap-2 text-base opacity-80">
                <RiUser3Line className="-mr-1" />
                {me.name}
              </div>

              {createdDate && (
                <div className="flex items-center gap-1 text-base opacity-80">
                  <AiOutlineClockCircle />
                  <span>created </span>
                  <DateComponent humanize={true} dateString={createdDate} format="MMM DD, YYYY" />
                </div>
              )}

              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                {createdDate && !isNew && date && isDateAfter(date, createdDate) && (
                  <div
                    className={cn('px-3 py-0.5 text-sm items-start rounded-xl whitespace-nowrap', {
                      'text-slate-700 bg-slate-100': !isIn7Days,
                      'text-green-900 bg-green-200': isIn7Days
                    })}
                  >
                    updated{' '}
                    <DateComponent humanize={true} dateString={date} format="MMM DD, YYYY" />
                  </div>
                )}

                {isNew && (
                  <div
                    className={cn(
                      'px-3 py-0.5 text-[0.8rem] rounded-xl whitespace-nowrap',
                      'bg-amber-200 text-amber-900'
                    )}
                  >
                    new
                  </div>
                )}

                {/* <div className="whitespace-nowrap">
                  <Link
                    className={cn(
                      'shadow-md text-white rounded-3xl hover:translate-y-[-2px] hover:transition-all',
                      'bg-gradient-to-r from-purple-700 to-pink-500',
                      'text-[0.85rem] h-fit w-fit block py-[2px] px-[15px]'
                    )}
                    href={'/'}
                  >
                    ✍ Write with me?
                  </Link>
                </div> */}
              </div>
            </div>
          )}

          {/* Tags */}
          {tags && !!tags.length && (
            <div className="justify-center md:justify-start flex items-center">
              <PostHeaderTopics
                className="justify-left"
                tags={tags}
                TiTagClass="text-slate-100"
                tagClass="text-slate-700 bg-slate-50"
              />
            </div>
          )}
        </div>
      </Header>
    </>
  )
}
