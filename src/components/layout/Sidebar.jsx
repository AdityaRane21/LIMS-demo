"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Users,
  FlaskConical,
  FileText,
  Receipt,
  Settings,
  Package,
  ClipboardList,
  CheckCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },  // Changed from "/" to "/dashboard"
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Sample Inward", href: "/samples/inward", icon: Package },
  { name: "Test Planning", href: "/samples/planning", icon: ClipboardList },
  { name: "Test Master", href: "/tests", icon: FlaskConical },
  { name: "Result Input", href: "/samples/results", icon: CheckCircle },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Invoicing", href: "/invoicing", icon: Receipt },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold">LIMS Platform</h1>
      </div>
      <nav className="space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}