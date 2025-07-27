import { ArticleCard } from "@/components/card"
import { Banner, Title } from "@/components/common"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

type Props = {}

const NewsPage = (props: Props) => {
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
    {
      id: "5",
      title: "Tin tức 5",
      slug: "tin-tuc-5",
      description: "Tin tức 5",
      image:
        "https://images.unsplash.com/photo-1519092503391-16a955fda811?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn E",
    },
    {
      id: "6",
      title: "Tin tức 6",
      slug: "tin-tuc-6",
      description: "Tin tức 6",
      image:
        "https://images.unsplash.com/photo-1519092503391-16a955fda811?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn F",
    },
    {
      id: "7",
      title: "Tin tức 7",
      slug: "tin-tuc-7",
      description: "Tin tức 7",
      image:
        "https://images.unsplash.com/photo-1683009427500-71296178737f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn G",
    },
    {
      id: "8",
      title: "Tin tức 8",
      slug: "tin-tuc-8",
      description: "Tin tức 8",
      image:
        "https://images.unsplash.com/photo-1735746693939-586a9d7558e1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn H",
    },
    {
      id: "9",
      title: "Tin tức 9",
      slug: "tin-tuc-9",
      description: "Tin tức 9",
      image:
        "https://images.unsplash.com/photo-1735746693939-586a9d7558e1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "Nguyễn Văn I",
    },
  ]

  const categories = [
    {
      id: "1",
      name: "Tin tức mới",
      slug: "tin-tuc-moi",
    },
    {
      id: "2",
      name: "Khóa đào tạo",
      slug: "khoa-dao-tao",
    },
    {
      id: "3",
      name: "Sự kiện",
      slug: "su-kien",
    },
    {
      id: "4",
      name: "Học thuật và nghiên cứu",
      slug: "hoc-thuat-va-nghien-cuu",
    },
  ]
  return (
    <div className="space-y-16 mb-10 md:mb-20">
      <div className="animate-fade-in-up">
        <Banner
          title="Tin tức"
          breadcrumb={[
            { label: "Trang chủ", href: "/" },
            { label: "Tin tức", href: "/news" },
          ]}
        />
      </div>
      <div className="container flex gap-6">
        {/* left  */}
        <div className="flex-1 space-y-8">
          <ul className="grid grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <li
                key={article.id}
                className="animate-fade-in-up h-full"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "both",
                }}
              >
                <ArticleCard
                  containerClassName="h-full"
                  isVertical
                  article={article}
                />
              </li>
            ))}
          </ul>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                {[1, 2, 3, 4, 5].map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href={`#${page}`}
                      isActive={page === 2}
                      className="rounded-full hover:scale-105 transition-transform"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        {/* right */}
        <div className="w-90 shrink-0 sticky top-20 space-y-6">
          <div className="bg-gray-50 p-4 space-y-4">
            <Title>Tìm kiếm</Title>
            <div className="relative">
              <Input placeholder="Tìm kiếm" className="bg-white" />
              <Button
                size={"icon"}
                className="size-10 absolute right-1 top-1 rounded-md"
              >
                <SearchIcon className="size-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Title>Bài viết đáng chú ý</Title>
            <ul className="flex flex-col gap-2">
              {articles.slice(0, 4).map((article, idx) => (
                <li
                  key={article.id}
                  className="animate-fade-in-up"
                  style={{
                    animationDelay: `${idx * 0.2}s`,
                    animationFillMode: "both",
                  }}
                >
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-4">
            <Title>Category</Title>
            <ul>
              {categories.map((category, idx) => (
                <li
                  className={
                    "border-b border-gray-100 [&:last-child]:border-b-0 [&:last-child>a]:pb-1"
                  }
                  key={category.id}
                >
                  <Link
                    href="#"
                    className="line-clamp-1 font-semibold py-4 hover:underline hover:text-primary-dark transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
