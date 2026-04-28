import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white font-sans">

      {/* Left Section: Illustration */}
      <div className="hidden md:flex md:w-2/5 items-center justify-center p-12">
        <Image
          src="/images/login-illustration.png"
          alt="3D Character"
          className="max-w-md w-full object-contain"
          width={558}
          height={100}
          loading="eager"
        />
      </div>

      {/* Right Section: Form */}
      {children}
    </div>
  )
}
