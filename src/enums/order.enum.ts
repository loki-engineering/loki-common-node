export enum FulfillmentStatus {
  PENDING = 'pending',
  CANCELLED = 'cancelled',
  OUTBOUND = 'outbound',
  DELIVERED = 'delivered',
  DOA = 'doa',
  DOA_PROOF_VALIDATING = 'doa_proof_validating',
  DOA_PROOF_VALIDATED = 'doa_proof_validated',
  DOA_IN_REVIEW = 'doa_in_review',
  DOA_REJECTED = 'doa_rejected',
  DOA_VERIFIED = 'doa_verified',
  REPLACED = 'replaced',
  DOA_RESOLVED = 'doa_resolved',
  INBOUND_SUBMITTED = 'inbound_submitted',
  INBOUND_VERIFIED = 'inbound_verified',
  QC_CHECKING = 'qc_checking',
  QC_PASSED = 'qc_passed',
  QC_FAILED = 'qc_failed',
  QC_APPEAL_REVIEW = 'qc_appeal_review',
  QC_APPEAL_REJECTED = 'qc_appeal_rejected',
  QC_APPEAL_ACCEPTED = 'qc_appeal_accepted',
  COMPLETED = 'completed',
  LOST_USER = 'lost_user',
  LOST_SHIPPING = 'lost_shipping',
  LOST_SHIPPING_REVIEW = 'lost_shipping_review',
}

export enum ItemPaymentStatus {
  UNPAID = 'unpaid',
  PAID = 'paid',
  HELD = 'held',
  REFUNDING = 'refunding',
  REFUNDED = 'refunded',
  COMPLETED = 'completed',
  FORFEITED = 'forfeited',
  ZERO_REFUND = 'zero_refund',
}

export enum OrderStatus {
  IN_REVIEW = 'in_review',
  CONFIRMED = 'confirmed',
  SHIPPED = 'shipped',
  ACTIVE = 'active',
  OVERDUE = 'overdue',
  DISPUTED = 'disputed',
  CLOSED = 'closed',
  // backward compatibility
  PENDING = 'pending', // starting state (was awaiting_payment)
  COMPLETED = 'completed', // normal end state (no disputes)
  CANCELLED = 'cancelled', // terminal cancel state
}

export enum AppealStatus {
  PENDING = 'appeal_pending',
  REJECTED = 'appeal_rejected',
  ACCEPTED = 'appeal_accepted',
}
