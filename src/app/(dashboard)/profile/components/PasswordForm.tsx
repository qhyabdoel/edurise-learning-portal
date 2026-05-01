"use client"
import { ChangePasswordForm } from "@/types";
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";
import SuccedAlert from "@/components/ui/alerts/SuccedAlert";
import ErrorAlert from "@/components/ui/alerts/ErrorAlert";
import { changePasswordRequest } from "@/services/auth-service";

type InputGroupProps = {
  label: string
  value?: string
  register: UseFormRegisterReturn
  disabled?: boolean
  type?: string
  required?: boolean
}
const InputGroup = ({
  register,
  label,
  value,
  type = "text",
  disabled = false,
  required = false
}: InputGroupProps) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <Input defaultValue={value} {...register} disabled={disabled} type={type} required={required} isPassword />
  </div>
)

export default function PasswordForm() {
  const [succeded, setSucceded] = useState("")
  const [errored, setErrored] = useState("")
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ChangePasswordForm>();

  const onSubmit = async (data: ChangePasswordForm) => {
    try {
      const res = await changePasswordRequest(data)
      setSucceded(res.message)
    } catch (error: any) {
      setErrored(error.message)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputGroup label="Password sekarang" register={register("oldPassword")} required disabled={isSubmitting} />
      </div>
      <div>
        <InputGroup label="Password baru" register={register("newPassword")} required disabled={isSubmitting} />
      </div>
      <div>
        <InputGroup label="Konfirmasi password" register={register("confirmPassword")} required disabled={isSubmitting} />
      </div>
      <div className="mt-8 flex gap-8">
        <div className="w-40">
          <Button disabled={isSubmitting}>Simpan</Button>
        </div>
        <div className="flex-1">
          {succeded && <SuccedAlert message={succeded} setSucceded={setSucceded} />}
          {errored && <ErrorAlert message={errored} setErrored={setErrored} />}
        </div>
      </div>
    </form>
  )
}