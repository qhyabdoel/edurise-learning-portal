import FilterDropdown from "./components/FilterDropdown";
import { Suspense } from "react";
import CoursesList from "./components/CoursesList";
import CoursesListSekeleton from "./components/CoursesListSekeleton";
import SearchInput from "./components/SearchInput";
import { sanitizeUrl } from "@/utils/sanitize-url";

type SearchParams = Promise<{
  categories?: string;
  search?: string;
}>;

export default async function CoursesPage({ searchParams }: { searchParams: SearchParams }) {
  const { categories, search } = await searchParams
  const searchInput = sanitizeUrl(search)

  return (
    <>
      <div className="space-y-7 mb-8">
        <h1 className="text-2xl font-semibold">Daftar Kursus</h1>
        <div className="space-y-7">
          <div className="flex">
            <div>
              <FilterDropdown search={searchInput} categories={categories} />
            </div>

            <div className="flex-1" />

            <div className="w-96">
              <SearchInput search={searchInput} categories={categories} />
            </div>
          </div>

          <Suspense fallback={<CoursesListSekeleton />}>
            <CoursesList categories={categories} search={searchInput} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
