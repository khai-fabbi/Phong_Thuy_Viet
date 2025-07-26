import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AvatarGroup from "../common/AvatarGroup"
import { cn } from "@/lib/utils"

type Props = {}

const AuthRightCard = (props: Props) => {
  return (
    <div
      className={cn(
        "h-[86vh] max-w-xl my-auto flex flex-col items-center justify-center bg-white rounded-2xl p-10",
        "bg-[url('/auth-bg.png')] bg-cover bg-right-bottom"
      )}
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-950">Welcome to ...</h2>
        <p className=" text-gray-900 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur. Nec laoreet integer elit
          viverra egestas urna. Sed lorem molestie feugiat tortor aenean. Purus
          cras volutpat lectus.
        </p>
        <p className="text-gray-900 line-clamp-1 font-semibold">
          Lorem ipsum dolor sit amet consectetur. Nec laoreet{" "}
        </p>
      </div>

      <div className="p-7 mt-7.5 mb-48 rounded-2xl border border-[#C7E2FF] text-gray-900 backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-950">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-gray-900 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur. Nec laoreet integer elit
            viverra egestas urna. Sed lorem molestie feugiat tortor aenean.
            Purus cras volutpat lectus.
          </p>
        </div>

        <AvatarGroup className="flex items-center mt-4" max={3}>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="bg-indigo-500 text-white">
              CN
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-green-600 text-white">
              CN
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-red-500 text-white">
              AB
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-indigo-500 text-white">
              VK
            </AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 first:ml-0 cursor-pointer">
            <AvatarFallback className="bg-orange-500 text-white">
              RS
            </AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  )
}

export default AuthRightCard
