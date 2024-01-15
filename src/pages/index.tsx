import Image from 'next/image'
import { Inter } from 'next/font/google'

import {Landpage} from "@/components/component/landpage"
// import {Landpage} from "@/components/component/landpagetest"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Landpage />
    <Analytics />
  </div>
  )
}
