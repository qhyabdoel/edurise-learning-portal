'use client'

import Button from "@/components/ui/Button";
import { Loader, Mail } from "lucide-react";
import Input from "@/components/ui/Input";
import { useState } from "react";
import { useForm } from "react-hook-form"

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm()

  const onSubmit = async (data: any) => {
    // setLoading(true)
    // const res = await loginApi(data);
    // if (res.ok) {
    //   setCookie('auth-token', res.token, { maxAge: 60 * 60 * 24 }); // 1 day
    //   setAuth(res.user, res.token);
    //   router.push('/dashboard');
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3/5 flex flex-col justify-center px-8 sm:px-16 lg:px-32 py-12">

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
          <Input icon={<Mail size={20} />} placeholder="user@gmail.com" />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <Input isPassword placeholder="********" />
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
        <Button disabled>
          <span className="flex items-center justify-center gap-2">
            <Loader size={20} /> Harap Tunggu ...
          </span>
        </Button>
      </form>
    </form>
  );
};

export default LoginPage;