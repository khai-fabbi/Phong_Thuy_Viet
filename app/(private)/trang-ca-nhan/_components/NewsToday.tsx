import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

const NewsToday = (props: Props) => {
  const news = [
    {
      title: "How to earn more money as a wellness coach 12312312 122",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi nulla diam ut eni",
    },
    {
      title:
        "How to earn more money as a wellness coach 2132323232 23123123123123 2312",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi nulla diam ut eni",
    },
    {
      title: "How to earn more money as a wellness coach",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi nulla diam ut eni",
    },
  ]
  return (
    <section className="bg-gray-50 rounded rounded-t-2xl">
      <Image
        src={
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Academics and Research"
        width={256}
        height={256}
        className="w-full aspect-video object-cover rounded-lg"
      />
      <div className="px-5 pb-6 -mt-4">
        <Badge className="text-base rounded-md h-8 bg-accent-orange">
          Tin tức hôm nay
        </Badge>
        <ul className="flex flex-col">
          {news.map((item, index) => (
            <li className="border-b border-gray-100 py-2" key={index}>
              <Link href="#" className="block items-center gap-x-2">
                <span className="font-semibold hover:underline hover:text-primary-dark transition-colors line-clamp-2">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          variant={"ghost"}
          className="bg-white w-full mt-4 text-primary hover:bg-primary hover:text-white"
        >
          Xem tất cả
        </Button>
      </div>
    </section>
  )
}

export default NewsToday
