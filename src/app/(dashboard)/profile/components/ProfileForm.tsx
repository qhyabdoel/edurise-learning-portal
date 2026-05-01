'use client'

import { useForm, UseFormRegisterReturn } from "react-hook-form"
import { useState } from "react"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { useAuthStore } from "@/store/auth-store"
import type { ProfileForm } from "@/types"
import { updateProfileRequest } from "@/services/user-service"
import ErrorAlert from "@/components/ui/alerts/ErrorAlert"
import SuccedAlert from "@/components/ui/alerts/SuccedAlert"

type InputGroupProps = {
  label: string
  value?: string
  register: UseFormRegisterReturn
  disabled?: boolean
  type?: string
  required?: boolean
}

const InputGroup = ({
  label,
  value,
  register,
  disabled = false,
  type = "text",
  required = false
}: InputGroupProps) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <Input defaultValue={value} {...register} disabled={disabled} type={type} required={required} />
  </div>
)

export default function ProfileForm() {
  const { user } = useAuthStore()
  const setUser = useAuthStore((state) => state.setUser)
  const [succeded, setSucceded] = useState("")
  const [errored, setErrored] = useState("")
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ProfileForm>()

  const onSubmit = async (data: ProfileForm) => {
    try {
      // console.log({ data })
      const firstName = data.firstName || user?.name.split(' ')[0] || ""
      const lastName = data.lastName || user?.name.split(' ')[1] || ""
      const email = data.email || user?.email || ""
      const whatsapp = data.whatsapp || user?.whatsapp || ""
      const summary = data.summary || user?.summary || ""

      const res = await updateProfileRequest({
        ...data,
        firstName,
        lastName,
        email,
        whatsapp,
        summary
      })
      setUser(res.data);
      setSucceded("Data berhasil diperbarui")
    } catch (error: any) {
      setErrored(error.message)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4">
        <div className="w-1/2">
          <InputGroup
            label="Nama depan"
            value={user?.name.split(' ')[0]}
            register={register("firstName")}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="w-1/2">
          <InputGroup
            label="Nama belakang"
            value={user?.name.split(' ')[1]}
            register={register("lastName")}
            disabled={isSubmitting}
            required
          />
        </div>
      </div>
      <div>
        <InputGroup
          label="Email"
          value={user?.email}
          register={register("email")}
          disabled={isSubmitting}
          type="email"
          required
        />
      </div>
      <div>
        <InputGroup
          label="Nomor whatsapp"
          value={user?.whatsapp}
          register={register("whatsapp")}
          disabled={isSubmitting}
          type="number"
        />
      </div>
      <div>
        <InputGroup
          label="Jabatan"
          value={user?.summary}
          register={register("summary")}
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="mt-8 flex gap-8">
        <div className="w-40">
          <Button disabled={isSubmitting}>Simpan</Button>
        </div>
        <div className="flex-1 pt-0.5">
          {succeded && <SuccedAlert message={succeded} setSucceded={setSucceded} />}
          {errored && <ErrorAlert message={errored} setErrored={setErrored} />}
        </div>
      </div>
    </form>
  )
}