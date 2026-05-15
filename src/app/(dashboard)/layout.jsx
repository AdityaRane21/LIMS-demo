import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"

export default function DashboardLayout({ children }) {
  const user = { name: "John Doe", email: "john@lims.com" }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-64">
        <Header user={user} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}