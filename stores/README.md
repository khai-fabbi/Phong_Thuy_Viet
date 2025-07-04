# User Store với Zustand

## Cách sử dụng

### 1. Import store
```typescript
import { useUserStore } from '@/app/stores/userStore'
```

### 2. Sử dụng trong component
```typescript
import { useUserStore } from '@/app/stores/userStore'

export default function UserProfile() {
  const { user, isAuthenticated, isLoading, error, login, logout, updateProfile } = useUserStore()

  const handleLogin = async () => {
    await login('user@example.com', 'password123')
  }

  const handleLogout = () => {
    logout()
  }

  const handleUpdateProfile = async () => {
    await updateProfile({ name: 'Tên mới' })
  }

  if (isLoading) return <div>Đang tải...</div>
  if (error) return <div>Lỗi: {error}</div>

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Xin chào, {user?.name}!</h1>
          <p>Email: {user?.email}</p>
          <button onClick={handleLogout}>Đăng xuất</button>
          <button onClick={handleUpdateProfile}>Cập nhật profile</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Đăng nhập</button>
      )}
    </div>
  )
}
```

### 3. Các actions có sẵn

- `login(email, password)` - Đăng nhập
- `logout()` - Đăng xuất
- `register(email, password, name)` - Đăng ký
- `updateProfile(updates)` - Cập nhật thông tin profile
- `setUser(user)` - Set user trực tiếp
- `clearError()` - Xóa lỗi
- `setLoading(loading)` - Set trạng thái loading

### 4. State có sẵn

- `user` - Thông tin user hiện tại
- `isAuthenticated` - Trạng thái đã đăng nhập
- `isLoading` - Trạng thái đang tải
- `error` - Thông báo lỗi

### 5. Persistence

Store sẽ tự động lưu `user` và `isAuthenticated` vào localStorage và khôi phục khi refresh trang.

## Lưu ý

- Hiện tại đang sử dụng mock data, cần thay thế bằng API calls thực tế
- Có thể thêm middleware để xử lý authentication token
- Có thể mở rộng thêm các actions khác như refresh token, forgot password, etc. 