import { create } from 'zustand'

type User = {
  name: string
  email: string
  summary?: string
}

type AuthStore = {
  user: User | null
  setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))