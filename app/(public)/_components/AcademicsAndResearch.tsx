import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

const AcademicsAndResearch = (props: Props) => {
  return (
    <section className="bg-gray-50 rounded rounded-t-2xl">
      <Image
        src={
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Academics and Research"
        width={1000}
        height={1000}
        className="w-full aspect-video object-cover rounded-2xl"
      />
      <div className="px-5 pb-6 -mt-4">
        <Badge className="text-base rounded-md h-8">
          Học thuật và nghiên cứu
        </Badge>
        <ul>
          <li className="border-b border-gray-100">
            <Link
              href="#"
              className="line-clamp-2 font-semibold py-4 hover:underline hover:text-primary-dark transition-colors"
            >
              How to earn more money as a wellness coach
            </Link>
          </li>
          <li className="border-b border-gray-100">
            <Link
              href="#"
              className="line-clamp-2 font-semibold py-4 hover:underline hover:text-primary-dark transition-colors"
            >
              Lorem ipsum dolor sit amet consectetur. Morbi nulla diam ut eni
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className="line-clamp-2 font-semibold py-4 hover:underline hover:text-primary-dark transition-colors"
            >
              Lorem ipsum dolor sit amet consectetur. Morbi nulla diam ut eni
            </Link>
          </li>
        </ul>
        <Button
          size={"lg"}
          variant={"ghost"}
          className="bg-white w-full mt-4 text-primary hover:bg-primary hover:text-white"
        >
          Xem tất cả
        </Button>
      </div>
    </section>
  )
}

export default AcademicsAndResearch
