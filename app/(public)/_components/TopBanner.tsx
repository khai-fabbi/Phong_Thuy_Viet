import { BellIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const TopBanner = () => {
  return (
    <section>
      <div className="bg-top-banner min-h-[380px] py-1.5">
        <div className="container">
          {/* Navigation */}
          <div className="p-4 border rounded-lg border-primary/16 bg-[#02302C1A] backdrop-blur-lg flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="bg-white/13 text-accent-orange"
                >
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
        </div>

        {/* Animated Banner Text */}
      </div>
      <div className="overflow-hidden bg-primary backdrop-blur-sm py-4">
        <div
          className="text-white text-4xl font-semibold whitespace-nowrap py-4 animate-marquee"
          style={{
            animationDuration: `30s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <span className="inline-block px-4">
            🌟 Chào mừng đến với Phong Thủy Việt - Nơi chia sẻ kiến thức phong
            thủy chuyên nghiệp 🌟
          </span>
          <span className="inline-block px-4">
            🌟 Chào mừng đến với Phong Thủy Việt - Nơi chia sẻ kiến thức phong
            thủy chuyên nghiệp 🌟
          </span>
        </div>
      </div>
    </section>
  )
}

export default TopBanner
