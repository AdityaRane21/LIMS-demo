import { Inter } from "next/font/google"
import { ToastProvider } from "@/components/ui/toast-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LIMS Platform - Laboratory Information Management System",
  description: "Enterprise LIMS for modern laboratories",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}