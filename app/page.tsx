"use client"

import Layout from "@/components/layout/Layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/useToast"
import {
  ArrowRight,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const toast = useToast()
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Chuyên nghiệp - Uy tín - Tận tâm
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Khám phá{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Phong Thủy
              </span>
              <br />
              <span className="text-3xl md:text-5xl">
                Truyền thống Việt Nam
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Tư vấn phong thủy chuyên nghiệp, giúp bạn tạo không gian sống hài
              hòa, thịnh vượng và bình an theo văn hóa truyền thống Việt Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg px-8 py-4">
                    Tư vấn miễn phí
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Tư vấn miễn phí</DialogTitle>
                    <DialogDescription>
                      Điền thông tin để nhận tư vấn miễn phí từ chuyên gia phong
                      thủy.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Input placeholder="Họ và tên" />
                    </div>
                    <div className="grid gap-2">
                      <Input placeholder="Số điện thoại" />
                    </div>
                    <div className="grid gap-2">
                      <Textarea placeholder="Mô tả nhu cầu tư vấn" />
                    </div>
                    <Button
                      onClick={() =>
                        toast.success("Yêu cầu tư vấn đã được gửi thành công!")
                      }
                    >
                      Gửi yêu cầu
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                asChild
              >
                <Link href="#services">Khám phá dịch vụ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Dịch vụ của chúng tôi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Giải pháp phong thủy toàn diện
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chuyên nghiệp, uy tín và tận tâm với từng khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tư vấn nhà ở</CardTitle>
                <CardDescription>
                  Phân tích phong thủy cho nhà ở, căn hộ, biệt thự để tạo không
                  gian sống tối ưu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Phân tích hướng nhà
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Bố trí nội thất
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Chọn màu sắc phù hợp
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Văn phòng công ty</CardTitle>
                <CardDescription>
                  Thiết kế phong thủy cho văn phòng, cửa hàng, công ty để thúc
                  đẩy tài lộc.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Bố trí bàn làm việc
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Chọn vị trí đặt cây
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    Tăng cường năng lượng
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Xem ngày giờ</CardTitle>
                <CardDescription>
                  Chọn ngày giờ tốt cho các sự kiện quan trọng như cưới hỏi,
                  khai trương, động thổ.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Ngày cưới hỏi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Khai trương
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    Động thổ xây dựng
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Về chúng tôi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Đội ngũ chuyên gia hàng đầu
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Phong Thủy Việt là đơn vị tư vấn phong thủy hàng đầu tại Việt
                Nam, với đội ngũ chuyên gia giàu kinh nghiệm và am hiểu sâu sắc
                về văn hóa truyền thống.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Chúng tôi cam kết mang đến những giải pháp phong thủy khoa học,
                phù hợp với văn hóa Việt Nam và điều kiện thực tế của từng khách
                hàng.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-muted-foreground">
                    Khách hàng hài lòng
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-muted-foreground">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-primary to-blue-600 text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Tại sao chọn chúng tôi?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="mr-3 h-5 w-5" />
                    Đội ngũ chuyên gia có chứng chỉ
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-3 h-5 w-5" />
                    Tư vấn tận tâm, chi tiết
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-3 h-5 w-5" />
                    Giá cả hợp lý, minh bạch
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-3 h-5 w-5" />
                    Hỗ trợ sau tư vấn
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Liên hệ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tư vấn miễn phí
            </h2>
            <p className="text-xl text-muted-foreground">
              Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Gửi yêu cầu tư vấn</CardTitle>
                <CardDescription>
                  Điền thông tin để nhận tư vấn từ chuyên gia phong thủy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Họ và tên" />
                <Input placeholder="Số điện thoại" />
                <Input placeholder="Email" />
                <Textarea placeholder="Mô tả nhu cầu tư vấn" rows={4} />
                <Button
                  className="w-full"
                  onClick={() =>
                    toast.success("Yêu cầu tư vấn đã được gửi thành công!")
                  }
                >
                  Gửi yêu cầu
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin liên hệ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Hotline: 0909 123 456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@phongthuyviet.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Đường ABC, Quận 1, TP.HCM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>8:00 - 18:00 (Thứ 2 - Thứ 7)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Ưu đãi đặc biệt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Tư vấn phong thủy miễn phí cho 50 khách hàng đầu tiên trong
                    tháng này!
                  </p>
                  <Badge variant="secondary" className="text-primary">
                    Giảm 20% cho khách hàng mới
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
