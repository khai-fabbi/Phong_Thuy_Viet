import React from "react"
import CategoryTitle from "./CategoryTitle"
import { Separator } from "@/components/ui/separator"
import { ChitIcon } from "@/components/icons"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

const Overview = () => {
  return (
    <section className="bg-gray-50 rounded-lg p-4 space-y-4">
      <CategoryTitle title="Tổng quan về hội" />
      <div className="space-y-4">
        <p>
          <span className="font-semibold text-primary-dark">
            Phân hội khoa học địa lý phong thủy Việt Nam
          </span>{" "}
          Phân hội khoa học địa lý phong thủy Việt Nam là tổ chức xã hội – nghề
          nghiệp của công dân, tổ chức Việt Nam hoạt động trong lĩnh vực khoa
          học địa lý phong thủy hoặc liên quan đến địa lý môi trường trực thuộc 
          <span className="font-semibold text-primary-dark">
            Hội Địa lý Môi trường Việt Nam
          </span>
          , nhằm mục giúp con người thích ứng với môi trường, góp phần bảo vệ
          môi trường và sự phát triển bền vững của đất nước theo đúng định hướng
          phát triển của Hội Địa lý Môi trường Việt Nam.
        </p>

        <div className="w-full gap-2 flex items-center justify-center overflow-hidden">
          <Separator className="bg-gradient-to-r rotate-180 from-primary to-primary-dark" />
          <ChitIcon className="shrink-0 size-5" />
          <Separator className="bg-gradient-to-r rotate-180 from-primary-dark to-primary" />
        </div>

        <div className="space-y-2.5">
          <h4 className="text-primary-dark font-semibold text-lg">
            Nguyên tắc tổ chức hoạt động
          </h4>
          <div className="space-y-2.5">
            <p>
              Phân Hội có phạm vi hoạt động trong cả nước, trong lĩnh vực khoa
              học địa lý phong thủy hoặc liên quan đến lĩnh vực địa lý phong
              thủy theo quy định của pháp luật.
            </p>
            <p>
              Phân Hội chịu sự quản lý Hội Địa lý Môi trường Việt Nam và Bộ,
              ngành có liên quan đến lĩnh vực hoạt động của Phân Hội theo quy
              định của pháp luật.
            </p>

            <ul className="space-y-2.5">
              <li>
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src="/ThaiCuc.png"
                    alt="overview"
                    width={100}
                    height={100}
                    className="size-6"
                  />
                  <span>Tự nguyện, tự quản.</span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src="/ThaiCuc.png"
                    alt="overview"
                    width={100}
                    height={100}
                    className="size-6"
                  />
                  <span>Dân chủ, bình đẳng, công khai, minh bạch</span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src="/ThaiCuc.png"
                    alt="overview"
                    width={100}
                    height={100}
                    className="size-6"
                  />
                  <span>Tự đảm bảo kinh phí hoạt động.</span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src="/ThaiCuc.png"
                    alt="overview"
                    width={100}
                    height={100}
                    className="size-6"
                  />
                  <span>Không vì mục đích lợi nhuận.</span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src="/ThaiCuc.png"
                    alt="overview"
                    width={100}
                    height={100}
                    className="size-6"
                  />
                  <span>
                    Tuân thủ Hiến pháp, pháp luật và Điều lệ Hội Địa lý Môi
                    trường Việt Nam.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Author */}

        <div className="flex items-center gap-x-4">
          <Avatar className="size-12 md:size-16 ring-2 ring-accent-orange ring-offset-[2px] ring-offset-background">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <User className="size-6" />
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <p className="text-primary-dark font-semibold text-lg">
              <span className="text-gray-500 font-normal text-base"> ông </span>{" "}
              Phạm Huy Khiêm
            </p>
            <p className="text-gray-500 text-sm italic">
              Chủ tịch hội địa lý môi trường Việt Nam
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
