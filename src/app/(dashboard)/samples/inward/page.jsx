export default function inward() {
  return <div><h1>inward</h1></div>;
}

"use client"

import { useState } from "react"
import { PageHeader } from "@/components/shared/PageHeader"
import { DataTable } from "@/components/shared/DataTable"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Edit, FileText } from "lucide-react"
import { formatDate, getStatusColor } from "@/lib/utils"

// Mock data
const mockSamples = [
  {
    id: "1",
    labNo: "LAB-2024-001",
    customerName: "ABC Industries",
    sampleDescription: "Steel Plate",
    receivedDate: "2024-01-15",
    expectedDate: "2024-01-20",
    status: "IN_PROGRESS",
    totalAmount: 25000,
  },
  {
    id: "2",
    labNo: "LAB-2024-002",
    customerName: "XYZ Ltd",
    sampleDescription: "Concrete Cube",
    receivedDate: "2024-01-14",
    expectedDate: "2024-01-19",
    status: "PENDING_APPROVAL",
    totalAmount: 18000,
  },
  {
    id: "3",
    labNo: "LAB-2024-003",
    customerName: "PQR Constructions",
    sampleDescription: "Cement Sample",
    receivedDate: "2024-01-13",
    expectedDate: "2024-01-18",
    status: "COMPLETED",
    totalAmount: 12000,
  },
]

const columns = [
  {
    accessorKey: "labNo",
    header: "Lab No",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("labNo")}</span>
    ),
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "sampleDescription",
    header: "Sample Description",
  },
  {
    accessorKey: "receivedDate",
    header: "Received Date",
    cell: ({ row }) => formatDate(row.getValue("receivedDate")),
  },
  {
    accessorKey: "expectedDate",
    header: "Expected Date",
    cell: ({ row }) => formatDate(row.getValue("expectedDate")),
  },
  {
    accessorKey: "totalAmount",
    header: "Amount",
    cell: ({ row }) => `₹${row.getValue("totalAmount").toLocaleString()}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <Badge className={getStatusColor(status)}>
          {status.replace("_", " ")}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <FileText className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
]

export default function SampleInwardPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Sample Inward"
        description="Manage incoming samples and registrations"
        onAddClick={() => setOpen(true)}
        addButtonText="New Sample Registration"
      />

      <DataTable
        columns={columns}
        data={mockSamples}
        searchColumn="labNo"
        searchPlaceholder="Search by Lab No, Customer..."
      />
    </div>
  )
}