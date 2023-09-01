import cn from 'classnames'
import ImageComponent from 'notion-nextjs-lib/dist/components/ImageComponent'
import { ImageType } from 'notion-nextjs-lib/dist/interface'

import Header from './Header'

type HeaderPageProps = {
  headerType?: 'white' | 'gray'
  headerWidth?: 'wide' | 'normal'
  title: string
  childrenContainerClassName?: string
  icon?: ImageType
  iconClassName?: string
}

export default function HeaderPage(props: HeaderPageProps) {
  return (
    <Header
      childrenContainerClassName={props.childrenContainerClassName}
      headerType={props.headerType}
      headerWidth={props.headerWidth}
    >
      <div className="flex flex-col md:flex-row items-center gap-3 py-8">
        {!!props.icon && (
          <div>
            <ImageComponent
              image={props.icon}
              alt="icon"
              className={props.iconClassName}
              imageProps={{ width: 60, height: 60 }}
            />
          </div>
        )}
        <h1
          className={cn(
            `text-2xl md:text-3xl xl:text-4xl font-semibold leading-tight
            tracking-tight text-center md:text-left thi-text-rainbow`
          )}
        >
          {props.title}
        </h1>
      </div>
    </Header>
  )
}

export function HeaderPageSkeleton(props: Partial<HeaderPageProps>) {
  return (
    <Header
      childrenContainerClassName={cn(props.childrenContainerClassName, 'animate-pulse')}
      headerType={props.headerType}
    >
      <div className="flex flex-col md:flex-row items-center gap-3 py-8">
        <div>
          <div className={cn(props.iconClassName, 'rounded-full bg-slate-400')}>
            <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"></div>
          </div>
        </div>
        <div className="h-[35px] bg-slate-400 w-[250px] rounded-lg"></div>
      </div>
    </Header>
  )
}
