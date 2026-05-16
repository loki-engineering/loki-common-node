export enum ErrorEntity {
  Game = 'game',
  Cache = 'cache',
  Slug = 'slug',
  Order = 'order',
  User = 'user',
  AdminUser = 'admin',
  AuthIdentity = 'auth_identity',
  UserAddress = 'user_address',
  OrderStatus = 'order_status',
  GameEdition = 'game_edition',
  PricingConfig = 'pricing_config',
  RentalPeriodRule = 'rental_period_rule',
  TierMultiplier = 'tier_multiplier',
  OrderCostComponent = 'order_cost_component',
  GameCopy = 'game_copy',
  Tag = 'tag',
  GameTag = 'game_tag',
  HouseList = 'house_list',
  HouseListGame = 'house_list_game',
  CartItem = 'cart_item',
  OrderDelivery = 'order_delivery',
  Wallet = 'wallet',
  WalletTransaction = 'wallet_transaction',
  UpcomingRelease = 'upcoming_release',
  PhoneVerification = 'phone_verification',
}

export enum ServerErrorEnum {
  CACHE_LOCK_FAILURE = 'CACHE_LOCK_FAILURE',
  PRICING_RECALCULATION_IN_PROGRESS = 'PRICING_RECALCULATION_IN_PROGRESS',
  INVALID_PRICING_VARIABLES = 'INVALID_PRICING_VARIABLES',
  MISSING_PRICING_VARIABLES = 'MISSING_PRICING_VARIABLES',
  GENERAL = 'GENERAL',
}

export enum BusinessLogicErrorEnum {
  INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
  COPY_HAS_ACTIVE_RESERVATION = 'COPY_HAS_ACTIVE_RESERVATION',
  CART_EMPTY = 'CART_EMPTY',
  UNFINISHED_ORDER_EXISTS = 'UNFINISHED_ORDER_EXISTS',
  NOT_AVAILABLE_FOR_RENT = 'NOT_AVAILABLE_FOR_RENT',
  INVALID_RENTAL_DURATION = 'INVALID_RENTAL_DURATION',
  WALLET_FROZEN = 'WALLET_FROZEN',
  CANNOT_DELETE_PRIMARY_ADDRESS = 'CANNOT_DELETE_PRIMARY_ADDRESS',
  MAX_DEPOSIT_EXCEEDED = 'MAX_DEPOSIT_EXCEEDED',
  EDITION_HAS_ACTIVE_COPIES = 'EDITION_HAS_ACTIVE_COPIES',
  INVALID_ORDER_TRANSITION_CONFIG = 'INVALID_ORDER_TRANSITION_CONFIG',
  MISMATCH_LATE_INPUT = 'MISMATCH_LATE_INPUT',
}

export enum GeneralErrorEnum {
  ROUTE_NOT_FOUND = 'ROUTE_NOT_FOUND',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  INVALID_REFRESH_TOKEN = 'INVALID_REFRESH_TOKEN',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  OTP_INVALID = 'OTP_INVALID',
  OTP_EXPIRED = 'OTP_EXPIRED',
  FORBIDDEN = 'FORBIDDEN',
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_VERIFICATION_TOKEN = 'INVALID_VERIFICATION_TOKEN',
  RATE_LIMITED = 'RATE_LIMITED',
  EMAIL_ALREADY_VERIFIED = 'EMAIL_ALREADY_VERIFIED',
  PHONE_ALREADY_VERIFIED = 'PHONE_ALREADY_VERIFIED',
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',
  PHONE_NOT_VERIFIED = 'PHONE_NOT_VERIFIED',
  NOT_FOUND = 'NOT_FOUND',
}

export enum ParseError {
  INVALID_RESPONSE = 'INVALID_RESPONSE',
  INVALID_INPUT = 'INVALID_INPUT',
}
export type ErrorEnum = ServerErrorEnum | BusinessLogicErrorEnum | GeneralErrorEnum | ParseError;
