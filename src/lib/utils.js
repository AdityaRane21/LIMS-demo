// import { clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs) {
//   return twMerge(clsx(inputs))
// }

// export const formatCurrency = (amount, currency = 'INR') => {
//   return new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: currency,
//     minimumFractionDigits: 2
//   }).format(amount)
// }

// export const formatDate = (date) => {
//   if (!date) return 'N/A'
//   return new Date(date).toLocaleDateString('en-IN', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric'
//   })
// }

// export const formatDateTime = (date) => {
//   if (!date) return 'N/A'
//   return new Date(date).toLocaleString('en-IN', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
//   })
// }

// export const getStatusColor = (status) => {
//   const colors = {
//     REGISTERED: 'bg-gray-100 text-gray-800',
//     PLANNED: 'bg-blue-100 text-blue-800',
//     IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
//     RESULTS_INPUT: 'bg-purple-100 text-purple-800',
//     PENDING_APPROVAL: 'bg-orange-100 text-orange-800',
//     APPROVED: 'bg-green-100 text-green-800',
//     REPORT_GENERATED: 'bg-teal-100 text-teal-800',
//     DISPATCHED: 'bg-indigo-100 text-indigo-800',
//     INVOICED: 'bg-pink-100 text-pink-800',
//     COMPLETED: 'bg-emerald-100 text-emerald-800',
//     CANCELLED: 'bg-red-100 text-red-800',
//     PENDING: 'bg-yellow-100 text-yellow-800',
//     PAID: 'bg-green-100 text-green-800',
//     UNPAID: 'bg-red-100 text-red-800'
//   }
//   return colors[status] || 'bg-gray-100 text-gray-800'
// }

// export const truncateText = (text, maxLength = 50) => {
//   if (!text) return ''
//   if (text.length <= maxLength) return text
//   return text.substring(0, maxLength) + '...'
// }

// export const generateUniqueId = () => {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2)
// }

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount)
}

export const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

export const getStatusColor = (status) => {
  const colors = {
    REGISTERED: 'bg-gray-100 text-gray-800',
    PLANNED: 'bg-blue-100 text-blue-800',
    IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
    COMPLETED: 'bg-green-100 text-green-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
  }
  return colors[status] || 'bg-gray-100 text-gray-800'
}