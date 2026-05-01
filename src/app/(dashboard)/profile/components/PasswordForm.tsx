import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"

const InputGroup = ({ label, value, type = "text" }: { label: string, value?: string, type?: string }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <Input defaultValue={value} type={type} />
  </div>
)

export default function PasswordForm() {
  return (
    <form>
      <div>
        <InputGroup label="Password sekarang" />
      </div>
      <div>
        <InputGroup label="Password baru" />
      </div>
      <div>
        <InputGroup label="Konfirmasi password baru" />
      </div>
      <div className="mt-8 w-40">
        <Button>Simpan</Button>
      </div>
    </form>
  )
}