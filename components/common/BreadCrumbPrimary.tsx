import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"
import { ChevronsRight, HomeIcon } from "lucide-react"
import Link from "next/link"

type Props = {
  containerClassName?: string
  items: {
    label: string
    href: string
  }[]
}

const BreadCrumbPrimary = ({ items, containerClassName }: Props) => {
  return (
    <Breadcrumb className={cn("bg-primary p-4 rounded-md", containerClassName)}>
      <BreadcrumbList className="text-white">
        {items.map((item, idx) => (
          <BreadcrumbItem key={idx}>
            {idx === 0 ? (
              <HomeIcon className="size-5" />
            ) : (
              <ChevronsRight className="size-5" />
            )}
            <Link href={item.href}>{item.label}</Link>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbPrimary
