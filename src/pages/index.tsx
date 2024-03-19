import Image from 'next/image'
import { Inter } from 'next/font/google'

// import {Landpage} from "@/components/component/landpage"
import {Landpage} from "@/components/component/landpagetest"
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { siteConfig } from "../../config/site";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  // metadataBase: siteConfig.metadataBase,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const browserLanguage = navigator.language;
    // 如果瀏覽器語言是中文（zh-CN或zh-TW），則跳轉到指定頁面
    if (browserLanguage.startsWith('zh')) {
      router.push('/cn'); // 替換'/zh-page'為您的目標頁面路徑
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Sleek and Smart AI-Powered Bookmark Manager - BookmarkBot</title>
        <meta name="description" content="BookmarkBot, powered by AI, makes organizing and searching your bookmarks easier than ever. Just describe what you remember, no matter how vague, and quickly find the web page you're looking for. Join us to make your bookmark collection smart and effortlessly organized." />
        {/* <meta property="og:image" content="https://www.bookmarkbot.fun/image.png" /> */}
        {/* <meta name="twitter:card" content="https://www.bookmarkbot.fun/twitter.png" />
        <meta name="twitter:title" content="BookmarkBot" />
        <meta name="twitter:description" content="AI-Powered Bookmark Assistant" />
        <meta name="twitter:image" content="https://www.bookmarkbot.fun/twitter.png" /> */}
      </Head>
    <Landpage />
    <Analytics />
  </div>
  )
}
