"use client"

import React, { useState } from "react"
import ProfileBanner from "./_components/ProfileBanner"
import { Profile } from "@/components/common"
import { UserLevel } from "@/lib/enums"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HistoryIcon,
  SettingIcon,
  UserCheckIcon,
  UserPlusIcon,
} from "@/components/icons"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  ArticleCreateForm,
  ArticleList,
  ExpertRecomend,
  NewsToday,
} from "./_components"

const ProfilePage = () => {
  const [coverImage, setCoverImage] = useState<string>(
    "https://images.unsplash.com/photo-1488330890490-c291ecf62571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )

  const handleCoverImageChange = (imageUrl: string) => {
    setCoverImage(imageUrl)
    console.log("Cover image changed:", imageUrl)
  }

  const profile = {
    id: "1",
    full_name: "Vũ Đồng",
    avatarUrl: "https://github.com/shadcn.png",
    description:
      "I'd love to change the world, but they won’t give me the source code.",
    role: UserLevel.MEMBER,
    role_display: "Thành viên",
    joining_date: "2025-01-01",
    followers_count: 100,
    following_count: 88,
    articles_count: 10,
  }

  return (
    <div className="container mt-2 space-y-6 mb-16">
      <ProfileBanner
        coverImage={coverImage}
        onCoverImageChange={handleCoverImageChange}
      />

      <div className="grid grid-cols-4 gap-6">
        <Profile profile={profile} bottomContent={<ProfileBottomContent />} />
        <div className="col-span-2 space-y-6">
          <ArticleCreateForm />
          <ArticleList />
        </div>
        <div className="col-span-1 space-y-6">
          <ExpertRecomend />
          <NewsToday />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

const ProfileBottomContent = () => {
  const pathname = usePathname()
  const menu = [
    {
      label: "Cài đặt trang cá nhân",
      href: "/trang-ca-nhan/cai-dat",
      icon: <SettingIcon className="size-6" />,
    },
    {
      label: "Lịch sử đã xem",
      href: "/trang-ca-nhan/lich-su",
      icon: <HistoryIcon className="size-6" />,
    },
    {
      label: "Xem người theo dõi",
      href: "/trang-ca-nhan/followers",
      icon: <UserPlusIcon className="size-6" />,
    },
    {
      label: "Người tôi theo dõi",
      href: "/trang-ca-nhan/followings",
      icon: <UserCheckIcon className="size-6" />,
    },
  ]
  return (
    <ul>
      {menu.map((item, idx) => {
        const isActive = pathname.includes(item.href)
        return (
          <li key={idx}>
            <Link href={item.href}>
              <Button
                variant="ghost"
                size="lg"
                className={cn(
                  "!px-2.5 w-full justify-start hover:bg-primary/30",
                  isActive && "bg-primary/50"
                )}
              >
                {item.icon}
                {item.label}
              </Button>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
