import { NextResponse } from "next/server";
import { mockUser } from "@/app/api/user/route";

export async function PUT(request: Request) {
  const body = await request.json();

  const { oldPassword, newPassword, confirmPassword } = body

  if (!oldPassword || !newPassword) {
    return NextResponse.json({ message: "Kata sandi lama dan baru wajib diisi" }, { status: 401 })
  }

  if (oldPassword !== mockUser.password) {
    return NextResponse.json({ message: "Kata sandi lama tidak sesuai" }, { status: 401 })
  }

  // simulasi delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (newPassword === confirmPassword) {
    mockUser.password = newPassword
    console.log({ mockUser })
    return NextResponse.json({ message: "Kata sandi berhasil diubah" }, { status: 200 })
  }

  return NextResponse.json({ message: "Konfirmasi kata sandi tidak sesuai" }, { status: 401 })
}