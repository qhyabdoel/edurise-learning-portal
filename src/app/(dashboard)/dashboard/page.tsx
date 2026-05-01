import StatsContent from "./components/StatsContent";
import { Suspense } from "react";
import StatsSkeleton from "./components/StatsSkeleton";
import MyCourses from "./components/MyCourses";
import MyCoursesSkeleton from "./components/MyCoursesSkeleton";
import RecommendedCourses from "./components/RecommendedCourses";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
        <Suspense fallback={<MyCoursesSkeleton />}>
          <RecommendedCourses />
        </Suspense>
        <Link href="/courses">
          <Button className="w-full mt-4" variant="outline">
            Lihat Lebih Banyak
          </Button>
        </Link>
      </div>
    </>
  );
}
