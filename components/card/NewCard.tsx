"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import dayjs from "dayjs"
import "dayjs/locale/vi"
import relativeTime from "dayjs/plugin/relativeTime"
import { Heart, MessageCircle, Send, Share2, ThumbsDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Separator } from "../ui/separator"
import { Textarea } from "../ui/textarea"

// Cấu hình dayjs
dayjs.extend(relativeTime)
dayjs.locale("vi")

// Helper function để format thời gian
const formatTimeAgo = (dateString: string) => {
  const now = dayjs()
  const articleDate = dayjs(dateString)
  const diffInHours = now.diff(articleDate, "hour")

  if (diffInHours < 24) {
    return articleDate.fromNow() // "2 giờ trước", "30 phút trước", etc.
  } else {
    return articleDate.format("DD/MM/YYYY") // "15/01/2024"
  }
}

// Interface cho comment
export interface Comment {
  id: string
  content: string
  author: {
    name: string
    avatar: string
  }
  createdAt: string
  likes: number
  isLiked: boolean
}

// Interface cho bài viết
export interface NewsArticle {
  id: string
  title: string
  description: string
  image: string
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  likes: number
  dislikes: number
  shares: number
  comments: number
  isLiked: boolean
  isDisliked: boolean
  commentList?: Comment[]
}

// Component cho thống kê tương tác
interface ArticleStatsProps {
  likes: number
  dislikes: number
  shares: number
  comments: number
}

const ArticleStats = ({
  likes,
  dislikes,
  shares,
  comments,
}: ArticleStatsProps) => {
  return (
    <div className="flex items-center gap-x-4 text-gray-500 justify-between">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <Heart className="size-5 text-red-500" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <ThumbsDown className="size-5 text-gray-400" />
          <span>{dislikes}</span>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <Share2 className="size-5 text-blue-500" />
          <span>{shares}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <MessageCircle className="size-5 text-green-500" />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  )
}

// Component cho action buttons
interface ArticleActionsProps {
  isLiked: boolean
  isDisliked: boolean
  onLike: () => void
  onDislike: () => void
  onComment: () => void
  onShare: () => void
}

const ArticleActions = ({
  isLiked,
  isDisliked,
  onLike,
  onDislike,
  onComment,
  onShare,
}: ArticleActionsProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={onLike}
        className={cn(
          "flex items-center gap-x-2 text-sm",
          isLiked && "text-red-500 bg-red-50"
        )}
      >
        <Heart className={cn("size-4", isLiked && "fill-current")} />
        Thích
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onDislike}
        className={cn(
          "flex items-center gap-x-2 text-sm",
          isDisliked && "text-gray-500 bg-gray-50"
        )}
      >
        <ThumbsDown className={cn("size-4", isDisliked && "fill-current")} />
        Không thích
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onComment}
        className="flex items-center gap-x-2 text-sm"
      >
        <MessageCircle className="size-4" />
        Bình luận
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onShare}
        className="flex items-center gap-x-2 text-sm"
      >
        <Share2 className="size-4" />
        Chia sẻ
      </Button>
    </div>
  )
}

// Component cho một comment
interface CommentItemProps {
  comment: Comment
  onLikeComment?: (commentId: string) => void
}

const CommentItem = ({ comment, onLikeComment }: CommentItemProps) => {
  return (
    <div className="flex gap-x-3 py-3">
      <Avatar className="size-8">
        <AvatarImage src={comment.author.avatar} />
        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-x-2 mb-1">
          <h5 className="font-medium text-sm">{comment.author.name}</h5>
          <span className="text-xs text-gray-400">
            {formatTimeAgo(comment.createdAt)}
          </span>
        </div>
        <p className="text-sm text-gray-700 mb-2">{comment.content}</p>
        <div className="flex items-center gap-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLikeComment?.(comment.id)}
            className={cn(
              "flex items-center gap-x-1 text-xs h-auto p-0",
              comment.isLiked && "text-red-500"
            )}
          >
            <Heart
              className={cn("size-3", comment.isLiked && "fill-current")}
            />
            <span>{comment.likes}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Component cho form comment
interface CommentFormProps {
  onSubmit: (content: string) => void
  placeholder?: string
}

const CommentForm = ({
  onSubmit,
  placeholder = "Viết bình luận...",
}: CommentFormProps) => {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!content.trim()) return

    setIsSubmitting(true)
    try {
      await onSubmit(content.trim())
      setContent("")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="flex gap-x-3 py-3">
      <Avatar className="size-8">
        <AvatarImage src="/default-avatar.png" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <Textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="min-h-20 resize-none focus-visible:ring-primary font-medium"
          disabled={isSubmitting}
        />
        <div className="flex justify-end mt-2">
          <Button
            onClick={handleSubmit}
            disabled={!content.trim() || isSubmitting}
            className="min-w-25"
          >
            {isSubmitting ? "Đang gửi..." : "Gửi"}
            <Send className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Props cho NewCard
interface NewCardProps {
  article: NewsArticle
  onLike?: (articleId: string) => void
  onDislike?: (articleId: string) => void
  onComment?: (articleId: string) => void
  onShare?: (articleId: string) => void
  onAddComment?: (articleId: string, content: string) => void
  onLikeComment?: (articleId: string, commentId: string) => void
}

const NewCard = ({
  article,
  onLike,
  onDislike,
  onComment,
  onShare,
  onAddComment,
  onLikeComment,
}: NewCardProps) => {
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    onLike?.(article.id)
  }

  const handleDislike = () => {
    onDislike?.(article.id)
  }

  const handleComment = () => {
    setShowComments(!showComments)
    onComment?.(article.id)
  }

  const handleShare = () => {
    onShare?.(article.id)
  }

  const handleAddComment = (content: string) => {
    onAddComment?.(article.id, content)
  }

  const handleLikeComment = (commentId: string) => {
    onLikeComment?.(article.id, commentId)
  }

  return (
    <article className="bg-gray-50 rounded-lg p-4 hover:shadow transition-shadow group">
      <div className="flex gap-x-4">
        {/* Ảnh bài viết */}
        <Link
          href={`/news/${article.id}`}
          className="shrink-0 overflow-hidden rounded-lg h-fit"
        >
          <Image
            src={article.image}
            alt={article.title}
            width={185}
            height={125}
            className="rounded-lg object-cover w-full max-w-[185px] aspect-[1.48] group-hover:scale-110 transition-transform duration-200"
          />
        </Link>

        {/* Nội dung bài viết */}
        <div className="flex-1 min-w-0">
          {/* Header với avatar và thông tin tác giả */}
          <div className="flex items-start gap-x-3 mb-2">
            <Avatar className="size-10">
              <AvatarImage src={article.author.avatar} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-x-2 mb-1">
                <h3 className="font-semibold truncate transition-colors">
                  {article.author.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {article.author.role}
                </Badge>
              </div>
              <p className="text-xs text-gray-400 italic">
                {formatTimeAgo(article.publishedAt)}
              </p>
            </div>
          </div>

          {/* Tiêu đề và mô tả */}
          <div className="mb-3">
            <Link href={`/news/${article.id}`}>
              <h4 className="font-semibold text-base mb-1 line-clamp-1 group-hover:text-primary-dark transition-colors">
                {article.title}
              </h4>
            </Link>
            <p className="text-gray-600 line-clamp-2">{article.description}</p>
          </div>

          {/* Thống kê tương tác */}
        </div>
      </div>
      <ArticleStats
        likes={article.likes}
        dislikes={article.dislikes}
        shares={article.shares}
        comments={article.comments}
      />
      <Separator className="my-3" />

      {/* Action buttons */}
      <ArticleActions
        isLiked={article.isLiked}
        isDisliked={article.isDisliked}
        onLike={handleLike}
        onDislike={handleDislike}
        onComment={handleComment}
        onShare={handleShare}
      />

      {/* Comment section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-100 animate-in">
          {/* Comment form */}
          <CommentForm onSubmit={handleAddComment} />

          {/* Comment list */}
          {article.commentList && article.commentList.length > 0 ? (
            <div className="space-y-2">
              {article.commentList.map(comment => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  onLikeComment={handleLikeComment}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500">
              Chưa có bình luận nào. Hãy là người đầu tiên bình luận!
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export default NewCard
