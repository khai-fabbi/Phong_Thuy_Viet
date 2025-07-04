# 🏮 Phong Thủy Việt

Một ứng dụng web hiện đại về phong thủy được xây dựng với Next.js, cung cấp các dịch vụ tư vấn phong thủy, bói toán và các giải pháp phong thủy cho người Việt Nam.

## ✨ Tính năng

- 🏠 **Tư vấn phong thủy nhà ở**
- 📅 **Xem ngày tốt xấu**
- 🎯 **Bói toán trực tuyến**
- 👤 **Hệ thống đăng ký/đăng nhập**
- 📱 **Giao diện responsive**
- 🌙 **Chế độ dark/light mode**
- 🎨 **Thiết kế hiện đại với shadcn/ui**

## 🛠️ Công nghệ sử dụng

### Frontend

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Zustand** - State management
- **dayjs** - Date manipulation

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **VS Code** - IDE với auto-format

## 🚀 Cài đặt

### Yêu cầu hệ thống

- Node.js 18+
- npm hoặc yarn

### Bước 1: Clone repository

```bash
git clone <repository-url>
cd phong_thuy_viet
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## 📁 Cấu trúc dự án

```
phong_thuy_viet/
├── app/                    # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css        # Global styles & Tailwind config
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── profile/           # User profile page
├── components/            # React components
│   ├── icons/            # Custom icons
│   ├── layout/           # Layout components
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── stores/               # Zustand stores
├── public/               # Static assets
└── package.json
```

## 🎨 Hệ thống màu sắc

Dự án sử dụng hệ thống màu phong thủy với các màu chính:

### Màu chính

- **Primary**: `#8ec73d` - Xanh lá phong thủy
- **Primary Dark**: `#004540` - Xanh lá đậm
- **Accent Orange**: `#FF9F25` - Cam nhấn

### Màu hệ thống

- **Success**: `#10b981` - Xanh lá
- **Warning**: `#f59e0b` - Vàng cam
- **Info**: `#3b82f6` - Xanh dương
- **Destructive**: `#ef4444` - Đỏ

### Cách sử dụng

```tsx
// Sử dụng màu custom
<div className="bg-[#8ec73d]">Primary green</div>
<div className="bg-[#004540]">Dark green</div>
<div className="bg-[#FF9F25]">Accent orange</div>

// Sử dụng CSS variables
<div style={{ backgroundColor: 'var(--color-primary-dark)' }}>
  Dark green background
</div>
```

## 🔧 Scripts

```bash
# Development
npm run dev          # Chạy development server
npm run build        # Build production
npm run start        # Chạy production server

# Code quality
npm run lint         # Kiểm tra ESLint
npm run lint:fix     # Tự động fix ESLint errors
npm run format       # Format code với Prettier
npm run type-check   # Kiểm tra TypeScript
```

## 📱 Responsive Design

Dự án hỗ trợ đầy đủ responsive với các breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Container classes

```tsx
<div className="container">      {/* max-width: 1192px */}
<div className="container-sm">   {/* max-width: 640px */}
<div className="container-lg">   {/* max-width: 1400px */}
```

## 🎯 State Management

Sử dụng Zustand cho state management với các stores:

### User Store

```tsx
import { useUserStore } from "@/stores/userStore"

// Login
const { login } = useUserStore()
login(email, password)

// Logout
const { logout } = useUserStore()
logout()

// User info
const { user } = useUserStore()
```

## 🎨 UI Components

Dự án sử dụng shadcn/ui với các components:

- **Button** - Các loại button khác nhau
- **Input** - Form inputs
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Menu dropdown
- **Select** - Select dropdowns
- **Tabs** - Tab navigation
- **Avatar** - User avatars
- **Badge** - Status badges
- **Card** - Content cards
- **Form** - Form components

## 🔐 Authentication

Hệ thống authentication với:

- **Login/Register** - Đăng nhập/đăng ký
- **Profile Management** - Quản lý thông tin cá nhân
- **Session Persistence** - Lưu session với localStorage
- **Protected Routes** - Bảo vệ các trang cần auth

## 📝 Code Style

### ESLint Configuration

- Sử dụng ESLint với Prettier
- Auto-format on save
- TypeScript support

### Prettier Configuration

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Connect repository với Vercel
3. Deploy tự động

### Manual Build

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phát hành dưới MIT License.

## 📞 Liên hệ

- **Email**: [your-email@example.com]
- **Website**: [your-website.com]
- **GitHub**: [your-github-username]

---

**Phong Thủy Việt** - Mang lại sự cân bằng và may mắn cho cuộc sống của bạn 🌿✨
