import { Profile } from "@/components/common"
import { ShareIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { UserLevel } from "@/lib/enums"
import { Ellipsis, Link, PlusCircleIcon, Search } from "lucide-react"
import React from "react"

type Props = {}

const ExpertProfile = (props: Props) => {
  const profile = {
    id: "1",
    full_name: "Vũ Đồng",
    avatarUrl: "https://github.com/shadcn.png",
    description:
      "I'd love to change the world, but they won’t give me the source code.",
    role: UserLevel.EXPERT,
    role_display: "Chuyên gia",
    joining_date: "2025-01-01",
    followers_count: 100,
    following_count: 88,
    articles_count: 10,
  }
  return <Profile profile={profile} bottomContent={<BottomContent />} />
}

export default ExpertProfile

const BottomContent = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-evenly gap-x-1">
        <Button
          variant="outline"
          size="icon"
          className="bg-gray-100 rounded-full text-primary-dark hover:bg-gray-300 hover:text-primary-dark hover:scale-110 transition-all"
        >
          <ShareIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-gray-100 rounded-full text-primary-dark hover:bg-gray-300 hover:text-primary-dark hover:scale-110 transition-all"
        >
          <Link strokeWidth={2} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-gray-100 rounded-full text-primary-dark hover:bg-gray-300 hover:text-primary-dark hover:scale-110 transition-all"
        >
          <Search />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-gray-100 rounded-full text-primary-dark hover:bg-gray-300 hover:text-primary-dark hover:scale-110 transition-all"
        >
          <Ellipsis />
        </Button>
      </div>
      <Button className="w-full group" size="lg">
        <PlusCircleIcon className="!size-6 group-hover:rotate-180 transition-transform" />
        Theo dõi
      </Button>
    </div>
  )
}
