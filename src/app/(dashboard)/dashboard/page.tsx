import CourseCard from "@/components/ui/CourseCard";
import StatsCard from "@/components/ui/StatsCard";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <>
      <div className="space-y-5 mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="md:flex gap-6">
          <StatsCard
            imageUrl="/icons/icon-courses-taken.png"
            altText="course-taken"
            value="100"
            title="Kursus diikuti"
            type="taken"
          />
          <StatsCard
            imageUrl="/icons/icon-courses-active.png"
            altText="course-taken"
            value="100"
            title="Kursus aktif"
            type="active"
          />
          <StatsCard
            imageUrl="/icons/icon-courses-done.png"
            altText="course-taken"
            value="100"
            title="Kursus selesai"
            type="done"
          />
        </div>
      </div>

      <div className="space-y-5 mb-8">
        <h1 className="text-2xl font-semibold">Kursus Saya (3)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div >

      <div className="space-y-5 mb-8">
        <h1 className="text-2xl font-semibold">Rekomendasi Kursus</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div >
    </>
  )
}