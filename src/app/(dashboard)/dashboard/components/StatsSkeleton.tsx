export default function StatsSkeleton() {
  return (
    <div className="md:flex gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex-1 flex gap-8 p-4 rounded bg-gray-200 animate-pulse h-20 mb-0.5"
        />
      ))}
    </div>
  );
}