import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-500">EduRise</h1>
          <nav>
            <ul className="flex gap-6">
              <li className="flex items-center">
                <Image src="/icons/bell.png" alt="logo" width={24} height={24} />
              </li>
              <li>
                <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}