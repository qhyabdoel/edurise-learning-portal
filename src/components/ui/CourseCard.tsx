import { cn } from "@/utils/cn"
import Button from "./Button"
import { Download } from "lucide-react"

interface CourseCardProps {
  name: string
  category: string
  progress: number
  progressText: string
}

export default function CourseCard({ name, category, progress, progressText }: CourseCardProps) {
  return (
    <div className="shadow-sm shadow-black/20 rounded">
      <div>
        <img
          className="h-40 w-full object-cover"
          src="/images/course-image.png"
          alt="course-img"
          width={282}
          height={150}
          loading="eager"
        />
      </div>
      <div className="p-4">
        <div className="rounded-full bg-blue-100 px-3 py-0.5 text-xs text-blue-500 w-fit mb-3">{category}</div>
        <p className="text-sm mb-1">{name}</p>
        <p className="mb-3">{progressText}</p>

        {/* Progres Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-full h-2 bg-blue-200 rounded-full">
            <div
              className={cn("h-2 rounded-full", progress !== 100 ? 'bg-blue-500' : 'bg-green-500')}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className={cn("text-xs", progress !== 100 ? 'text-blue-500' : 'text-green-500')}>{progress}%</p>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button size="sm">Lanjutkan Kursus</Button>
          <Button variant="secondary" size="sm" disabled={progress !== 100}>
            <span className="flex items-center justify-center gap-2">
              <Download size={14} /> Unduh Sertifikat
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}