import { Title } from "@/components/common"
import { UserCheck } from "@/components/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, PlusIcon } from "lucide-react"
import React from "react"

type Props = {}

const ExpertRecomend = (props: Props) => {
  const experts = [
    {
      id: 1,
      name: "Minh Hoàng",
      avatar: "https://github.com/shadcn.png",
      role: "Chuyên gia",
      hasFollow: false,
    },
    {
      id: 2,
      name: "Vũ đồng",
      avatar: "https://github.com/shadcn.png",
      role: "Vũ đồng",
      hasFollow: true,
    },
    {
      id: 3,
      name: "TS Hồ Quốc Nam",
      avatar: "https://github.com/shadcn.png",
      role: "Chuyên gia",
      hasFollow: false,
    },
    {
      id: 4,
      name: "Trần đức  Anh",
      avatar: "https://github.com/shadcn.png",
      role: "Chuyên gia",
      hasFollow: true,
    },
    {
      id: 5,
      name: "Linh Võ",
      avatar: "https://github.com/shadcn.png",
      role: "Chuyên gia",
      hasFollow: false,
    },
  ]
  return (
    <section className="bg-gray-50 rounded-lg p-4 space-y-4">
      <Title>Chuyên gia</Title>
      <ul className="flex flex-col gap-y-4">
        {experts.map(expert => (
          <li key={expert.id}>
            <ExpertItem expert={expert} />
          </li>
        ))}
      </ul>
    </section>
  )
}

interface Expert {
  id: number
  name: string
  avatar: string
  role: string
  hasFollow: boolean
}

export default ExpertRecomend

const ExpertItem = ({ expert }: { expert: Expert }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex-1 flex items-center gap-x-1.5">
        <Avatar className="size-10">
          <AvatarImage src={expert.avatar} />
          <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold capitalize text-base line-clamp-1">
            {expert.name}
          </h3>
          <p className="text-sm text-gray-400">{expert.role}</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "size-8 rounded-full bg-[#8EC73D26] hover:bg-primary group",
          expert.hasFollow && "bg-primary"
        )}
      >
        {expert.hasFollow ? (
          <UserCheck className="text-white" />
        ) : (
          <PlusIcon className="size-5 text-primary group-hover:text-white transition-colors" />
        )}
      </Button>
    </div>
  )
}
