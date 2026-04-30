import { myCoursesRequest } from "@/services/courses-service";
import StatsCard from "@/components/ui/StatsCard";

export default async function StatsContent() {
  return (
    <div className="md:flex gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex-1 flex gap-8 p-4 rounded bg-slate-100 animate-pulse h-20 mb-0.5"
        />
      ))}
    </div>
  );
}
