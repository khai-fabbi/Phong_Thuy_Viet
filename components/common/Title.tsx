import React from "react"
import { ChitIcon } from "../icons"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  iconClassName?: string
}

const Title = ({ children, className, iconClassName }: Props) => {
  return (
    <h4
      className={cn(
        "text-lg font-semibold flex items-center gap-x-2",
        className
      )}
    >
      <ChitIcon className={iconClassName} />
      {children}
    </h4>
  )
}

export default Title
