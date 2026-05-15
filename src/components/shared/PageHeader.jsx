"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function PageHeader({ title, description, onAddClick, addButtonText }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {onAddClick && (
        <Button onClick={onAddClick}>
          <Plus className="mr-2 h-4 w-4" />
          {addButtonText || "Add New"}
        </Button>
      )}
    </div>
  )
}