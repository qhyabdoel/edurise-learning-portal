import { Filter } from "lucide-react";
import CourseCard from "@/components/ui/CourseCard";
import Input from "@/components/ui/Input";
import { Search } from "lucide-react";

export default function CoursesPage() {
  return (
    <>
      <div className="space-y-7 mb-8">
        <h1 className="text-2xl font-semibold">Daftar Kursus (100)</h1>
        <div className="space-y-7">
          <div className="flex">
            <div className="flex-1">
              <div className="flex w-64 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer">
                <div className="mr-2">
                  <Filter size={20} />
                </div>
                <div className="flex-1">Filter</div>
                <div className="rounded-full px-2 py-0.5 text-sm bg-blue-100 text-blue-600">3</div>
              </div>
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
      </div >
    </>
  )
}