import React from "react"
import CategoryTitle from "./CategoryTitle"
import { ChitIcon } from "@/components/icons"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ExpertCard } from "@/components/card"

type Props = {}

const SuggestedExperts = (props: Props) => {
  return (
    <section className="rounded-2xl px-6 py-8 bg-primary-dark text-white space-y-6">
      {/* title */}
      <div className={"flex justify-between items-center gap-x-2"}>
        <h2 className="text-lg font-semibold flex-1 flex items-center gap-x-2">
          <ChitIcon color="white" />
          Gợi ý chuyên gia
        </h2>

        <Link href={"/experts"} className="text-sm text-white hover:underline">
          Xem tất cả
        </Link>
      </div>

      <div className="px-2">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="p-1">
                  <ExpertCard
                    id={index.toString()}
                    name={`Quang Khải`}
                    image={`https://via.placeholder.com/150?text=${index + 1}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </section>
  )
}

export default SuggestedExperts
