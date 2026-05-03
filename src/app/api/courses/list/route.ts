import { NextResponse } from "next/server";
import courses from "@/data/courses.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const categories = searchParams.get("category");
    const search = searchParams.get("search");

    const categoriesArray = categories?.split(",");

    console.log(categoriesArray);

    let filteredCourses = courses;
    if (categories && categories !== "undefined") {
        filteredCourses = filteredCourses.filter(
            (item) => categoriesArray?.includes(item.category)
        );
    }
    if (search && search !== "undefined") {
        filteredCourses = filteredCourses.filter(
            (item) => item.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    const data = {
        data: filteredCourses,
    };

    // delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ data }, { status: 200 });
}