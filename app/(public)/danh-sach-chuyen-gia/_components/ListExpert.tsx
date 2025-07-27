import { ExpertCard } from "@/components/card"
import { ChitIcon } from "@/components/icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  title: string
  subTitle: string
  containerClassName?: string
}

const ListExpert = ({ title, subTitle, containerClassName }: Props) => {
  return (
    <section
      className={cn(
        "rounded-2xl px-6 py-8 bg-primary-dark text-white space-y-6",
        containerClassName
      )}
    >
      {/* title */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold flex-1 flex items-center gap-x-2">
          <ChitIcon color="currentColor" />
          {title}
        </h2>
        <p className="font-semibold">{subTitle}</p>
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

export default ListExpert
