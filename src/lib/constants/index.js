export const SAMPLE_STATUS = {
  REGISTERED: 'REGISTERED',
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  RESULTS_INPUT: 'RESULTS_INPUT',
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  APPROVED: 'APPROVED',
  REPORT_GENERATED: 'REPORT_GENERATED',
  DISPATCHED: 'DISPATCHED',
  INVOICED: 'INVOICED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
}

export const SAMPLE_STATUS_LABELS = {
  [SAMPLE_STATUS.REGISTERED]: 'Registered',
  [SAMPLE_STATUS.PLANNED]: 'Planned',
  [SAMPLE_STATUS.IN_PROGRESS]: 'In Progress',
  [SAMPLE_STATUS.RESULTS_INPUT]: 'Results Input',
  [SAMPLE_STATUS.PENDING_APPROVAL]: 'Pending Approval',
  [SAMPLE_STATUS.APPROVED]: 'Approved',
  [SAMPLE_STATUS.REPORT_GENERATED]: 'Report Generated',
  [SAMPLE_STATUS.DISPATCHED]: 'Dispatched',
  [SAMPLE_STATUS.INVOICED]: 'Invoiced',
  [SAMPLE_STATUS.COMPLETED]: 'Completed',
  [SAMPLE_STATUS.CANCELLED]: 'Cancelled'
}

export const USER_ROLES = {
  ADMIN: 'admin',
  LAB_MANAGER: 'lab_manager',
  TECHNICIAN: 'technician',
  SALES: 'sales',
  ACCOUNTS: 'accounts',
  APPROVER: 'approver',
  VIEWER: 'viewer'
}

export const PERMISSIONS = {
  // Customer Management
  CREATE_CUSTOMER: 'create_customer',
  EDIT_CUSTOMER: 'edit_customer',
  DELETE_CUSTOMER: 'delete_customer',
  VIEW_CUSTOMER: 'view_customer',
  
  // Sample Management
  CREATE_SAMPLE: 'create_sample',
  EDIT_SAMPLE: 'edit_sample',
  DELETE_SAMPLE: 'delete_sample',
  VIEW_SAMPLE: 'view_sample',
  
  // Test Management
  CREATE_TEST: 'create_test',
  EDIT_TEST: 'edit_test',
  INPUT_RESULTS: 'input_results',
  APPROVE_RESULTS: 'approve_results',
  
  // Report Management
  GENERATE_REPORT: 'generate_report',
  APPROVE_REPORT: 'approve_report',
  DISPATCH_REPORT: 'dispatch_report',
  
  // Invoice Management
  CREATE_INVOICE: 'create_invoice',
  EDIT_INVOICE: 'edit_invoice',
  APPROVE_INVOICE: 'approve_invoice',
  
  // User Management
  MANAGE_USERS: 'manage_users',
  MANAGE_ROLES: 'manage_roles'
}

export const RECEIVE_MODES = [
  { value: 'HAND', label: 'By Hand' },
  { value: 'COURIER', label: 'By Courier' },
  { value: 'CUSTOMER', label: 'Customer Drop' },
  { value: 'EMAIL', label: 'Email' }
]

export const PAYMENT_MODES = [
  { value: 'CASH', label: 'Cash' },
  { value: 'CHEQUE', label: 'Cheque' },
  { value: 'BANK_TRANSFER', label: 'Bank Transfer' },
  { value: 'CREDIT_CARD', label: 'Credit Card' },
  { value: 'ONLINE', label: 'Online Payment' }
]

export const DISPATCH_MODES = [
  { value: 'COURIER', label: 'Courier' },
  { value: 'EMAIL', label: 'Email' },
  { value: 'PERSONAL', label: 'Personal Delivery' }
]