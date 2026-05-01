import { NextResponse } from 'next/server';

const EMAIL_ADDRESS = 'admin@example.com'
const PASSWORD = 'password123'

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // 1. Simulate network latency (Crucial for the "Loading" requirement)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 2. Mock Validation
  if (email === EMAIL_ADDRESS && password === PASSWORD) {
    const response = NextResponse.json({
      data: {
        name: 'John Doe',
        email: EMAIL_ADDRESS,
        summary: 'Developer with a strong ability to design and build user-centric solutions'
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