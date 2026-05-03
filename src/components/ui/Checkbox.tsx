type CheckboxProps = {
  checked?: boolean
  onChange: () => void
  disabled?: boolean
  required?: boolean
}

export default function checkbox({ checked, onChange, disabled, required }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className="h-5 w-5 text-blue-600 rounded cursor-pointer"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
  )
}