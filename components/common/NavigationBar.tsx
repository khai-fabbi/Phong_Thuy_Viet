"use client"
import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"
import { BellIcon } from "../icons"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type Props = {}

const navigations = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tổng quan",
    href: "/tong-quan-hoi",
  },
  {
    label: "Bài viết",
    href: "/news",
  },
  {
    label: "Danh sách chuyên gia",
    href: "/danh-sach-chuyen-gia",
  },
  {
    label: "Học thuật và nghiên cứu",
    href: "/hoc-thuat-va-nghien-cuu",
  },
  {
    label: "Liên hệ",
    href: "#contact",
  },
]
const NavigationBar = (props: Props) => {
  const pathname = usePathname()
  return (
    <div className="p-4 border rounded-lg border-primary/16 bg-[#02302C1A] backdrop-blur-lg flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        {navigations.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <Button
              variant="ghost"
              className={cn(
                "text-white",
                pathname === item.href && "bg-white/13 text-accent-orange"
              )}
            >
              {item.label}
            </Button>
          </Link>
        ))}
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
