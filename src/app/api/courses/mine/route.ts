import { NextResponse } from "next/server";
import courses from "@/data/courses.json";

export async function GET() {
  const data = {
    stats: {
      total: 3,
      active: 2,
      done: 1,
    },
    data: {
      mine: courses.slice(0, 3),
      recommendation: courses,
    },
  };

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 15000));

  return NextResponse.json({ data: data }, { status: 200 });
}
