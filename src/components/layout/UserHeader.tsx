import Image from "next/image";

export default function UserHeader() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-12 p-8">
      <div>
        <Image src="/images/avatar.png" alt="User Avatar" width={100} height={100} loading="eager" />
      </div>

      <div className="flex flex-col gap-2 py-4">
        <h1 className="text-2xl font-semibold">Kiki Abdulloh</h1>
        <p>An enthusiast developer with ability to design with various tool</p>
      </div>
    </div>
  )
}