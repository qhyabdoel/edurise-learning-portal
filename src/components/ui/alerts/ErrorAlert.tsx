import { X } from "lucide-react";

export default function ErrorAlert({ message, setErrored }: { message: string, setErrored: (value: string) => void }) {
  return (
    <div className="p-3 text-sm text-red-800 rounded-lg bg-red-50 flex gap-2" role="alert">
      <div className="flex-1">
        {message}
      </div>
      <a onClick={() => setErrored("")} className="cursor-pointer">
        <X size={20} />
      </a>
    </div>
  )
}