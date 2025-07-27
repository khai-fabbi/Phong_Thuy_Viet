import React from "react"
import CategoryTitle from "./CategoryTitle"
import Image from "next/image"
import { Card } from "@/components/ui/card"

type Props = {}

const AffiliateOrganization = (props: Props) => {
  const affiliateOrganizations = [
    {
      src: "/VP-bank.png",
      alt: "VP Bank",
    },
    {
      src: "/vien-nghien-cuu-kien-truc-phuong-dong.png",
      alt: "Viện nghiên cứu khoa học phương đông",
    },
    {
      src: "/bat-dong-san-hanoi-fc.png",
      alt: "Bất động sản Hà Nội FC",
    },

    {
      src: "/tam-dien.png",
      alt: "Tâm Điền - Tây Yên Tử",
    },
    {
      src: "/kcf.png",
      alt: "KCF",
    },
    {
      src: "/sapio-capital.png",
      alt: "SAPIO CAPITAL",
    },
    {
      src: "/vinh-bao-phuc.png",
      alt: "Vĩnh Bảo Phúc",
    },
  ]
  return (
    <section className="border border-gray-100 rounded-lg p-4 space-y-4 h-fit">
      <CategoryTitle title="Tổ chức liên kết" />
      <ul className="grid grid-cols-2 gap-2">
        {affiliateOrganizations.map(item => (
          <li key={item.alt}>
            <Card className="p-2.5 bg-gray-50 rounded-lg w-full aspect-[1.6] flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:border-primary transition-all">
              <Image
                src={item.src}
                alt={item.alt}
                width={1000}
                height={1000}
                className="size-full object-contain"
              />
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AffiliateOrganization
