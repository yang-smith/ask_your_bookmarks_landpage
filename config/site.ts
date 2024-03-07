const baseSiteConfig = {
  name: "AI-Powered Bookmark Assistant",
  description:
    "Revolutionize your browsing experience with our AI-Powered Bookmark Assistant. Engage in simple conversations to swiftly locate and access your bookmarks, turning your massive collection into a smart and efficient library. No more clutter, just your bookmarks at the tip of your tongue.",
  url: "https://www.bookmarkbot.fun", // Replace with your actual URL
  keywords: [
    "AI Bookmark Assistant",
    "Bookmark Manager",
    "Smart Bookmarks",
    "Efficient Bookmark Organization",
    "AI Technology",
    "Browser Extension",
    "User-friendly Bookmarking",
    "Artificial Intelligence",
    "Bookmark Search",
    "Interactive Bookmarking",
    "Personalized Bookmark Assistant",
    "AI-Powered Tools"
  ],
  authors: [
    {
      name: "AutumnRiver",
      url: "https://twitter.com/jordenAAA",
    }
  ],
  creator: '@AutumnRiver',
  themeColor: '#fff',
  // 可以在这个网站生成所有平台的ico：https://realfavicongenerator.net/
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // ogImage: "https://nextjs.weijunext.com/og.jpg",
  links: {
    twitter: "https://twitter.com/jordenAAA",
    // github: "https://github.com/weijunext/nextjs-learn-demos",
  },
}

export const siteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "twitter.png",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/twitter.png`],
    creator: baseSiteConfig.creator,
  },
}