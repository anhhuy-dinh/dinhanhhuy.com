'use client'

import PostHeaderTopics from '@notion-x/components/PostHeaderTopics'
import { LazyImage } from '@notion-x/components/lazy-image'
import { PageIcon } from '@notion-x/components/page-icon'
import { Text } from '@notion-x/components/text'
import { useNotionContext } from '@notion-x/context'
import { isDateAfter, mapTag } from '@notion-x/helpers'
import AiOutlineClockCircle from '@notion-x/icons/AiOutlineClockCircle'
import RiUser3Line from '@notion-x/icons/RiUser3Line'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import * as types from 'notion-types'
import { ExtendedRecordMap } from 'notion-types'
import { getTextContent } from 'notion-utils'
import { useEffect, useState } from 'react'

import me from '../../data/me'
import Header from './Header'

const DateComponent = dynamic(() => import('@notion-x/components/DateComponent'), {
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
  const [isIn7Days, setIsIn7Days] = useState(false)
  const [isNew, setIsNew] = useState(false)

  const ctx = useNotionContext()
  const { mapImageUrl } = ctx

  const id = Object.keys(props.recordMap.block)[0]
  const block = props.recordMap.block[id]?.value

  const title = block.properties?.title
  const createdDate = getCreatedDate(block)
  const modifiedDate = getModifedDate(block)
  const tagNames = block.properties?.[`${process.env.NEXT_PUBLIC_ID_TAGS}`]?.[0]?.[0].split(',')
  const tags = tagNames?.map((tagName: string) => mapTag(tagName, 'tag'))
  const icon = block.format?.page_icon
  const coverPosition = (1 - (block?.format?.page_cover_position || 0.5)) * 100
  const pageCoverObjectPosition = `center ${coverPosition}%`
  let pageCoverStyle = pageCoverStyleCache[pageCoverObjectPosition]
  if (!pageCoverStyle) {
    pageCoverStyle = pageCoverStyleCache[pageCoverObjectPosition] = {
      objectPosition: pageCoverObjectPosition
    }
  }

  useEffect(() => {
    const lastModifiedDate = new Date(modifiedDate)
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
      {block?.format?.page_cover && (
        <div className="flex w-full items-center justify-center h-[25vh] max-h-[25vh] min-h-[25vh]">
          <div className="relative flex h-full w-full items-center overflow-hidden">
            <LazyImage
              src={mapImageUrl(block.format.page_cover as any, block)}
              alt={getTextContent(title)}
              priority={true}
              className="notion-page-cover absolute"
              style={pageCoverStyle}
            />
          </div>
        </div>
      )}

      {/* Main header with infos */}
      <Header headerType={'white'} headerWidth="normal">
        <div className="py-8 flex flex-col gap-3">
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
                justify-center md:justify-start text-slate-100`,
                'mt-[-5px] mb-[5px]'
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
                  dateString={createdDate}
                  dateLabel="added"
                  format="MMM DD, YYYY"
                />
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                {createdDate && !isNew && isDateAfter(modifiedDate, createdDate) && (
                  <div
                    className={cn('px-3 py-0.5 text-sm items-start rounded-xl whitespace-nowrap', {
                      'text-slate-700 bg-slate-100': !isIn7Days,
                      'text-green-900 bg-green-200': isIn7Days
                    })}
                  >
                    updated{' '}
                    <DateComponent
                      humanize={true}
                      dateString={modifiedDate}
                      format="MMM DD, YYYY"
                    />
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

function getCreatedDate(block: types.Block) {
  const _cDf =
    block.properties?.[`${process.env.NEXT_PUBLIC_ID_CREATED_DATE}`]?.[0]?.[1]?.[0]?.[1]?.[
      'start_date'
    ]
  const createdDateField = _cDf ? new Date(_cDf).toISOString() : null
  const created_time = new Date(block.created_time).toISOString()
  return createdDateField || created_time
}

function getModifedDate(block: types.Block) {
  const _mDf =
    block.properties?.[`${process.env.NEXT_PUBLIC_ID_LAST_MODIFIED}`]?.[0]?.[1]?.[0]?.[1]?.[
      'start_date'
    ]
  const modifiedDateField = _mDf ? new Date(_mDf).toISOString() : null
  const last_edited_time = new Date(block.last_edited_time).toISOString()
  return modifiedDateField || last_edited_time
}
