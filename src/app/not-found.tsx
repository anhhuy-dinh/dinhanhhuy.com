// https://nextjs.org/docs/app/api-reference/file-conventions/not-found
import cn from 'classnames'
import Link from 'next/link'

import me from '../data/me'
import Container from './components/Container'
import { containerWide } from './lib/config'
import { generateMetaTitle } from './lib/helpers'

export const metadata = {
  title: generateMetaTitle('Page not found!'),
  openGraph: {
    images: [
      {
        url: 'https://i.imgur.com/DvWuLpyh.png',
        width: 1024,
        height: 581
      }
    ]
  }
}

export default function NotFoundPage() {
  return (
    <Container className={cn('h-screen', containerWide)}>
      <div className={cn('flex flex-col gap-6 items-center justify-center w-full h-full')}>
        <h1 className="text-4xl text-slate-800">Page not found!</h1>
        <p className="text-xl text-slate-800">
          Please use the search or{' '}
          <a className="m2it-link hover:m2it-link-hover" href={`mailto:${me.email}`}>
            contact me
          </a>
          .
        </p>
        <p className="text-xl">
          <Link className="m2it-link hover:m2it-link-hover font-semibold" href="/">
            Back to home
          </Link>
        </p>
      </div>
    </Container>
  )
}
