import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Định nghĩa interface cho User
interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: string
  updatedAt: string
}

// Định nghĩa interface cho UserState
interface UserState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  
  // Actions
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (email: string, password: string, name: string) => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
  setUser: (user: User) => void
  clearError: () => void
  setLoading: (loading: boolean) => void
}

// Tạo user store
export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null })
        try {
          // TODO: Thay thế bằng API call thực tế
          // const response = await fetch('/api/auth/login', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ email, password })
          // })
          // const data = await response.json()
          
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const _password = password // Sẽ sử dụng khi implement API thực tế
          
          // Mock data cho demo
          const mockUser: User = {
            id: '1',
            email,
            name: 'Nguyễn Văn A',
            avatar: 'https://via.placeholder.com/150',
            role: 'user',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Đăng nhập thất bại',
            isLoading: false
          })
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null
        })
      },

      register: async (email: string, password: string, name: string) => {
        set({ isLoading: true, error: null })
        try {
          // TODO: Thay thế bằng API call thực tế
          // const response = await fetch('/api/auth/register', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ email, password, name })
          // })
          // const data = await response.json()

          // Mock data cho demo
          const mockUser: User = {
            id: '1',
            email,
            name,
            avatar: 'https://via.placeholder.com/150',
            role: 'user',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Đăng ký thất bại',
            isLoading: false
          })
        }
      },

      updateProfile: async (updates: Partial<User>) => {
        set({ isLoading: true, error: null })
        try {
          const currentUser = get().user
          if (!currentUser) {
            throw new Error('Không tìm thấy thông tin người dùng')
          }

          // TODO: Thay thế bằng API call thực tế
          // const response = await fetch(`/api/users/${currentUser.id}`, {
          //   method: 'PUT',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(updates)
          // })
          // const data = await response.json()

          const updatedUser: User = {
            ...currentUser,
            ...updates,
            updatedAt: new Date().toISOString()
          }

          set({
            user: updatedUser,
            isLoading: false,
            error: null
          })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Cập nhật thất bại',
            isLoading: false
          })
        }
      },

      setUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
          error: null
        })
      },

      clearError: () => {
        set({ error: null })
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      }
    }),
    {
      name: 'user-storage', // Tên key trong localStorage
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      }) // Chỉ lưu user và isAuthenticated vào localStorage
    }
  )
)

// Export types để sử dụng ở nơi khác
export type { User } 