import { cacheLife } from "next/cache";

const API_BASE_URL = "http://localhost:3000";

export const myCoursesRequest = async () => {
  "use cache";

  cacheLife('seconds');

  const response = await fetch(`${API_BASE_URL}/api/courses/mine`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Terjadi kesalahan');
  }

  return data;
};