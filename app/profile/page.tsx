'use client'

import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/useToast"
import { Phone, MapPin, Calendar, Shield, Bell, CreditCard, FileText, LogOut, Camera } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const toast = useToast()
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    id: '1',
    name: 'Nguyễn Văn A',
    email: 'user@example.com',
    phone: '0909 123 456',
    avatar: '/avatars/01.png',
    role: 'user',
    joinDate: '2024-01-15',
    address: 'TP.HCM, Việt Nam',
    bio: 'Tôi là khách hàng của Phong Thủy Việt, rất hài lòng với dịch vụ tư vấn phong thủy chuyên nghiệp.'
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    toast.success('Cập nhật thông tin thành công!')
  }

  const handleLogout = () => {
    toast.info('Đã đăng xuất')
    // Add logout logic here
  }

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Hồ sơ cá nhân</h1>
          <p className="text-muted-foreground">Quản lý thông tin cá nhân và cài đặt tài khoản</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-2xl">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {user.role === 'admin' ? 'Quản trị viên' : 'Khách hàng'}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{user.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Tham gia: {new Date(user.joinDate).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
                <TabsTrigger value="security">Bảo mật</TabsTrigger>
                <TabsTrigger value="notifications">Thông báo</TabsTrigger>
                <TabsTrigger value="billing">Thanh toán</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin cá nhân</CardTitle>
                    <CardDescription>
                      Cập nhật thông tin cá nhân của bạn
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Họ và tên</label>
                        <Input 
                          defaultValue={user.name} 
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <Input 
                          defaultValue={user.email} 
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Số điện thoại</label>
                        <Input 
                          defaultValue={user.phone} 
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Địa chỉ</label>
                        <Input 
                          defaultValue={user.address} 
                          disabled={!isEditing}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Giới thiệu</label>
                      <Textarea 
                        defaultValue={user.bio} 
                        disabled={!isEditing}
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      {isEditing ? (
                        <>
                          <Button variant="outline" onClick={() => setIsEditing(false)}>
                            Hủy
                          </Button>
                          <Button onClick={handleSaveProfile}>
                            Lưu thay đổi
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => setIsEditing(true)}>
                          Chỉnh sửa
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Bảo mật tài khoản</CardTitle>
                    <CardDescription>
                      Quản lý mật khẩu và bảo mật tài khoản
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Mật khẩu hiện tại</label>
                      <Input type="password" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Mật khẩu mới</label>
                      <Input type="password" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Xác nhận mật khẩu mới</label>
                      <Input type="password" className="mt-1" />
                    </div>
                    <Button>
                      <Shield className="mr-2 h-4 w-4" />
                      Cập nhật mật khẩu
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cài đặt thông báo</CardTitle>
                    <CardDescription>
                      Quản lý cách bạn nhận thông báo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Thông báo email</p>
                        <p className="text-sm text-muted-foreground">
                          Nhận thông báo qua email
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="mr-2 h-4 w-4" />
                        Bật
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Thông báo SMS</p>
                        <p className="text-sm text-muted-foreground">
                          Nhận thông báo qua SMS
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="mr-2 h-4 w-4" />
                        Bật
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin thanh toán</CardTitle>
                    <CardDescription>
                      Quản lý phương thức thanh toán và hóa đơn
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Ví điện tử</p>
                          <p className="text-sm text-muted-foreground">
                            Chưa có phương thức thanh toán
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Thêm
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Lịch sử giao dịch</p>
                          <p className="text-sm text-muted-foreground">
                            Xem các giao dịch đã thực hiện
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Xem
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Logout Section */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <Button variant="destructive" onClick={handleLogout} className="w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  Đăng xuất
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
} 