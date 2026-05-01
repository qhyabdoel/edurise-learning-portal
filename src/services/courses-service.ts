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

export const allCoursesRequest = async ({ categories, search }: { categories?: string, search?: string }) => {

  const params = new URLSearchParams();
  if (categories) {
    params.set("category", categories);
  }
  if (search) {
    params.set("search", search);
  }

  // console.log(params.toString());

  const response = await fetch(`${BASE_URL}/api/courses/list?${params.toString()}`, {
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
