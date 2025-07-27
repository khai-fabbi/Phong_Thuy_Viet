import React from "react"
import CategoryTitle from "./CategoryTitle"
import { ArticleCard } from "@/components/card"

const EventContainer = () => {
  const events = [
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
  ]
  return (
    <section className="bg-gray-50 rounded-lg p-4">
      <CategoryTitle title="Sự kiện" seeAllLink="/events" />
      <ul className="mt-4 -mx-2">
        {events.map(newsItem => (
          <li key={newsItem.id}>
            <ArticleCard article={newsItem} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default EventContainer
