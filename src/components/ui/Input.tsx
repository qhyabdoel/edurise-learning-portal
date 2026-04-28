"use client"

import { cn } from "@/utils/cn";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { useState } from "react";

interface InputProps {
  icon?: React.ReactNode
  disabled?: boolean
  type?: string
  placeholder?: string
  isPassword?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, disabled, type, placeholder, isPassword, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const baseStyles = cn(
      "w-full py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-500"
    )

    return (
      <div className="relative group">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <input
          disabled={disabled}
          type={isPassword ? (showPassword ? 'text' : 'password') : (type ?? 'text')}
          placeholder={placeholder}
          className={cn(baseStyles, icon ? "pl-10 pr-4" : "px-4")}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    );
  })

export default Input