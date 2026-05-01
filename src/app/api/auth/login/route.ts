import { NextResponse } from 'next/server';
import { mockUser } from '@/app/api/users/route';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // 1. Simulate network latency (Crucial for the "Loading" requirement)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 2. Mock Validation
  if (email === mockUser.email && password === mockUser.password) {
    const response = NextResponse.json({
      data: {
        name: mockUser.name,
        email: mockUser.email,
        summary: mockUser.summary,
        whatsapp: mockUser.whatsapp
      }
    }, { status: 200 });

    response.cookies.set('token', 'mock-jwt-token-123', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    return response
  }

  // 3. Error Case
  return NextResponse.json(
    { message: 'Email atau password salah' },
    { status: 401 }
  );
}