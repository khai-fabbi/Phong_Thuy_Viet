import Link from "next/link"
import { Phone, Mail, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { ChitIcon } from "../icons"

export default function Footer() {
  return (
    <footer className="bg-[url('/footer-bg.png')] bg-cover bg-center">
      <div className="text-white bg-primary-dark/95">
        <div className="container py-12 flex items-center justify-between gap-4">
          {/* Company Info */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/Logo.png"
                  alt="Phong Thủy Việt"
                  width={400}
                  height={400}
                  className="size-16.5 shrink-0"
                />
              </Link>
              <div className="flex flex-col font-bold uppercase text-sm">
                <span className="text-accent-orange">Phân hội</span>
                <span>KHoa học địa lý phong thủy việt nam</span>
              </div>
            </div>
            <p>
              Phân hội có tư cách pháp nhân, sử dụng chung con dấu, tài khoản
              của Hội địa lý môi trường; tổ chức, hoạt động theo quy định của
              pháp luật và Điều lệ Hội Địa lý Môi trường Việt Nam được Bộ Nội vụ
              phê duyệt.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <ChitIcon className="size-5 text-white" />
                  Nội quy diễn đàn
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <ChitIcon className="size-5 text-white" />
                  Thỏa thuận sử dụng dịch vụ
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <ChitIcon className="size-5 text-white" />
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <ChitIcon className="size-5 text-white" />
                  Hướng dẫn cộng đồng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-white">
            <Link
              href="tel:0366608838"
              className="flex items-center space-x-2 transition-colors hover:text-accent-orange"
            >
              <Phone className="size-5" />
              <span>03.666.08.838</span>
            </Link>
            <Link
              href="https://hoikhoahocdialyphongthuy.vn"
              className="flex items-center space-x-2 transition-colors hover:text-accent-orange"
              target="_blank"
            >
              <Globe className="size-5" />
              <span>hoikhoahocdialyphongthuy.vn</span>
            </Link>
            <Link
              className="flex items-center space-x-2 transition-colors hover:text-accent-orange"
              href="mailto:contact@hoikhohocdialyphongthuy.vn"
            >
              <Mail className="size-5" />
              <span>contact@hoikhohocdialyphongthuy.vn</span>
            </Link>
            <Link
              href="https://www.google.com/maps/place/28+Th%C3%A0nh+Th%C3%A1i,+D%E1%BB%8Bch+V%E1%BB%8Dng,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%80+N%E1%BB%99i/@21.0341219,105.8510556,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab8c1de2fed3:0x73880b3f5476e80!8m2!3d21.0341219!4d105.8532443!16s%2Fg%2F11c40zqkgc?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D"
              className="flex items-center space-x-2 transition-colors hover:text-accent-orange"
              target="_blank"
            >
              <MapPin className="size-5" />
              <span>28 Thành Thái, Dịch vọng, Cầu Giấy, HN</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-12 bg-primary text-gray-50 text-sm flex items-center justify-center">
        <p>
          © 2025 Công ty Cổ phần ...... - Giấy phép thiết lập MXH số
          1000/GP-BTANC, Ký ngày: 00/00/2000.
        </p>
      </div>
    </footer>
  )
}
