import { Banner } from "@/components/common"
import React from "react"
import { ListExpert } from "./_components"

type Props = {}

const page = (props: Props) => {
  const breadcrumbItems = [
    {
      label: "Trang chủ",
      href: "/",
    },
    {
      label: "Danh sách chuyên gia",
      href: "/danh-sach-chuyen-gia",
    },
  ]
  return (
    <div className="mt-2 mb-20">
      <Banner title="Danh sách chuyên gia" breadcrumb={breadcrumbItems} />
      <div className="container mt-6 space-y-6">
        <ListExpert
          title="Chuyên gia cấp 1"
          subTitle="Các chuyên gia đầu ngành với hơn 20 năm kinh nghiệm"
          containerClassName="bg-[url('/expert-level-1.png')] bg-cover bg-center"
        />
        <ListExpert
          title="Chuyên gia cấp 2"
          subTitle="Các chuyên gia đầu ngành với hơn 10 năm kinh nghiệm"
          containerClassName="bg-accent-orange"
        />
        <ListExpert
          title="Chuyên gia cấp 3"
          subTitle="Các chuyên gia đầu ngành với hơn 5 năm kinh nghiệm"
          containerClassName="bg-primary"
        />
        <ListExpert
          title="Chuyên gia cấp 4"
          subTitle="Các chuyên gia ưu tú đang lên"
          containerClassName="bg-[#F6F6F6] text-gray-900"
        />
      </div>
    </div>
  )
}

export default page
