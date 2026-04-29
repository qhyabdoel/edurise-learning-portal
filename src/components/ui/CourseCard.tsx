import Button from "./Button"
import { Download } from "lucide-react"

export default function CourseCard() {
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
        <div className="rounded-full bg-blue-100 px-3 py-0.5 text-xs text-blue-500 w-fit mb-3">Desain</div>
        <p className="text-sm mb-1">Belajar coding dengan javascript</p>
        <p className="mb-3">3. Belajar variable</p>

        {/* Progres Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-full h-2 bg-blue-200 rounded-full">
            <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-xs text-blue-500">100%</p>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button size="sm">Lanjutkan Kursus</Button>
          <Button variant="secondary" size="sm">
            <span className="flex items-center justify-center gap-2">
              <Download size={14} /> Unduh Sertifikat
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}