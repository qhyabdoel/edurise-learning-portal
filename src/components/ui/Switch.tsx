"use client";

export function Switch({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
}) {
  return (
    <label className={`flex items-center gap-2.5 cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <div className={`relative w-[44px] h-[24px]`}>
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="absolute inset-0 rounded-full bg-gray-300 transition-colors duration-200 peer-checked:bg-blue-500" />
        <span className="absolute rounded-full bg-white shadow transition-transform duration-200 w-[18px] h-[18px] top-[3px] left-[3px] peer-checked:translate-x-5" />
      </div>
    </label>
  );
}