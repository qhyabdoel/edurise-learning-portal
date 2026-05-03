import { NextResponse } from "next/server";

let mockWhatsappNotif = {
    enabled: false,
    motivation: false
}

export async function PUT(request: Request) {
    const body = await request.json();
    mockWhatsappNotif = { ...mockWhatsappNotif, ...body }
    return NextResponse.json({ data: mockWhatsappNotif }, { status: 200 });
}

export async function GET(request: Request) {
    return NextResponse.json({ data: mockWhatsappNotif }, { status: 200 });
}