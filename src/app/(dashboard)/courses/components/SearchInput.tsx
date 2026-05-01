'use client'

import Input from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchInput({ categories, search }: { categories?: string, search?: string }) {
  const [searchValue, setSearchValue] = useState(search);
  const [debounceSearch, setDebounceSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(searchValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    if (debounceSearch === search) return;

    if (debounceSearch) {
      window.location.href = `/courses?categories=${categories}&search=${debounceSearch}`
    } else {
      window.location.href = `/courses?categories=${categories}`
    }
  }, [debounceSearch])

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