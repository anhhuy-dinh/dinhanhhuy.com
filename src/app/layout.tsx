import toTopImg from '@root/public/to-top.webp'
import Nav from '@root/src/app/components/nav/Nav'
import '@root/src/fontello/css/fontello.css'
import { Analytics } from '@vercel/analytics/react'
// import Script from 'next/script'
import ScrollToTop from 'notion-nextjs-lib/dist/components/ScrollToTop'
import 'notion-nextjs-lib/dist/styles.css'

import me from '../data/me'
import { poppins } from './lib/fonts'
import './styles.scss'

export const revalidate = 60

export const metadata = {
  metadataBase: new URL(me.website)
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=G-K3YRSB918B`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K3YRSB918B');
        `}
      </Script> */}
      <body suppressHydrationWarning={true}>
        <div className="flex min-h-screen flex-col justify-between">
          <Nav />
          <div className="mb-auto">
            <main>{children}</main>
          </div>
          <ScrollToTop image={toTopImg} />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
