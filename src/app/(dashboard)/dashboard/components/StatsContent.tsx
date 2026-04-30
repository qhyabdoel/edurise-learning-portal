import { myCoursesRequest } from "@/services/courses-service";
import StatsCard from "@/components/ui/StatsCard";

export default async function StatsContent() {
  const { data } = await myCoursesRequest();

  return (
    <div className="md:flex gap-6">
      <StatsCard
        imageUrl="/icons/icon-courses-taken.png"
        value={data.stats.total}
        title="Kursus diikuti"
        type="taken"
      />
      <StatsCard
        imageUrl="/icons/icon-courses-active.png"
        value={data.stats.active}
        title="Kursus aktif"
        type="active"
      />
      <StatsCard
        imageUrl="/icons/icon-courses-done.png"
        value={data.stats.done}
        title="Kursus selesai"
        type="done"
      />
    </div>
  );
}
