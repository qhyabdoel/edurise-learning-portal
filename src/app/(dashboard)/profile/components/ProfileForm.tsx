import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { useAuthStore } from "@/store/auth-store"

const InputGroup = ({ label, value }: { label: string, value?: string }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <Input defaultValue={value} />
  </div>
)

export default function ProfileForm() {
  const { user } = useAuthStore()

  return (
    <form>
      <div className="flex gap-4">
        <div className="w-1/2">
          <InputGroup label="Nama depan" value={user?.name.split(' ')[0]} />
        </div>
        <div className="w-1/2">
          <InputGroup label="Nama belakang" value={user?.name.split(' ')[1]} />
        </div>
      </div>
      <div>
        <InputGroup label="Email" value={user?.email} />
      </div>
      <div>
        <InputGroup label="Nomor whatsapp" value={user?.whatsapp} />
      </div>
      <div>
        <InputGroup label="Jabatan" value={user?.summary} />
      </div>
      <div className="mt-8 w-40">
        <Button>Simpan</Button>
      </div>
    </form>
  )
}