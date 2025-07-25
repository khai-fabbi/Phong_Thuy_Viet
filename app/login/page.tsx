"use client"

import { ForgotPasswordModal } from "@/components/ForgotPasswordModal"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
})

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#f3f3f3]">
      <div className="w-full h-full grid lg:grid-cols-2 p-4">
        <div className="max-w-sm m-auto w-full flex flex-col items-center">
          {/* <Logo className="h-9 w-9" /> */}
          <p className="mt-4 text-[30px] font-bold text-primary-dark">
            Đăng nhập tài khoản
          </p>

          <Button className="mt-8 w-full gap-3">
            <GoogleLogo />
            Continue with Google
          </Button>

          <div className="my-7 w-full flex items-center justify-center overflow-hidden">
            <Separator />
            <span className="text-sm px-2">OR</span>
            <Separator />
          </div>

          <Form {...form}>
            <form
              className="w-full space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Đăng nhập</FormLabel>
                    <FormControl>
                      <div className="bg-white relative flex items-center rounded-md border focus-within:ring-2 focus-within:ring-primary pl-3">
                        <MailIcon className="h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Email"
                          className="w-full !text-base border-0 focus-visible:ring-0 shadow-none"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <div className="relative bg-white flex items-center rounded-md border focus-within:ring-2 focus-within:ring-primary pl-3 pr-1">
                        <LockIcon className="h-5 w-5 text-muted-foreground" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Mật khẩu"
                          className="border-0 !text-base w-full focus-visible:ring-0 shadow-none"
                          {...field}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <EyeIcon className="h-5 w-5 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p
                className="text-sm cursor-pointer text-muted-foreground hover:underline text-right block"
                onClick={() => setShowForgotPasswordModal(true)}
              >
                Quên mật khẩu?
              </p>
              <Button type="submit" size="lg" className="mt-4 w-full">
                Đăng nhập
              </Button>
            </form>
          </Form>

          <div className="mt-5 space-y-5">
            <p className="text-sm text-center">
              Chưa có tài khoản?
              <Link
                href="/signup"
                className="ml-1 font-semibold underline text-primary"
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-muted hidden lg:flex rounded-lg flex-col items-center justify-center">
          <h1 className="text-[30px] font-semibold">
            Welcome to Phong Thuy Viet
          </h1>
          <p>
            Phong Thuy Viet là một trang web giúp bạn tìm hiểu và tính toán số
            phong thủy của bạn.
          </p>
          <p>
            Phong Thuy Viet là một trang web giúp bạn tìm hiểu và tính toán số
            phong thủy của bạn.
          </p>
          <p>
            Phong Thuy Viet là một trang web giúp bạn tìm hiểu và tính toán số
            phong thủy của bạn.
          </p>
        </div>
      </div>

      <ForgotPasswordModal
        open={showForgotPasswordModal}
        onOpenChange={setShowForgotPasswordModal}
      />
    </div>
  )
}

const GoogleLogo = () => (
  <svg
    width="1.2em"
    height="1.2em"
    id="icon-google"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block shrink-0 align-sub text-[inherit] size-lg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M15.6823 8.18368C15.6823 7.63986 15.6382 7.0931 15.5442 6.55811H7.99829V9.63876H12.3194C12.1401 10.6323 11.564 11.5113 10.7203 12.0698V14.0687H13.2983C14.8122 12.6753 15.6823 10.6176 15.6823 8.18368Z"
        fill="#4285F4"
      ></path>
      <path
        d="M7.99812 16C10.1558 16 11.9753 15.2915 13.3011 14.0687L10.7231 12.0698C10.0058 12.5578 9.07988 12.8341 8.00106 12.8341C5.91398 12.8341 4.14436 11.426 3.50942 9.53296H0.849121V11.5936C2.2072 14.295 4.97332 16 7.99812 16Z"
        fill="#34A853"
      ></path>
      <path
        d="M3.50665 9.53295C3.17154 8.53938 3.17154 7.4635 3.50665 6.46993V4.4093H0.849292C-0.285376 6.66982 -0.285376 9.33306 0.849292 11.5936L3.50665 9.53295Z"
        fill="#FBBC04"
      ></path>
      <path
        d="M7.99812 3.16589C9.13867 3.14825 10.241 3.57743 11.067 4.36523L13.3511 2.0812C11.9048 0.723121 9.98526 -0.0235266 7.99812 -1.02057e-05C4.97332 -1.02057e-05 2.2072 1.70493 0.849121 4.40932L3.50648 6.46995C4.13848 4.57394 5.91104 3.16589 7.99812 3.16589Z"
        fill="#EA4335"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="15.6825" height="16" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
)

export default LoginPage
