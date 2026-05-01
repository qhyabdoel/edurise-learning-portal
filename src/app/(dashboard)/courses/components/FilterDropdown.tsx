'use client'

import { useRef, useState, useEffect } from "react";
import { Filter } from "lucide-react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { sanitizeUrl } from "@/utils/sanitize-url";

const ALL_CATEGORIES = [
  "Programming",
  "Data",
  "Multimedia",
  "Marketing",
  "Network",
  "Animation",
  "Design",
  "Business",
]

const FilterInput = ({ title, checked, onChange }: {
  title: string,
  checked: boolean,
  onChange: (checked: boolean) => void
}) => (
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="h-4 w-4 text-blue-600 rounded cursor-pointer"
    />
    <span>{title}</span>
  </label>
)

export default function FilterDropdown({ search, categories }: { search?: string, categories?: string }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCategoriesCount, setSelectedCategoriesCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (categories) {
      setSelectedCategories(categories.split(","));
      setSelectedCategoriesCount(categories.split(",").length);
    } else {
      setSelectedCategories([]);
      setSelectedCategoriesCount(0);
    }
  }, [categories])

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

  const handleApplyFilter = () => {
    router.replace(`/courses?categories=${selectedCategories.join(",")}&search=${sanitizeUrl(search)}`)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-72 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer items-center bg-white"
      >
        <div className="mr-2">
          <Filter size={20} />
        </div>
        <div className="flex-1 text-left">Filter</div>
        <div className="rounded-full px-2 py-0.5 text-sm bg-blue-100 text-blue-600">
          {selectedCategoriesCount}
        </div>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          <div className="p-4 space-y-3">
            {ALL_CATEGORIES.map((category) => (
              <FilterInput
                key={category}
                title={category}
                checked={selectedCategories.includes(category)}
                onChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category]);
                    setSelectedCategoriesCount(selectedCategoriesCount + 1);
                  } else {
                    setSelectedCategories(selectedCategories.filter((c) => c !== category));
                    setSelectedCategoriesCount(selectedCategoriesCount - 1);
                  }
                }}
              />
            ))}
            <div className="mt-4" onClick={() => setOpen(false)}>
              <Button size="sm" onClick={handleApplyFilter}>Apply</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}