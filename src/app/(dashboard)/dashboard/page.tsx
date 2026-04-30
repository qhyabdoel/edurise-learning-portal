import CourseCard from "@/components/ui/CourseCard";
import StatsContent from "./components/StatsContent";
import { Suspense } from "react";
import StatsSkeleton from "./components/StatsSkeleton";
import MyCourses from "./components/MyCourses";
import MyCoursesSkeleton from "./components/MyCoursesSkeleton";

export default function DashboardPage() {
  return (
    <>
      <div className="space-y-5 mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Suspense fallback={<StatsSkeleton />}>
          <StatsContent />
        </Suspense>
      </div>

      <div className="space-y-5 mb-8">
        <h1 className="text-2xl font-semibold">Kursus Saya (3)</h1>
        <Suspense fallback={<MyCoursesSkeleton />}>
          <MyCourses />
        </Suspense>
      </div>

      <div className="space-y-5 mb-8">
        <h1 className="text-2xl font-semibold">Rekomendasi Kursus</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <CourseCard
              key={index}
              name="Full Stack JavaScript / Node.js"
              category="Programming"
              progress={30}
              progressText="3. Pengenalan algoritma"
            />
          ))}
        </div>
      </div>
    </>
  );
}
