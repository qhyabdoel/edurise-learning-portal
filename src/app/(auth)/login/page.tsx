'use client'

import Button from "@/components/ui/Button";
import { Loader, Mail } from "lucide-react";
import Input from "@/components/ui/Input";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { loginRequest } from "@/services/auth-service";
import { LoginForm } from "@/types";
import { useAuthStore } from "@/store/auth-store";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginForm>()
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const onSubmit = async (data: LoginForm) => {
    console.log({ data });
    setLoading(true);
    try {
      const res = await loginRequest(data);
      setUser(res.user);
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Login failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

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

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <Input {...register("email")} icon={<Mail size={20} />} placeholder="user@gmail.com" />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <Input {...register("password")} isPassword placeholder="********" />
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
        <Button disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader size={20} /> Harap Tunggu ...
            </span>
          ) : "Masuk"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;