import { ChitIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import Link from "next/link"
interface CategoryTitleProps {
  title: string
  seeAllLink?: string
  containerClassName?: string
}
export default function CategoryTitle({
  title,
  seeAllLink,
  containerClassName,
}: CategoryTitleProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-x-2",
        containerClassName
      )}
    >
      <h2 className="text-lg font-semibold flex-1 flex items-center gap-x-2">
        <ChitIcon />
        {title}
      </h2>

      {seeAllLink && (
        <Link href={seeAllLink} className="text-sm text-[#007AFF] text-link">
          Xem tất cả
        </Link>
      )}
    </div>
  )
}
