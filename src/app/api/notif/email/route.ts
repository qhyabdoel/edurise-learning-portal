import { NextResponse } from "next/server";

let mockEmailNotif = {
  enabled: false,
  weeklyReport: false,
  certificate: false,
  recommendation: false
}

export async function PUT(request: Request) {
  const body = await request.json();
  mockEmailNotif = { ...mockEmailNotif, ...body }
  return NextResponse.json({ data: mockEmailNotif }, { status: 200 });
}

export async function GET(request: Request) {
  return NextResponse.json({ data: mockEmailNotif }, { status: 200 });
}
