import Image from 'next/image'
import { Inter } from 'next/font/google'

import {Landpage} from "@/components/component/landpage"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Landpage />
  </div>
  )
}
