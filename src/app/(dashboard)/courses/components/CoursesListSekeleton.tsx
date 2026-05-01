export default function CoursesListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded shadow-sm shadow-black/20">
          {/* Image Skeleton */}
          <div className="h-40 w-full bg-gray-200 animate-pulse rounded-t"></div>

          {/* Content Skeleton */}
          <div className="p-4 space-y-3">
            {/* Category Skeleton */}
            <div className="h-6 w-24 bg-gray-200 animate-pulse rounded-full"></div>

            {/* Title Skeleton */}
            <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>

            {/* Progress Text Skeleton */}
            <div className="h-3 w-1/2 bg-gray-200 animate-pulse rounded"></div>

            {/* Button Skeleton */}
            <div className="space-y-2 pt-1">
              <div className="h-8 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}