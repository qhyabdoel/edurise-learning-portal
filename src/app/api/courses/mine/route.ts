import { NextResponse } from "next/server";
import courses from "@/data/courses.json";

export async function GET(request: Request) {
  const data = {
    stats: {
      total: 3,
      active: 2,
      done: 1,
    },
    data: {
      mine: courses.slice(0, 3),
      recommendation: courses.slice(0, 4),
    },
  };

  // delay 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return NextResponse.json({ data });
}