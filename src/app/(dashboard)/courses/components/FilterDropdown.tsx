'use client'
import { useRef, useState, useEffect } from "react";
import { Filter } from "lucide-react";
import Button from "@/components/ui/Button";
import { title } from "process";

const FilterInput = ({ title }: { title: string }) => (
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="h-4 w-4 text-blue-600 rounded cursor-pointer"
    />
    <span>{title}</span>
  </label>
)

export default function FilterDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDown(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-64 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer items-center bg-white"
      >
        <div className="mr-2">
          <Filter size={20} />
        </div>
        <div className="flex-1 text-left">Filter</div>
        <div className="rounded-full px-2 py-0.5 text-sm bg-blue-100 text-blue-600">
          3
        </div>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          <div className="p-4 space-y-3">
            <FilterInput title="Web Development" />
            <FilterInput title="Mobile Development" />
            <FilterInput title="Data Science" />
            <FilterInput title="Machine Learning" />
            <FilterInput title="UI/UX" />
            <FilterInput title="Security" />
            <FilterInput title="Network" />
            <FilterInput title="Cloud Computing" />
            <FilterInput title="DevOps" />
            <FilterInput title="Big Data" />
            <FilterInput title="AI Engineering" />
            <FilterInput title="Blockchain" />
            <div className="mt-4" onClick={() => setOpen(false)}>
              <Button size="sm">Apply</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}