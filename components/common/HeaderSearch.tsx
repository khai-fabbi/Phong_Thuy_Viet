import React from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  placeholder?: string
  className?: string
  onSearch?: (value: string) => void
  defaultValue?: string
}

const HeaderSearch = ({
  placeholder = "Tìm kiếm...",
  className,
  onSearch,
  defaultValue = "",
}: Props) => {
  const [searchValue, setSearchValue] = React.useState(defaultValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearch?.(value)
  }

  return (
    <div className={cn("relative bg-gray-50 rounded-lg", className)}>
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-foreground svg-animation" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        className="pl-12 h-11 focus-visible:ring-primary"
      />
    </div>
  )
}

export default HeaderSearch
