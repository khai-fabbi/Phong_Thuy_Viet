import React from "react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { PlusCircleIcon, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

type Props = {
  id: string
  name: string
  image: string
}

const ExpertCard = ({ id, name, image }: Props) => {
  return (
    <Card className="p-4">
      <CardContent className="flex flex-col gap-y-3 p-0">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="size-16 md:size-24 ring-1 ring-green-500 ring-offset-1 ring-offset-background">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <span className="block font-semibold text-gray-950">{name}</span>
            <span className="block text-xs text-gray-400">(Chuyên gia)</span>
          </div>
        </div>
        <Button className="w-full">
          <PlusCircleIcon className="size-5" />
          Theo dõi
        </Button>
      </CardContent>
    </Card>
  )
}

export default ExpertCard
