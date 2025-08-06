import dayjs from "dayjs"
import React, { useState } from "react"
import { NewCard, NewsArticle, Comment } from "@/components/card"

type Props = {}

// Mock data cho comment
const mockComments: Comment[] = [
  {
    id: "1",
    content:
      "Bài viết rất hay và hữu ích! Tôi đã áp dụng và thấy hiệu quả rõ rệt.",
    author: {
      name: "Nguyễn Văn D",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    },
    createdAt: dayjs().subtract(1, "hour").toISOString(),
    likes: 5,
    isLiked: false,
  },
  {
    id: "2",
    content:
      "Cảm ơn tác giả đã chia sẻ kiến thức quý báu này. Tôi sẽ thử áp dụng vào nhà mình.",
    author: {
      name: "Trần Thị E",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    },
    createdAt: dayjs().subtract(30, "minute").toISOString(),
    likes: 3,
    isLiked: true,
  },
  {
    id: "3",
    content:
      "Tôi có thắc mắc về hướng nhà, có thể tác giả giải thích thêm không?",
    author: {
      name: "Lê Văn F",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
    createdAt: dayjs().subtract(15, "minute").toISOString(),
    likes: 1,
    isLiked: false,
  },
]

// Mock data cho bài viết
const mockArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Phong thủy trong thiết kế nhà ở hiện đại",
    description:
      "Bài viết phân tích cách áp dụng các nguyên tắc phong thủy vào thiết kế nhà ở hiện đại, giúp tạo không gian sống hài hòa và thịnh vượng...",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Nguyễn Văn A",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop",
      role: "Chuyên gia",
    },
    publishedAt: dayjs().subtract(2, "hour").toISOString(),
    likes: 245,
    dislikes: 12,
    shares: 89,
    comments: 34,
    isLiked: false,
    isDisliked: false,
    commentList: mockComments,
  },
  {
    id: "2",
    title: "Hướng dẫn chọn hướng nhà theo tuổi gia chủ",
    description:
      "Cách xác định hướng nhà phù hợp dựa trên tuổi và mệnh của gia chủ, kết hợp với các yếu tố địa lý và khí hậu...",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Trần Thị B",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1000&auto=format&fit=crop",
      role: "Chuyên gia",
    },
    publishedAt: dayjs().subtract(30, "minute").toISOString(),
    likes: 189,
    dislikes: 8,
    shares: 67,
    comments: 28,
    isLiked: true,
    isDisliked: false,
    commentList: mockComments.slice(0, 2),
  },
  {
    id: "3",
    title: "Vai trò của cây xanh trong phong thủy",
    description:
      "Tìm hiểu về ý nghĩa và cách sử dụng cây xanh trong phong thủy để tăng cường năng lượng tích cực cho không gian sống...",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop",
    author: {
      name: "Lê Văn C",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      role: "Chuyên gia",
    },
    publishedAt: dayjs().subtract(2, "day").toISOString(),
    likes: 312,
    dislikes: 15,
    shares: 123,
    comments: 45,
    isLiked: false,
    isDisliked: true,
    commentList: [],
  },
]
const ArticleList = (props: Props) => {
  const [articles, setArticles] = useState<NewsArticle[]>(mockArticles)

  const handleLike = (articleId: string) => {
    console.log("Like article:", articleId)
    setArticles(prev =>
      prev.map(article =>
        article.id === articleId
          ? {
              ...article,
              isLiked: !article.isLiked,
              likes: article.isLiked ? article.likes - 1 : article.likes + 1,
            }
          : article
      )
    )
  }

  const handleDislike = (articleId: string) => {
    console.log("Dislike article:", articleId)
    setArticles(prev =>
      prev.map(article =>
        article.id === articleId
          ? {
              ...article,
              isDisliked: !article.isDisliked,
              dislikes: article.isDisliked
                ? article.dislikes - 1
                : article.dislikes + 1,
            }
          : article
      )
    )
  }

  const handleComment = (articleId: string) => {
    console.log("Comment on article:", articleId)
  }

  const handleShare = (articleId: string) => {
    console.log("Share article:", articleId)
  }

  const handleAddComment = (articleId: string, content: string) => {
    console.log("Add comment to article:", articleId, content)

    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      author: {
        name: "Người dùng hiện tại",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
    }

    setArticles(prev =>
      prev.map(article =>
        article.id === articleId
          ? {
              ...article,
              commentList: [...(article.commentList || []), newComment],
              comments: (article.commentList?.length || 0) + 1,
            }
          : article
      )
    )
  }

  const handleLikeComment = (articleId: string, commentId: string) => {
    console.log("Like comment:", commentId, "in article:", articleId)

    setArticles(prev =>
      prev.map(article =>
        article.id === articleId
          ? {
              ...article,
              commentList: article.commentList?.map(comment =>
                comment.id === commentId
                  ? {
                      ...comment,
                      isLiked: !comment.isLiked,
                      likes: comment.isLiked
                        ? comment.likes - 1
                        : comment.likes + 1,
                    }
                  : comment
              ),
            }
          : article
      )
    )
  }
  return (
    <ul className="flex flex-col gap-y-4">
      {articles.map((article, idx) => (
        <li
          key={article.id}
          className="animate-fade-in-up"
          style={{
            animationDelay: `${idx * 0.25}s`,
            animationFillMode: "both",
          }}
        >
          <NewCard
            article={article}
            onLike={handleLike}
            onDislike={handleDislike}
            onComment={handleComment}
            onShare={handleShare}
            onAddComment={handleAddComment}
            onLikeComment={handleLikeComment}
          />
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
