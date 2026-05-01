'use client'

import Image from "next/image";
import { useAuthStore } from "@/store/auth-store";

export default function UserHeader() {
  const user = useAuthStore((state) => state.user)

  // console.log({ user })

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-12 p-8">
      <div>
        <Image src="/images/avatar.png" alt="User Avatar" width={100} height={100} loading="eager" />
      </div>

      <div className="flex flex-col gap-2 py-4">
        <h1 className="text-2xl font-semibold">{user?.name}</h1>
        <p>{user?.summary}</p>
      </div>
    </div>
  )
}