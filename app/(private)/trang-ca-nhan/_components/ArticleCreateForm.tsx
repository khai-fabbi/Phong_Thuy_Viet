import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import React, { useState } from "react"
import CreateAticlesModal from "./CreateAticlesModal"

type Props = {}

const ArticleCreateForm = (props: Props) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const startCreateArticle = () => setOpen(true)

  return (
    <div>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-12 ring-1 ring-primary ring-offset-1">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div
            tabIndex={-1}
            onClick={startCreateArticle}
            className="flex-1 flex items-center font-medium hover:text-primary-dark hover:bg-primary/40 active:scale-98 transition-all rounded-full bg-white p-3 h-11 text-sm cursor-pointer"
          >
            Bạn muốn chia sẻ điều gì
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={startCreateArticle}
            className="flex items-center gap-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-foreground"
          >
            <img src="/image-upload-icon.png" alt="image" className="size-6" />
            <span className="text-sm">Tải ảnh</span>
          </Button>

          <Button
            variant="ghost"
            onClick={startCreateArticle}
            className="flex items-center gap-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-foreground"
          >
            <img src="/video-upload-icon.png" alt="image" className="size-6" />
            <span className="text-sm">Tải video</span>
          </Button>
        </div>
      </div>
      <CreateAticlesModal open={open} onOpenChange={toggleOpen} />
    </div>
  )
}

export default ArticleCreateForm
