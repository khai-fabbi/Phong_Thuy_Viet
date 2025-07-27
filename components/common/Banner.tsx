import { ChevronRight } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../ui/breadcrumb"
import NavigationBar from "./NavigationBar"
import Link from "next/link"

type Props = {
  title?: string
  breadcrumb?: {
    label: string
    href: string
  }[]
}

const Banner = ({ title, breadcrumb }: Props) => {
  return (
    <div className="bg-top-banner min-h-[380px] py-1.5">
      <div className="container">
        {/* Navigation */}
        <NavigationBar />

        {/* Title */}
        {title && (
          <div className="mt-24 flex flex-col items-center gap-y-3 text-white">
            <h2 className="text-center text-4xl font-bold uppercase">
              {title}
            </h2>
            <Breadcrumb>
              {breadcrumb?.map((item, index) => (
                <BreadcrumbItem key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-accent-orange"
                  >
                    {item.label}
                  </Link>
                  {index !== breadcrumb.length - 1 && (
                    <ChevronRight className="size-4" />
                  )}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </div>
        )}
      </div>
    </div>
  )
}

export default Banner
