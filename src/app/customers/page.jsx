"use client"

import { PageHeader } from "@/components/shared/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Customers"
        description="Manage your customer database"
        onAddClick={() => alert("Add customer - will implement later")}
        addButtonText="Add Customer"
      />
      
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            Customer management coming soon...
          </div>
        </CardContent>
      </Card>
    </div>
  )
}