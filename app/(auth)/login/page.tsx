"use client"

import { AuthRightCard, ForgotPasswordModal } from "@/components/auth"
import {
  ChitIcon,
  FacebookIcon,
  GoogleLogo,
  MetaIcon,
} from "@/components/icons"
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
import { useRouter } from "next/navigation"
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
  const router = useRouter()
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
    router.push("/")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#f3f3f3]">
      <div className="size-full grid lg:grid-cols-2 p-4">
        <div className="max-w-sm m-auto w-full space-y-4">
          <MetaIcon className="block mx-auto" />
          <div className="w-full flex flex-col items-center">
            {/* <Logo className="h-9 w-9" /> */}
            <p className="mt-4 text-[30px] font-semibold text-primary-dark">
              Đăng nhập tài khoản
            </p>
            <div className="flex items-center gap-4 mt-6 w-full">
              <Button
                variant="outline"
                className="flex-1 border-transparent hover:border-primary"
                size="lg"
              >
                <GoogleLogo />
                Google
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-transparent hover:border-primary"
                size="lg"
              >
                <FacebookIcon className="size-7" />
                Facebook
              </Button>
            </div>

            <div className="my-7 w-full gap-2 flex items-center justify-center overflow-hidden">
              <Separator className="bg-gradient-to-r rotate-180 from-primary to-primary-dark" />
              <ChitIcon className="shrink-0 size-5" />
              <Separator className="bg-gradient-to-r rotate-180 from-primary-dark to-primary" />
            </div>

            <Form {...form}>
              <form
                className="w-full space-y-5"
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Đăng nhập</FormLabel>
                      <FormControl>
                        <div className="bg-white relative flex items-center rounded-md border focus-within:ring-2 focus-within:ring-primary pl-3">
                          <MailIcon className="h-5 w-5 text-muted-foreground svg-animation" />
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
                          <LockIcon className="h-5 w-5 text-muted-foreground svg-animation" />
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
                              <EyeOffIcon className="h-5 w-5 text-muted-foreground svg-animation" />
                            ) : (
                              <EyeIcon className="h-5 w-5 text-muted-foreground svg-animation" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p
                  className="text-sm w-fit cursor-pointer text-muted-foreground text-link ml-auto block"
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
        </div>
        <AuthRightCard />
      </div>

      <ForgotPasswordModal
        open={showForgotPasswordModal}
        onOpenChange={setShowForgotPasswordModal}
      />
    </div>
  )
}

export default LoginPage
