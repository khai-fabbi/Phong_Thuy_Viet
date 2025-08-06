"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Image, Upload, X, Hash } from "lucide-react"
import React, { useState, useRef } from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChitIcon } from "@/components/icons"

interface CreateAticlesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Mock hashtags data
const hashtags = [
  { value: "phong-thuy", label: "#phongthuy" },
  { value: "nha-o", label: "#nhao" },
  { value: "kien-truc", label: "#kientruc" },
  { value: "moi-truong", label: "#moitruong" },
  { value: "thiet-ke", label: "#thietke" },
  { value: "van-hoa", label: "#vanhoa" },
  { value: "tam-linh", label: "#tamlinh" },
  { value: "cuoc-song", label: "#cuocsong" },
]

const CreateAticlesModal = ({
  open,
  onOpenChange,
}: CreateAticlesModalProps) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hashtagOpen, setHashtagOpen] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])

    // Validate file types
    const validFiles = files.filter(file => {
      const isValidType =
        file.type.startsWith("image/") || file.type.startsWith("video/")
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB limit

      if (!isValidType) {
        alert("Chỉ chấp nhận file ảnh hoặc video")
        return false
      }

      if (!isValidSize) {
        alert("Kích thước file không được vượt quá 10MB")
        return false
      }

      return true
    })

    setUploadedFiles(prev => [...prev, ...validFiles])

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const toggleHashtag = (hashtagValue: string) => {
    setSelectedHashtags(prev =>
      prev.includes(hashtagValue)
        ? prev.filter(h => h !== hashtagValue)
        : [...prev, hashtagValue]
    )
  }

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Vui lòng điền đầy đủ tiêu đề và nội dung")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log("Article data:", {
        title,
        description,
        hashtags: selectedHashtags,
        files: uploadedFiles,
      })

      // Reset form
      setTitle("")
      setDescription("")
      setSelectedHashtags([])
      setUploadedFiles([])

      // Close modal
      onOpenChange(false)

      alert("Bài viết đã được đăng thành công!")
    } catch (error) {
      console.error("Error creating article:", error)
      alert("Có lỗi xảy ra khi đăng bài viết")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (isSubmitting) return

    // Reset form when closing
    setTitle("")
    setDescription("")
    setSelectedHashtags([])
    setUploadedFiles([])
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={cn("text-2xl font-bold text-center")}>
            Tạo bài viết
          </DialogTitle>
          <div className="my-1 w-full gap-2 flex items-center justify-center overflow-hidden">
            <Separator className="bg-gradient-to-r rotate-180 from-primary to-primary-dark" />
            <ChitIcon className="shrink-0 size-5" />
            <Separator className="bg-gradient-to-r rotate-180 from-primary-dark to-primary" />
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Title Input */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Tiêu đề bài viết *
            </Label>
            <Input
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Nhập tiêu đề bài viết..."
              className="text-base"
              disabled={isSubmitting}
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Nội dung bài viết *
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Viết nội dung bài viết của bạn..."
              className="min-h-[120px] resize-none text-base"
              disabled={isSubmitting}
            />
          </div>

          {/* Hashtags Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Hashtags</Label>
            <Popover open={hashtagOpen} onOpenChange={setHashtagOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={hashtagOpen}
                  className="w-full justify-between"
                  disabled={isSubmitting}
                >
                  <Hash className="size-4 mr-2" />
                  {selectedHashtags.length > 0
                    ? `${selectedHashtags.length} hashtag đã chọn`
                    : "Chọn hashtag..."}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Tìm hashtag..." />
                  <CommandList>
                    <CommandEmpty>Không tìm thấy hashtag.</CommandEmpty>
                    <CommandGroup>
                      {hashtags.map(hashtag => (
                        <CommandItem
                          key={hashtag.value}
                          onSelect={() => toggleHashtag(hashtag.value)}
                        >
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={selectedHashtags.includes(hashtag.value)}
                              onChange={() => {}}
                              className="rounded"
                            />
                            <span>{hashtag.label}</span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Selected Hashtags Display */}
            {selectedHashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedHashtags.map(hashtagValue => {
                  const hashtag = hashtags.find(h => h.value === hashtagValue)
                  return (
                    <Badge
                      key={hashtagValue}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive/50"
                      onClick={() => toggleHashtag(hashtagValue)}
                    >
                      {hashtag?.label}
                      <X className="size-3 ml-1" />
                    </Badge>
                  )
                })}
              </div>
            )}
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Tải lên ảnh/video</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={isSubmitting}
              />
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={isSubmitting}
                className="w-full"
              >
                <Upload className="size-4 mr-2" />
                Chọn file ảnh hoặc video
              </Button>
              <p className="text-xs text-gray-500 mt-2">
                Hỗ trợ: JPG, PNG, GIF, MP4, MOV (Tối đa 10MB/file)
              </p>
            </div>

            {/* Uploaded Files Preview */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Files đã chọn:</Label>
                <div className="grid grid-cols-2 gap-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="relative border rounded-lg p-2 bg-gray-50"
                    >
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="absolute top-1 right-1 size-6 p-0"
                        disabled={isSubmitting}
                      >
                        <X className="size-3" />
                      </Button>
                      <div className="flex items-center space-x-2">
                        {file.type.startsWith("image/") ? (
                          <Image className="size-4 text-blue-500" />
                        ) : (
                          <div className="size-4 bg-red-500 rounded" />
                        )}
                        <span className="text-xs truncate">{file.name}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="mt-6 gap-4">
          <Button
            size="lg"
            variant="secondary"
            onClick={handleClose}
            disabled={isSubmitting}
            className="flex-1 text-gray-900"
          >
            Hủy
          </Button>
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={isSubmitting || !title.trim() || !description.trim()}
            className="flex-1"
          >
            {isSubmitting ? (
              <>
                <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Đang đăng...
              </>
            ) : (
              "Chia sẻ bài viết"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateAticlesModal
