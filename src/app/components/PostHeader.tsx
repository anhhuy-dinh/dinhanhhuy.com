'use client'

import PostHeaderTopics from '@notion-x/src/components/PostHeaderTopics'
import SimpleImage from '@notion-x/src/components/SimpleImage'
import { PageIcon } from '@notion-x/src/components/page-icon'
import { Text } from '@notion-x/src/components/text'
import AiOutlineClockCircle from '@notion-x/src/icons/AiOutlineClockCircle'
import PiImageSquareDuotone from '@notion-x/src/icons/PiImageSquareDuotone'
import RiUser3Line from '@notion-x/src/icons/RiUser3Line'
import { useNotionContext } from '@notion-x/src/lib/context'
import { usePostDateStatus } from '@notion-x/src/lib/hooks'
import cn from 'classnames'
import { get } from 'lodash'
import dynamic from 'next/dynamic'
import { ExtendedRecordMap } from 'notion-types'
import { getTextContent } from 'notion-utils'

import me from '../../data/me'
import { defaultPostTypeOpts } from '../lib/config'
import { getPostProperties } from '../lib/helpers'
import Header from './Header'

const DateComponent = dynamic(() => import('@notion-x/src/components/DateComponent'), {
  ssr: false
})

export const fullWidthPostCoverHeight = 'h-[25vh] max-h-[25vh] min-h-[25vh]'
export const gapHeaderItems = 'mb-3'

type PostHeaderProps = {
  recordMap: ExtendedRecordMap
  hideMeta?: boolean
}

const pageCoverStyleCache: Record<string, object> = {}

export const containerHeaderClass = 'max-w-full bg-slate-50 drop-shadow-sm py-4'

export default function PostHeader(props: PostHeaderProps) {
  const ctx = useNotionContext()
  const { mapImageUrl } = ctx

  const id = Object.keys(props.recordMap.block)[0]
  const block = props.recordMap.block[id]?.value

  const {
    rawTitle: title,
    createdDate,
    date: modifiedDate,
    tags,
    icon,
    coverPosition,
    pageCover
  } = getPostProperties(block)

  const pageCoverObjectPosition = `center ${coverPosition}%`
  let pageCoverStyle = pageCoverStyleCache[pageCoverObjectPosition]
  if (!pageCoverStyle) {
    pageCoverStyle = pageCoverStyleCache[pageCoverObjectPosition] = {
      objectPosition: pageCoverObjectPosition
    }
  }

  const status = usePostDateStatus(
    createdDate!,
    modifiedDate!,
    get(defaultPostTypeOpts, 'maxDaysWinthin', 7)
  )

  function ImagePlaceholder() {
    return (
      <div
        className={cn(
          'bg-gray-100 flex items-center justify-center animate-pulse w-full h-full',
          'flex flex-col'
        )}
      >
        <PiImageSquareDuotone className="text-[80px] text-slate-400" />
        <div className="text-slate-500 text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <>
      {block?.format?.page_cover && (
        <div className="flex w-full items-center justify-center h-[25vh] max-h-[25vh] min-h-[25vh]">
          <div className="relative flex h-full w-full items-center overflow-hidden">
            <SimpleImage
              src={mapImageUrl(pageCover as any, block)}
              alt={getTextContent(title)}
              className="notion-page-cover absolute"
              imagePlaceholder={ImagePlaceholder()}
            />
          </div>
        </div>
      )}

      {/* Main header with infos */}
      <Header headerType={'white'} headerWidth="normal">
        <div className="py-8 flex flex-col gap-5">
          <div className={cn('flex flex-col md:flex-row gap-3 items-start')}>
            {/* icon */}
            {icon && <PageIcon block={block} inline={false} />}

            {/* Title */}
            <h1
              className={cn(
                `text-2xl md:text-3xl xl:text-4xl font-bold leading-tight
                tracking-tight text-center md:text-left thi-text-rainbow`
              )}
            >
              <Text value={title} block={block} />
            </h1>
          </div>

          {/* Authors & Date */}
          {!props.hideMeta && (
            <div
              className={cn(
                `flex w-full flex-wrap gap-3 md:w-auto md:flex-nowrap items-center
                justify-center md:justify-start text-slate-100`
              )}
            >
              <div className="flex items-center gap-2 text-base opacity-80">
                <RiUser3Line className="-mr-1" />
                {me.name}
              </div>

              <div className="flex items-center gap-1 text-base opacity-80">
                <AiOutlineClockCircle />
                <DateComponent
                  humanize={true}
                  dateString={createdDate!}
                  dateLabel="added"
                  format="MMM DD, YYYY"
                />
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                {['updated', 'updatedWithin'].includes(status) && (
                  <div
                    className={cn('px-3 py-0.5 text-sm items-start rounded-xl whitespace-nowrap', {
                      'text-slate-700 bg-slate-100': status === 'updated',
                      'text-green-900 bg-green-200': status === 'updatedWithin'
                    })}
                  >
                    <DateComponent
                      dateLabel="updated"
                      humanize={true}
                      dateString={modifiedDate!}
                      format="MMM DD, YYYY"
                    />
                  </div>
                )}

                {status === 'new' && (
                  <div
                    className={cn(
                      'px-3 py-0.5 text-[0.8rem] rounded-xl whitespace-nowrap',
                      'bg-amber-200 text-amber-900'
                    )}
                  >
                    new
                  </div>
                )}
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
