'use client'

import Input from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function SearchInput({ categories, search }: { categories?: string, search?: string }) {
  const [searchValue, setSearchValue] = useState(search);
  const [debounceSearch, setDebounceSearch] = useState(search);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(searchValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    if (debounceSearch === search) return;

    startTransition(() => {
      if (debounceSearch) {
        router.replace(`/courses?categories=${categories ?? ""}&search=${debounceSearch}`, { scroll: false })
      } else {
        router.replace(`/courses?categories=${categories ?? ""}`, { scroll: false })
      }
    });
  }, [debounceSearch, categories, router, search])

  useEffect(() => {
    setSearchValue(search);
  }, [search])

  return (
    <Input
      icon={<Search size={20} />}
      placeholder="Cari"
      value={searchValue}
      onChange={(e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
      }}
    />
  )
}