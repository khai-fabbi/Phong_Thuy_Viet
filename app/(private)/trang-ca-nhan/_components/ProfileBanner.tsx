"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Camera, PencilLine, X } from "lucide-react"
import Image from "next/image"
import React, { useRef, useState } from "react"

interface ProfileBannerProps {
  coverImage?: string
  onCoverImageChange?: (imageUrl: string) => void
  className?: string
}

const ProfileBanner = ({
  coverImage,
  onCoverImageChange,
  className,
}: ProfileBannerProps) => {
  const [isUploading, setIsUploading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chọn file ảnh hợp lệ")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Kích thước file không được vượt quá 5MB")
      return
    }

    setIsUploading(true)

    try {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file)
      setPreviewImage(previewUrl)

      // Simulate upload process (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Here you would typically upload to your server/cloud storage
      // For now, we'll use the preview URL as the final URL
      const uploadedUrl = previewUrl

      // Call the callback with the new image URL
      onCoverImageChange?.(uploadedUrl)
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Có lỗi xảy ra khi upload ảnh. Vui lòng thử lại.")
      setPreviewImage(null)
    } finally {
      setIsUploading(false)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const handleRemoveImage = () => {
    setPreviewImage(null)
    onCoverImageChange?.("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleEditClick = () => {
    fileInputRef.current?.click()
  }

  const currentImage = previewImage || coverImage

  return (
    <div
      className={cn(
        "relative h-[300px] w-full rounded-lg overflow-hidden bg-gray-100",
        className
      )}
    >
      {/* Cover Image */}
      {currentImage ? (
        <Image
          src={currentImage}
          alt="Cover image"
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
          <div className="text-center text-gray-500">
            <Camera className="mx-auto size-12 mb-2 opacity-50" />
            <p className="text-sm">Chưa có ảnh bìa</p>
          </div>
        </div>
      )}

      {/* Edit Button */}
      <div className="absolute top-4 right-4 flex gap-2">
        {currentImage && (
          <Button
            variant="destructive"
            size="icon"
            onClick={handleRemoveImage}
            disabled={isUploading}
            className="bg-destructive/60 hover:scale-105 transition-all group"
          >
            <X className="size-5 group-hover:rotate-180 transition-transform" />
          </Button>
        )}
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleEditClick}
          disabled={isUploading}
          className="p-0 bg-white/70 hover:bg-white shadow-md"
        >
          {isUploading ? (
            <div className="size-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <PencilLine className="size-4" />
          )}
          Chỉnh sửa ảnh bìa
        </Button>
      </div>

      {/* Upload Progress Overlay */}
      {isUploading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="size-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm text-gray-600">Đang upload ảnh...</p>
          </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  )
}

export default ProfileBanner
