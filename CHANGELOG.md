# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1-rc] - 2026-05-10

### Added

- **Initial Release (Release Candidate)**

#### Enums

- **Business Enums** (`business.enum.ts`)
  - `WalletTransactionReason` - Transaction types (withdrawal, deposit, refund, charges, fees, etc.)
  - `WalletTransactionType` - Credit/Debit classification
  - `MembershipTier` - User membership levels
  - `GameTier` - Game difficulty/tier ratings (A+, A, B, C)
  - `Genre` - Game genres (Action Adventure, RPG, Racing, Sports, etc.)
  - `Platform` - Gaming platforms (PS4, PS5)
  - `HouseListPlatform` - Platform availability including cross-platform
  - `ArticleType` - Content types (News, Updates, Safety, Promo, Help, Guide, Review, Legal)
  - `AdminRole` - Admin permission levels (Super Admin, Operations, Support)
  - `GameCopyStatus` - Physical game copy states (Available, Reserved, Rented, QC Checking, Damaged, etc.)
  - `AuthProvider` - Authentication methods (Password, Google)
  - `TokenType` - Token classifications (Access, Refresh)
  - `GamePlayMode` - Game play types (Single Player, Multiplayer, Co-op)
  - `OrderType` - Order categories (New, Extend)
  - `VerificationTokenType` - Verification purpose types
  - `EmailTemplateType` - Email template types
  - `OrderStatus` - Order fulfillment states (Awaiting Payment, Ordered, Outbound, Delivered, etc.)
  - `OrderItemStatus` - Individual item rental states
  - `RefundStatus` - Refund processing states
  - `IncidentResolution` - Resolution outcomes
  - `OrderIncidentType` - Incident classifications
  - `PeriodKey` - Time period units (Days, Weeks, Months, Seconds)
  - `DeliveryDirection` - Delivery flow (Inbound, Outbound)
  - `ActorType` - Action performer types (Admin, User, System)
  - `DeliveryStatus` - Delivery states (Pending, Dispatched, Delivered)

- **Rating Enums** (`rating.enum.ts`)
  - `MaturityRating` - Content maturity ratings
  - `ContentDescriptor` - Content warning types
  - `AssetVisibility` - Asset visibility levels
  - `VisibilityToTypeMap` - Visibility type mappings

- **Config Enums** (`config.enum.ts`)
  - Configuration constants and settings enums

- **Error Enums** (`error.enum.ts`)
  - `ServerErrorEnum` - Server-side error codes
  - `BusinessLogicErrorEnum` - Business logic validation errors
  - `GeneralErrorEnum` - General application errors
  - `ParseError` - Data parsing errors
  - `ErrorEntity` - Error entity types
  - `ErrorEnum` - Type union of all error types

- **Bank Enums** (`bank.enum.ts`)
  - `PayoutKnownBank` - Supported bank institutions (BCA, BNI, Mandiri)

#### TypeScript Support

- Full TypeScript support with strict type checking
- Generated `.d.ts` type definitions for all exports
- Source maps for debugging

#### Build & Development Tools

- **tsup** - Fast TypeScript bundler for library building
- **Prettier** - Code formatting with configuration
- **Node 24+** - Required Node.js version

#### NPM Scripts

- `npm run build` - Build TypeScript to ESM with type definitions
- `npm run dev` - Watch mode for development
- `npm run type-check` - Type checking without build
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting without modifying
- `npm run clean` - Remove build artifacts

#### CI/CD Pipeline

- **GitHub Actions Workflow** (`publish.yml`)
  - Automatic publishing on version tag push
  - Validates tag exists on `main` branch only
  - Verifies version consistency between `package.json` and git tag
  - Runs formatting checks and type validation
  - Publishes to npm with appropriate distribution tags:
    - Stable releases: `latest` tag (e.g., `v1.0.0`)
    - Prerelease versions: `next` tag (e.g., `v1.0.0-rc`)

#### Documentation

- Comprehensive README with:
  - Installation and usage examples
  - Development setup instructions
  - Adding new enums guide
  - Publishing workflow documentation
  - Prerelease versioning explanation
- Code of conduct and contributing guidelines

#### Configuration Files

- `.nvmrc` - Node version specification
- `.gitignore` - Standard Node/TypeScript ignores
- `.npmrc` - npm registry configuration for scoped packages
- `tsconfig.json` - TypeScript compiler configuration
- `.prettierrc` - Code formatting configuration

### Notes

- This is a **Release Candidate (rc)** for initial review and testing
- All enums are designed for type-safe sharing across Loki services
- Stable 1.0.0 release will follow after validation and feedback
- Package is published to npm as `@lokiengineering/loki-common-node`

### Installation

```bash
npm install @lokiengineering/loki-common-node@next
```

Or for the latest stable (when available):

```bash
npm install @lokiengineering/loki-common-node
```

---

## Unreleased

### Planned for Future Releases

- Additional enum categories as needed
- Additional platform support enums
- Utility types for enum helpers
- Migration guides for major version updates
