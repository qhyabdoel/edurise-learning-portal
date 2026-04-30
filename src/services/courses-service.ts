const BASE_URL = 'http://localhost:3000';

export const myCoursesRequest = async () => {
  const response = await fetch(`${BASE_URL}/api/courses/mine`, {
    next: {
      // revalidate: 60
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Terjadi kesalahan");
  }

  return data;
};
