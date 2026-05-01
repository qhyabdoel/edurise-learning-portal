import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  name: string
  email: string
  summary?: string
  whatsapp?: string
}

type AuthStore = {
  user: User | null
  setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'auth-storage', // key in localStorage
    }
  )
)