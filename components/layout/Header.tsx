"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/useToast"
import Link from "next/link"
import { Menu, User, LogOut, Settings } from "lucide-react"
import { useUserStore } from "@/stores/userStore"
import { HeaderSearch } from "../common"
import Image from "next/image"

export default function Header() {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { logout } = useUserStore()
  const toast = useToast()

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLogout = () => {
    setShowLogoutDialog(false)
    logout()
    toast.success("Đã đăng xuất thành công!")
  }

  return (
    <header
      className={`sticky top-0 transition-all z-50 bg-white/70 backdrop-blur h-16 md:h-[var(--header-height)] ${hasScrolled ? "shadow-md" : ""}`}
    >
      <div className="container flex h-full items-center">
        {/* Logo */}
        <div className="mr-8 flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Phong Thủy Việt"
              width={400}
              height={400}
              className="size-16.5"
            />
          </Link>
          <div className="flex flex-col font-bold uppercase">
            <span className="text-accent-orange">Phân hội</span>
            <span className="text-primary-dark">
              KHoa học địa lý phong thủy việt nam
            </span>
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-2 md:space-x-4">
          <HeaderSearch className="hidden md:block" />
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <Avatar className="transition-all cursor-pointer size-8 md:size-11 rounded-2xl">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>

                <div className="h-3 w-3 ring-[2px] ring-background rounded-full bg-green-500 absolute -top-0.5 -right-0.5"></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Nguyễn Văn A
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Hồ sơ</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Cài đặt</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => setShowLogoutDialog(true)}
              >
                <LogOut className="mr-2 h-4 w-4 text-destructive" />
                <span>Đăng xuất</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận đăng xuất</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn đăng xuất khỏi tài khoản? Bạn sẽ cần đăng
              nhập lại để tiếp tục sử dụng.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowLogoutDialog(false)}
            >
              Hủy
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Đăng xuất
              <LogOut className="ml-1.5 h-4 w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}
