import { myCoursesRequest } from "@/services/courses-service";
import StatsCard from "@/components/ui/StatsCard";

export default async function StatsContent() {
  const { data } = await myCoursesRequest();

  return (
    <div className="md:flex gap-6">
      <StatsCard
        imageUrl="/icons/icon-courses-taken.png"
        altText="course-taken"
        value={data.stats.total}
        title="Kursus diikuti"
        type="taken"
      />
      <StatsCard
        imageUrl="/icons/icon-courses-active.png"
        altText="course-taken"
        value={data.stats.active}
        title="Kursus aktif"
        type="active"
      />
      <StatsCard
        imageUrl="/icons/icon-courses-done.png"
        altText="course-taken"
        value={data.stats.done}
        title="Kursus selesai"
        type="done"
      />
    </div>
  );
}
