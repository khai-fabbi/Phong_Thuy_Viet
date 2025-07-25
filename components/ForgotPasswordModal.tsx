"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { MailIcon } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const forgotPasswordSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>

interface ForgotPasswordModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ForgotPasswordModal = ({
  open,
  onOpenChange,
}: ForgotPasswordModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Implement forgot password API call here
      console.log("Forgot password request for:", data.email)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error sending forgot password request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    if (isSubmitted) {
      setIsSubmitted(false)
      form.reset()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Quên mật khẩu
          </DialogTitle>
          <DialogDescription className="mt-6 text-center">
            {isSubmitted
              ? "Chúng tôi đã gửi email hướng dẫn đặt lại mật khẩu đến địa chỉ email của bạn."
              : "Nếu bạn quên mật khẩu, bạn có thể dùng mẫu sau để thiết lập lại mật khẩu. Bạn sẽ nhận được một email với nội dung hướng dẫn đặt lại mật khẩu."}
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="bg-white relative flex items-center rounded-md border focus-within:ring-2 focus-within:ring-primary pl-3">
                        <MailIcon className="h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Nhập email của bạn"
                          className="w-full !text-base border-0 focus-visible:ring-0 shadow-none"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? "Đang gửi..." : "Đặt lại mật khẩu"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        ) : (
          <DialogFooter className="mt-6">
            <Button onClick={handleClose} className="w-full">
              Đóng
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
