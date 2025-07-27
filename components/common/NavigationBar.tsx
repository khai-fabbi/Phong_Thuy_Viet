import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"
import { BellIcon } from "../icons"

type Props = {}

const NavigationBar = (props: Props) => {
  return (
    <div className="p-4 border rounded-lg border-primary/16 bg-[#02302C1A] backdrop-blur-lg flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Link href="/">
          <Button variant="ghost" className="bg-white/13 text-accent-orange">
            Home
          </Button>
        </Link>

        <Link href="#">
          <Button variant="ghost" className="text-white">
            Tổng quan
          </Button>
        </Link>

        <Link href="#">
          <Button variant="ghost" className="text-white">
            Bài viết
          </Button>
        </Link>

        <Link href="#">
          <Button variant="ghost" className="text-white">
            Đào tạo
          </Button>
        </Link>

        <Link href="#">
          <Button variant="ghost" className="text-white">
            Học thuật và nghiên cứu
          </Button>
        </Link>

        <Link href="#">
          <Button variant="ghost" className="text-white">
            Liên hệ
          </Button>
        </Link>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="bg-white/10 rounded-2xl group"
      >
        <BellIcon className="text-gray-100 group-hover:text-accent-orange transition-colors" />
      </Button>
    </div>
  )
}

export default NavigationBar
