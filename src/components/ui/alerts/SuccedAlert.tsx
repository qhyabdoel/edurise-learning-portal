import { X } from "lucide-react";

export default function SuccedAlert({ message, setSucceded }: { message: string, setSucceded: (value: string) => void }) {
  return (
    <div className="p-3 text-sm text-green-800 rounded-lg bg-green-50 flex gap-2" role="alert">
      <div className="flex-1">
        {message}
      </div>
      <a onClick={() => setSucceded("")} className="cursor-pointer">
        <X size={20} />
      </a>
    </div>
  )
}