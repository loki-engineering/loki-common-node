# Release Notes - v0.0.1-rc

## 🚀 Initial Release Candidate

We're excited to announce the first release candidate of `@lokiengineering/loki-common-node`, a shared TypeScript enum library for Loki services.

**Release Date:** May 10, 2026  
**Version:** 0.0.1-rc  
**Package:** `@lokiengineering/loki-common-node`

---

## What's Included

### 📦 5 Complete Enum Modules

#### Business Enums (26 types)
Transaction reasons, wallet operations, membership tiers, game ratings, platforms, article types, admin roles, order/rental states, and more.

```typescript
import {
  OrderStatus,
  WalletTransactionType,
  GameTier,
  AdminRole,
} from '@lokiengineering/loki-common-node';
```

#### Rating Enums
Maturity ratings, content descriptors, and asset visibility classifications.

#### Config Enums
Configuration-related constants and settings.

#### Error Enums
Server, business logic, and general error classifications with typed error unions.

#### Bank Enums
Supported payout bank institutions.

### ✨ Key Features

- **Full TypeScript Support** - Strict types, source maps, and `.d.ts` definitions
- **Zero Dependencies** - Lightweight, no runtime dependencies
- **Modern Build** - ESM output, optimized bundle size (~13KB)
- **Developer Experience**
  - Type checking with strict mode
  - Code formatting with Prettier
  - Automated builds and publishing
  - Watch mode for development

### 🔧 Automated Publishing

- **Branch-protected**: Tags only publish from `main` branch
- **Version validation**: Ensures `package.json` matches git tag
- **Smart tagging**:
  - Stable releases → `latest` tag on npm
  - Prerelease (e.g., rc, beta) → `next` tag on npm

---

## Installation

### For Prerelease Testing

```bash
npm install @lokiengineering/loki-common-node@next
```

### For Stable Release (coming after RC feedback)

```bash
npm install @lokiengineering/loki-common-node
```

---

## Usage Examples

### Basic Import

```typescript
import { OrderStatus, GameTier, AdminRole } from '@lokiengineering/loki-common-node';

const status: OrderStatus = OrderStatus.DELIVERED;
const tier: GameTier = GameTier.A_PLUS;
const role: AdminRole = AdminRole.SUPER_ADMIN;
```

### Type Safety

```typescript
// ✓ Type-safe - catches errors at compile time
const validStatus: OrderStatus = OrderStatus.PENDING;

// ✗ TypeScript Error - not a valid enum value
const invalidStatus: OrderStatus = 'invalid';
```

---

## Development

### Quick Start

```bash
# Install dependencies
npm install

# Build
npm run build

# Develop with watch mode
npm run dev

# Type checking
npm run type-check

# Format code
npm run format
```

### Adding New Enums

1. Create file in `src/enums/` (e.g., `src/enums/status.ts`)
2. Export enum definitions
3. Add export to `src/enums/index.ts`
4. Build and test with `npm run build`

See [README](README.md#adding-new-enums) for detailed guide.

---

## Publishing

### For Maintainers

**Requirements:**
- Granular npm access token with 2FA bypass
- Tag from `main` branch only
- Version in `package.json` must match tag name

**Steps:**

```bash
# 1. Update version in package.json
npm version patch  # or minor/major

# 2. Commit and push
git push origin main

# 3. Create and push tag
git tag v0.0.1
git push origin v0.0.1

# 4. GitHub Actions publishes automatically ✓
```

---

## Release Candidate Notes

This is a **Release Candidate (0.0.1-rc)** release, published as `@latest` to the `next` distribution tag on npm.

**Testing & Feedback Requested:**
- [ ] Install and verify enum imports in your services
- [ ] Test TypeScript integration and type hints
- [ ] Report any missing enum types or values
- [ ] Provide feedback on API design

**Expected Timeline:**
- RC period: 1-2 weeks of testing and validation
- Stable 1.0.0: After RC feedback and fixes

---

## Reporting Issues

Found a bug or missing enum? 

- [Create an Issue](https://github.com/loki-engineering/loki-common-node/issues)
- [View Discussions](https://github.com/loki-engineering/loki-common-node/discussions)

---

## Next Steps

- ✓ Add to your services and test
- ✓ Report feedback via GitHub Issues
- 🔄 Watch for 1.0.0 stable release
- 📦 Future releases will include additional enums as needed

---

**Happy typing!** 🎉

For more information, see the [README](README.md) and [CHANGELOG](CHANGELOG.md).
