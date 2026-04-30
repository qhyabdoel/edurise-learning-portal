import CourseCard from "@/components/ui/CourseCard"
import { myCoursesRequest } from "@/services/courses-service"

export default async function MyCourses() {
  const { data: { data } } = await myCoursesRequest()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {data.mine.map((course: any, index: number) => (
        <CourseCard
          key={index}
          name={course.name}
          category={course.category}
          progress={course.progress}
          progressText={course.progressText}
        />
      ))}
    </div>
  )
}