import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/useToast"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from "react"

const ContactSection = () => {
  const toast = useToast()
  return (
    <section id="contact">
      <div className="h-[114px] bg-[url('/contact-bg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="bg-[#F1F0ED]">
        <div className="container flex items-center justify-center pt-10 gap-x-5">
          <div>
            <Image
              src="/contact-person.png"
              alt="contact"
              width={300}
              height={300}
              className="max-w-[180px] w-full object-contain"
            />
          </div>
          <div className="flex gap-x-16">
            <div className="space-y-2">
              <div className="text-primary-dark text-3xl font-bold">
                Get interesting <br /> news{" "}
                <ArrowRight className="ml-2 size-6 inline-flex animate-arrow" />
              </div>

              <span className="text-gray-500">
                Sign up to get the latest updates
              </span>
            </div>

            <div className="flex flex-col gap-y-4">
              <Input
                placeholder="example@gmail.com"
                className="min-w-sm bg-primary-dark text-white focus-visible:ring-primary"
              />
              <Button
                className="w-fit"
                size="lg"
                onClick={() => toast.success("Send success")}
              >
                Send now <ArrowRight className="ml-1 size-4.5 inline-flex" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
