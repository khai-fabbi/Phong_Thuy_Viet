import React from "react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Badge } from "../ui/badge"
import { UserLevel } from "@/lib/enums"
import { USER_LEVEL_LABEL } from "@/lib/constants"
import { Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/date"
import { Separator } from "../ui/separator"
import { ChitIcon } from "../icons"

interface Profile {
  id: string
  full_name: string
  avatarUrl: string
  description: string
  role: UserLevel
  role_display: string
  joining_date?: string
  followers_count: number
  following_count: number
  articles_count: number
}

type Props = {
  profile: Profile
  bottomContent?: React.ReactNode
}

const Profile = ({ profile, bottomContent }: Props) => {
  const levelLabel = USER_LEVEL_LABEL[profile.role]
  return (
    <section className="bg-gray-50 rounded-lg p-4 bg-[url('/profile-bg.png')] bg-contain bg-top bg-no-repeat">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2 items-center">
          <Avatar className="size-18 mt-2.5 shadow-lg">
            <AvatarImage src={profile.avatarUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-y-1 text-center">
            <h3 className="text-lg font-bold">{profile.full_name}</h3>
            <Badge
              className={cn(
                "bg-primary text-xs flex items-center gap-x-1 rounded-full",
                profile.role === UserLevel.EXPERT && "bg-[#9747FF]"
              )}
            >
              <Crown className="svg-animation" />
              {levelLabel}
            </Badge>
          </div>
          <p className="mt-2 text-gray-600 text-center line-clamp-3">
            {profile.description}
          </p>
        </div>
        {profile.joining_date && (
          <span className="text-gray-500">
            Ngày tham gia:{" "}
            <span className="font-bold text-foreground">
              {formatDate(profile.joining_date, "DD/MM/YYYY")}
            </span>
          </span>
        )}

        <div className="flex items-center">
          <div className="flex-1 flex flex-col items-center text-center gap-y-0.5 p-0.5">
            <span className="font-bold text-foreground text-xl">
              {profile.articles_count}
            </span>
            <span className="text-gray-600 text-sm">Bài viết</span>
          </div>
          <Separator
            orientation="vertical"
            className="!h-16 bg-gradient-to-b from-primary/5 via-primary-dark to-primary/5 mx-2"
          />
          <div className="flex-1 flex flex-col items-center text-center gap-y-0.5 p-0.5">
            <span className="font-bold text-foreground text-xl">
              {profile.followers_count}
            </span>
            <span className="text-gray-600 text-sm">Người theo dõi</span>
          </div>
          <Separator
            orientation="vertical"
            className="!h-16 bg-gradient-to-b from-primary/5 via-primary-dark to-primary/5 mx-2"
          />
          <div className="flex-1 flex flex-col items-center text-center gap-y-0.5 p-0.5">
            <span className="font-bold text-foreground text-xl">
              {profile.following_count}
            </span>
            <span className="text-gray-600 text-sm">Đang theo dõi</span>
          </div>
        </div>
        <div className="my-2 w-full gap-2 flex items-center justify-center overflow-hidden">
          <Separator className="bg-gradient-to-r rotate-180 from-primary to-primary-dark" />
          <ChitIcon className="shrink-0 size-5" />
          <Separator className="bg-gradient-to-r rotate-180 from-primary-dark to-primary" />
        </div>
      </div>
      {bottomContent}
    </section>
  )
}

export default Profile
