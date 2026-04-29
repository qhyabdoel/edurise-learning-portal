'use client'

import { cn } from "@/utils/cn"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function DashboardTabs() {
  const pathname = usePathname()

  const baseStyles = "text-center px-12 py-4 cursor-pointer hover:text-gray-700"

  const activeStyle = "border-b-2 border-blue-500 font-semibold"
  const inActiveStyle = "text-gray-400"

  return (
    <nav className="md:flex">
      {/* Tabs */}
      <Link href="/dashboard" className={cn(baseStyles, pathname === '/dashboard' ? activeStyle : inActiveStyle)}>
        Dashboard
      </Link>

      <Link href="/courses" className={cn(baseStyles, pathname === '/courses' ? activeStyle : inActiveStyle)}>
        Daftar Kursus
      </Link>

      <Link href="/profile" className={cn(baseStyles, pathname === '/profile' ? activeStyle : inActiveStyle)}>
        Profile Saya
      </Link>
    </nav>
  )
}