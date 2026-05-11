export enum WalletTransactionReason {
  WITHDRAWAL = 'withdrawal',
  DEPOSIT_LOCK = 'deposit_lock',
  DEPOSIT_REFUND = 'deposit_refund',
  RENTAL_CHARGE = 'rental_charge',
  LATE_FEE = 'late_fee',
  DAMAGE_PENALTY = 'damage_penalty',
  LOST_FORFEITURE = 'lost_forfeiture',
  MANUAL_REFUND = 'manual_refund',
  TOP_UP = 'top_up',
}

export enum WalletTransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export enum MembershipTier {
  BASIC = 'basic',
}

export enum GameTier {
  A_PLUS = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
}

export enum Genre {
  actionAdventure = 'Action Adventure',
  actionRPG = 'Action RPG',
  adventure = 'Adventure',
  fighting = 'Fighting',
  racing = 'Racing',
  sports = 'Sports',
  openWorld = 'Open World',
}

export enum Platform {
  PS4 = 'ps4',
  PS5 = 'ps5',
}

export enum HouseListPlatform {
  PS4 = 'ps4',
  PS5 = 'ps5',
  ALL = 'all',
}

export enum ArticleType {
  NEWS = 'news',
  UPDATE = 'update',
  SAFETY = 'safety',
  PROMO = 'promo',
  HELP = 'help',
  GUIDE = 'guide',
  REVIEW = 'review',
  LEGAL = 'legal',
}

export enum AdminRole {
  SUPER_ADMIN = 'superadmin',
  OPS = 'operation',
  Support = 'support',
}

export enum GameCopyStatus {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  RENTED = 'rented',
  QC_CHECKING = 'qc_checking',
  DAMAGED = 'damaged',
  MAINTENANCE = 'maintenance',
  RETIRED = 'retired',
}

export enum AuthProvider {
  PASSWORD = 'password',
  GOOGLE = 'google',
}

export enum TokenType {
  ACCESS = 'access',
  REFRESH = 'refresh',
}

export enum GamePlayMode {
  SINGLE_PLAYER = 'single_player',
  MULTIPLAYER = 'multiplayer',
  CO_OP = 'co_op',
}

export enum OrderType {
  NEW = 'new',
  EXTEND = 'extend',
}

export enum VerificationTokenType {
  EMAIL_VERIFICATION = 'email_verification',
  PASSWORD_RESET = 'password_reset',
}

export enum EmailTemplateType {
  EMAIL_VERIFICATION = 'email_verification',
  PASSWORD_RESET = 'password_reset',
  PASSWORD_CONFIRMATION = 'password_confirmation',
}

export enum OrderStatus {
  AWAITING_PAYMENT = 'awaiting_payment',
  ORDERED = 'ordered',
  OUTBOUND = 'outbound',
  DELIVERED = 'delivered',
  INBOUND = 'inbound',
  QC_CHECKING = 'qc_checking',
  QC_PASSED = 'qc_passed',
  CANCELLED = 'cancelled',
  LOST = 'lost',
  DAMAGE_DETECTED = 'damage_detected',
  LOST_OUTBOUND = 'lost_outbound',
  LOST_INBOUND = 'lost_inbound',
  COMPLETED = 'completed',
}

export enum OrderItemStatus {
  ACTIVE = 'active', //
  EXTENDED = 'extended', // item rental has been extended
  RETURNED = 'returned', // item returned, pending QC
  DAMAGED = 'damaged', // damage detected on this specific item
  LOST = 'lost', // this specific item was lost
}

export enum RefundStatus {
  PENDING = 'pending',
  PROCESSED = 'processed',
  REJECTED = 'rejected',
  DONE = 'done',
}

export enum IncidentResolution {
  PENDING = 'pending',
  FULL_REFUND = 'full_refund',
  PARTIAL_REFUND = 'partial_refund',
  NO_REFUND = 'no_refund',
  RESOLVED = 'resolved',
}

export enum OrderIncidentType {
  INBOUND_DAMAGE = 'inbound_damage',
  OUTBOUND_DAMAGE = 'outbound_damage',
  UNFULFILLABLE = 'unfulfillable',
}

export enum PeriodKey {
  Weeks = 'weeks',
  Days = 'days',
  Months = 'months',
  Seconds = 'seconds',
}

export enum DeliveryDirection {
  INBOUND = 'inbound',
  OUTBOUND = 'outbound',
}

export enum ActorType {
  ADMIN = 'admin',
  USER = 'user',
  SYSTEM = 'system',
}

export enum DeliveryStatus {
  PENDING = 'pending',
  DISPATCHED = 'dispatched',
  DELIVERED = 'delivered',
}

export enum OrderPenaltyType {
  LIGHT_SCRATCH = 'light_scratch',
  DEEP_SCRATCH = 'deep_scratch',
  DAMAGED_CASING = 'damaged_casing',
  SEVERE_DAMAGE = 'severe_damage',
}

export enum OrderChargeStatus {
  NOT_ASSESSED,
  PENDING,
  SETTLED,
}
