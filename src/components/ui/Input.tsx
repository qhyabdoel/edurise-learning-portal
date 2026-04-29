"use client"

import { cn } from "@/utils/cn";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  isPassword?: boolean
  isError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, isPassword, isError, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const baseStyles = cn(
      "w-full py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-700"
    )

    return (
      <div className="relative group">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          {...props}
          type={isPassword ? (showPassword ? 'text' : 'password') : (props.type ?? 'text')}
          className={cn(baseStyles, isError && "border-red-500 focus:border-red-500", icon ? "pl-10 pr-4" : "px-4")}
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