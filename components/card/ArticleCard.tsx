import Image from "next/image"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { User } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Article {
  id: string
  title: string
  slug: string
  description: string
  image: string
  authorName: string
}

type Props = {
  article: Article
  containerClassName?: string
  isVertical?: boolean
}

const ArticleCard = ({
  article: { id, slug, title, description, image, authorName },
  containerClassName,
  isVertical = false,
}: Props) => {
  return (
    <Link
      href={`/news/${slug}`}
      className={cn(
        "flex gap-4 p-2 bg-gray-50 hover:bg-gray-100 hover:shadow rounded-lg group transition-all duration-200",
        isVertical ? "flex-col" : "flex-row",
        containerClassName
      )}
    >
      <div
        className={cn(
          "shrink-0 max-w-[150px] w-full aspect-[1.5625] overflow-hidden rounded-md group-hover:shadow-xl transition-all",
          isVertical ? "max-w-full" : "max-w-[150px]"
        )}
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="rounded-md object-cover size-full group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-y-2 flex-1 h-auto">
        <h5 className="font-semibold text-gray-950 group-hover:text-primary-dark transition-colors line-clamp-2">
          {title}
        </h5>
        <div className="flex items-center gap-x-2.5 mb-0.5 mt-auto">
          <Avatar className="size-8 md:size-9.5 ring-1 ring-green-500 ring-offset-1 ring-offset-background">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <User className="size-5" />
            </AvatarFallback>
          </Avatar>

          <span className="font-semibold text-gray-900">{authorName}</span>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
