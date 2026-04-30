import { http, HttpResponse, delay } from "msw";
import { LoginForm } from "@/types";
import courses from "@/data/courses.json";

export const handlers = [
  http.get("http://api.example.com/courses/mine", async () => {
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
    await delay(15000);
    return HttpResponse.json({ data }, { status: 200 });
  }),
];