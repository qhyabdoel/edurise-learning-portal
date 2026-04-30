import { cacheLife } from "next/cache";

export const myCoursesRequest = async () => {
  "use cache";

  cacheLife("minutes");

  const response = await fetch('http://api.example.com/courses/mine', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Terjadi kesalahan");
  }

  return data;
};
