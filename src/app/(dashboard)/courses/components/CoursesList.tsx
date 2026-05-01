import CourseCard from "@/components/ui/CourseCard"
import { allCoursesRequest } from "@/services/courses-service"

type Props = {
  categories?: string;
  search?: string;
}

export default async function CoursesList({ categories, search }: Props) {
  const { data: { data } } = await allCoursesRequest({ categories, search })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {data.map((course: any, index: number) => (
        <CourseCard
          key={index}
          name={course.name}
          category={course.category}
          type="all"
          progressText={course.progressText}
        />
      ))}
    </div>
  )
}