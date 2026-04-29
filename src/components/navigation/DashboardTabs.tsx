'use client'

import { cn } from "@/utils/cn"
import { usePathname } from "next/navigation"

export default function DashboardTabs() {
  const pathname = usePathname()

  const baseStyles = "text-center px-12 py-4 cursor-pointer hover:text-gray-700"

  const activeStyle = "border-b-2 border-blue-500 font-semibold"
  const inActiveStyle = "text-gray-400"

  return (
    <nav className="flex">
      {/* Tabs */}
      <div className={cn(baseStyles, pathname === '/dashboard' ? activeStyle : inActiveStyle)}>
        Dashboard
      </div>

      <div className={cn(baseStyles, pathname === '/dashboard/daftar-kursus' ? activeStyle : inActiveStyle)}>
        Daftar Kursus
      </div>

      <div className={cn(baseStyles, pathname === '/dashboard/profile-saya' ? activeStyle : inActiveStyle)}>
        Profile Saya
      </div>
    </nav>
  )
}