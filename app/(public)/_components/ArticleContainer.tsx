import { ArticleCard } from "@/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const ArticleContainer = () => {
  const articles = [
    {
      id: "1",
      title:
        "Phân hội khoa học địa lý phong thủy Việt Nam Phân hội khoa học địa lý phong thủy Việt Nam là tổ chức xã hội",
      slug: "tin-tuc-1",
      description: "Tin tức 1",
      image:
        "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn A",
    },
    {
      id: "2",
      title: "Tin tức 2",
      slug: "tin-tuc-2",
      description: "Tin tức 2",
      image:
        "https://images.unsplash.com/photo-1420593248178-d88870618ca0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn B",
    },
    {
      id: "3",
      title: "Tin tức 3",
      slug: "tin-tuc-3",
      description: "Tin tức 3",
      image:
        "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn C",
    },
    {
      id: "4",
      title: "Tin tức 4",
      slug: "tin-tuc-4",
      description: "Tin tức 4",
      image:
        "https://plus.unsplash.com/premium_photo-1675127367513-7f4388aa9076?q=80&w=681&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn D",
    },
  ]
  return (
    <section className="grid grid-cols-2 gap-6">
      <LastestArticle
        title="Bài viết mới nhất"
        slug="bai-viet-moi-nhat"
        image="https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        authorName="Trunghoang"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      />
      <div className="grid grid-cols-2 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} isVertical />
        ))}
      </div>
    </section>
  )
}

export default ArticleContainer

type Props = {
  title: string
  slug: string
  image: string
  authorName: string
  description: string
}
export const LastestArticle = ({
  title,
  slug,
  image,
  authorName,
  description,
}: Props) => {
  return (
    <Link
      href={`/news/bai-viet-moi-nhat`}
      className="flex flex-col gap-4 group"
    >
      <div className="shrink-0 w-full aspect-[2] overflow-hidden rounded-md group-hover:shadow-xl transition-all">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="rounded-md object-cover size-full group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-y-4 flex-1">
        <h5 className="text-2xl font-bold text-gray-950 group-hover:text-primary-dark transition-colors line-clamp-2">
          {title}
        </h5>
        <p
          className="text-gray-800"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex items-center gap-x-2.5 mb-4 mt-auto">
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
