import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import UserHeader from "@/components/layout/UserHeader";
import DashboardTabs from "@/components/navigation/DashboardTabs";

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
        <UserHeader />

        {/* Tabs */}
        <DashboardTabs />

        {/* Page Content */}
        <div className="mt-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}