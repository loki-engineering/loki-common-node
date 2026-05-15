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
}

export enum ServerErrorEnum {
  CACHE_LOCK_FAILURE,
  PRICING_RECALCULATION_IN_PROGRESS,
  INVALID_PRICING_VARIABLES,
  MISSING_PRICING_VARIABLES,
  GENERAL,
}

export enum BusinessLogicErrorEnum {
  INSUFFICIENT_BALANCE,
  COPY_HAS_ACTIVE_RESERVATION,
  CART_EMPTY,
  UNFINISHED_ORDER_EXISTS,
  NOT_AVAILABLE_FOR_RENT,
  INVALID_RENTAL_DURATION,
  WALLET_FROZEN,
  CANNOT_DELETE_PRIMARY_ADDRESS,
  MAX_DEPOSIT_EXCEEDED,
  EDITION_HAS_ACTIVE_COPIES,
  INVALID_ORDER_TRANSITION_CONFIG,
  MISMATCH_LATE_INPUT,
}

export enum GeneralErrorEnum {
  ROUTE_NOT_FOUND,
  INVALID_CREDENTIALS,
  INVALID_REFRESH_TOKEN,
  TOKEN_EXPIRED,
  TOKEN_INVALID,
  OTP_INVALID,
  OTP_EXPIRED,
  FORBIDDEN,
  UNAUTHORIZED,
  INVALID_VERIFICATION_TOKEN,
  RATE_LIMITED,
  EMAIL_ALREADY_VERIFIED,
  PHONE_ALREADY_VERIFIED,
  NOT_FOUND,
}

export enum ParseError {
  INVALID_RESPONSE,
  INVALID_INPUT,
}
export type ErrorEnum = ServerErrorEnum | BusinessLogicErrorEnum | GeneralErrorEnum | ParseError;
