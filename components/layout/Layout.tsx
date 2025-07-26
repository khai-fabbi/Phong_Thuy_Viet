import Header from "./Header"
import Footer from "./Footer"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className={cn(
          "before:content-[''] before:block before:h-1.5 before:bg-gradient-to-r before:from-primary before:to-primary-dark",
          "flex-1"
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
