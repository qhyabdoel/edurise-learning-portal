import { http, HttpResponse, delay } from "msw";
import { LoginForm } from "@/types";
import courses from "@/data/courses.json";

export const handlers = [
  http.post("http://api.example.com/auth/login", async ({ request }) => {
    const body = await request.json() as LoginForm;

    await delay(1500);

    if (body.email === "admin@example.com" && body.password === "password123") {
      const token = "mock-jwt-token-123";

      return HttpResponse.json({
        data: {
          name: "Kiki Abdulloh",
          email: "admin@example.com",
          summary: "An enthusiast developer with ability to design with various tool"
        }
      }, {
        status: 200,
        headers: {
          "set-cookie": `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24}; Secure; SameSite=Lax`,
        }
      });
    }

    return HttpResponse.json({ message: "Email atau password salah" }, { status: 401 });
  }),
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
    await delay(1500);
    return HttpResponse.json({ data }, { status: 200 });
  }),
];