import Image from 'next/image'
import { Inter } from 'next/font/google'

// import {Landpage} from "@/components/component/landpage"
import {Landpage} from "@/components/component/landpagetest"
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI-Powered Bookmark Assistant</title>
        <meta name="description" content="Revolutionize your browsing experience with our AI-Powered Bookmark Assistant. Engage in simple conversations to swiftly locate and access your bookmarks, turning your massive collection into a smart and efficient library." />
        {/* <meta property="og:image" content="https://www.bookmarkbot.fun/image.png" /> */}
        <meta name="twitter:card" content="https://www.bookmarkbot.fun/twitter.png" />
        <meta name="twitter:title" content="BookmarkBot" />
        <meta name="twitter:description" content="AI-Powered Bookmark Assistant" />
        <meta name="twitter:image" content="https://www.bookmarkbot.fun/twitter.png" />
      </Head>
    <Landpage />
    <Analytics />
  </div>
  )
}
