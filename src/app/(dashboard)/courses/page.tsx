import { Search } from "lucide-react";
import CourseCard from "@/components/ui/CourseCard";
import Input from "@/components/ui/Input";
import FilterDropdown from "./components/FilterDropdown";

export default function CoursesPage() {
  return (
    <>
      <div className="space-y-7 mb-8">
        <h1 className="text-2xl font-semibold">Daftar Kursus (100)</h1>
        <div className="space-y-7">
          <div className="flex">
            <div className="flex-1">
              <FilterDropdown />
            </div>

            <div className="w-96">
              <Input icon={<Search size={20} />} placeholder="Cari" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </>
  );
}
