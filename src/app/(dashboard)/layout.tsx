import Header from "@/components/layout/Header";
import DashboardTabs from "@/components/navigation/DashboardTabs";
import Image from "next/image";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-gray-700">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* User Header */}
        <div className="flex gap-12 p-8">
          <div>
            <Image src="/images/avatar.png" alt="User Avatar" width={100} height={100} />
          </div>

          <div className="flex flex-col gap-2 py-4">
            <h1 className="text-2xl font-semibold">Kiki Abdulloh</h1>
            <p>An enthusiast developer with ability to design with various tool</p>
          </div>
        </div>

        {/* Tabs */}
        <DashboardTabs />

        {/* Page Content */}
        <div className="mt-10">
          {children}
        </div>
      </main>
    </div>
  )
}