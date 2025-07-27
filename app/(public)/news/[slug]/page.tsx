import { ArticleCard } from "@/components/card"
import { BreadCrumbPrimary, Title } from "@/components/common"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DotIcon, PlusCircleIcon, User } from "lucide-react"
import Link from "next/link"

type Props = {}

const NewsDetailPage = (props: Props) => {
  const breadcrumbItems = [
    {
      label: "Trang chủ",
      href: "/",
    },
    {
      label: "Tin tức",
      href: "/news",
    },
  ]
  const articleSameTopic = [
    {
      id: "1",
      title: "Những điều bạn cần biết về phong thủy nhà ở",
      slug: "phong-thuy-nha-o",
      description: "Những điều bạn cần biết về phong thủy nhà ở",
      image:
        "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "QK",
    },
    {
      id: "2",
      title: "Phong thủy nhà ở",
      slug: "phong-thuy-nha-o",
      description: "Phong thủy nhà ở",
      image:
        "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "QK",
    },
    {
      id: "3",
      title: "Phong thủy nhà ở",
      slug: "phong-thuy-nha-o",
      description: "Phong thủy nhà ở",
      image:
        "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "QK",
    },
    {
      id: "4",
      title: "Phong thủy nhà ở",
      slug: "phong-thuy-nha-o",
      description: "Phong thủy nhà ở",
      image:
        "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      authorName: "QK",
    },
  ]
  return (
    <div className="container mt-2">
      <BreadCrumbPrimary items={breadcrumbItems} />
      <div className="mt-8 mb-20 flex gap-6">
        {/* Left Side */}
        <div className="flex-1 rounded-lg bg-gray-50 p-4">
          <h4 className="text-2xl font-semibold text-gray-950">
            Bí mật phong thuỷ của Lăng Gia Long
          </h4>

          <div className="mt-4 flex items-center gap-2">
            <Avatar className="size-10 md:size-12.5 ring-1 ring-green-500 ring-offset-1 ring-offset-background">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>
                <User className="size-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-primary-dark">Trung Hoàng</span>
                <Button size={"sm"} className="leading-1">
                  <PlusCircleIcon className="size-4" />
                  Theo dõi
                </Button>
              </div>
              <span className="text-gray-500 flex items-center gap-1">
                1/7/2025{" "}
                <DotIcon className="size-4 inline-block" strokeWidth={6} /> Phản
                hồi: 18
              </span>
            </div>
          </div>

          <div className="mt-4">
            Content Here
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
              perspiciatis quia ratione a distinctio magnam eum, obcaecati
              maiores eius deleniti necessitatibus sapiente optio alias eaque
              fugit fuga suscipit natus expedita!
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-90 sticky shrink-0">
          <div className="space-y-6">
            <div className="space-y-4">
              <Title>Tag</Title>
              <div className="flex flex-wrap gap-2">
                <Link href="/news?tag=moi-nhat">
                  <Badge
                    variant={"secondary"}
                    className="text-base rounded-md h-8 px-3.5 transition-all duration-200 hover:bg-primary-dark hover:text-white"
                  >
                    #Mới nhất
                  </Badge>
                </Link>

                <Link href="/news?tag=duoc-yeu-thich-nhat">
                  <Badge
                    variant={"secondary"}
                    className="text-base rounded-md h-8 px-3.5 transition-all duration-200 hover:bg-primary-dark hover:text-white"
                  >
                    #Được yêu thích nhất
                  </Badge>
                </Link>

                <Link href="/news?tag=tin-hot-nhat">
                  <Badge
                    variant={"secondary"}
                    className="text-base rounded-md h-8 px-3.5 transition-all duration-200 hover:bg-primary-dark hover:text-white"
                  >
                    #Tin hot nhất
                  </Badge>
                </Link>

                <Link href="/news?tag=duoc-yeu-thich-nhat">
                  <Badge
                    variant={"secondary"}
                    className="text-base rounded-md h-8 px-3.5 transition-all duration-200 hover:bg-primary-dark hover:text-white"
                  >
                    #Được yêu thích nhất
                  </Badge>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <Title>Bài viết cùng chủ đề</Title>
              <ul className="space-y-2">
                {articleSameTopic.map(item => (
                  <li key={item.id}>
                    <ArticleCard article={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetailPage
