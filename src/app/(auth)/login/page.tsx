'use client'

import Button from "@/components/ui/Button";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full md:w-3/5 flex flex-col justify-center px-8 sm:px-16 lg:px-32 py-12">

      {/* Branding */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-blue-500 tracking-tight">EduRise</h1>
        <p className="text-gray-500 mt-2 font-medium">
          Tingkatkan kemampuanmu, raih masa depan lebih baik
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-8">Masuk</h2>

      <form className="space-y-5">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail size={20} />
            </div>
            <input
              type="email"
              placeholder="user@gmail.com"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-500"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <div className="relative group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              defaultChecked
            />
            <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
          </label>
        </div>

        {/* Submit */}
        <Button>Masuk</Button>
      </form>
    </div>
  );
};

export default LoginPage;