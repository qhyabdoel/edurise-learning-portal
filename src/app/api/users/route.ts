import { NextResponse } from "next/server";

export let mockUser = {
  name: "Kiki Abdulloh",
  email: "admin@example.com",
  phone: "08123456789",
  summary: "Developer with a strong ability to design and build user-centric solutions",
  whatsapp: "08123456789",
  password: "password123"
}

export async function PUT(request: Request) {
  const body = await request.json();

  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // update mock user data
  mockUser = { ...mockUser, ...body }

  return NextResponse.json({ data: mockUser }, { status: 200 });
}