# @lokiengineering/loki-common-node

Shared TypeScript enums and types for Loki services. This library provides type-safe enum definitions to ensure consistency across multiple services.

## Requirements

- **Node.js**: >= 24.0.0
- **npm**: >= 10.0.0

## Installation

```bash
npm install @lokiengineering/loki-common-node
```

## Usage

Import enums from the library:

```typescript
import { /* enum names */ } from '@lokiengineering/loki-common-node';
```

Example (once enums are added):

```typescript
import { Status } from '@lokiengineering/loki-common-node';

const currentStatus: Status = Status.Active;
```

## Development

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/loki-engineering/loki-common-node.git
   cd loki-common-node
   ```

2. Install Node 24+ (or use nvm):
   ```bash
   nvm use 24
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Building

Build the TypeScript code:

```bash
npm run build
```

Output will be in the `dist/` directory.

### Development Mode

Run TypeScript compiler in watch mode:

```bash
npm run dev
```

### Type Checking

Check for TypeScript errors without building:

```bash
npm run type-check
```

### Code Formatting

Format code with Prettier:

```bash
npm run format
```

Check if code is properly formatted (without modifying):

```bash
npm run format:check
```

### Cleaning

Remove build artifacts:

```bash
npm run clean
```

## Project Structure

```
src/
├── index.ts          # Main entry point (barrel exports)
└── enums/            # Enum definitions
    ├── status.ts     # (example)
    └── roles.ts      # (example)

dist/                 # Compiled output (generated)
```

## Adding New Enums

1. Create a new file in `src/enums/`:
   ```typescript
   // src/enums/status.ts
   export enum Status {
     Active = 'ACTIVE',
     Inactive = 'INACTIVE',
     Pending = 'PENDING',
   }
   ```

2. Export it from `src/index.ts`:
   ```typescript
   export * from './enums/status';
   ```

3. Build and test:
   ```bash
   npm run build
   npm run type-check
   ```

## Publishing

### Setup NPM Token

1. Generate an npm token with publish access (at https://npmjs.com/settings/~/tokens)
2. Add it to GitHub repository secrets as `NPM_TOKEN`

### Publish a Release

The version is automatically read from `package.json`, so:

1. Update the version in `package.json` (e.g., `0.1.0`)
2. Commit and push to main
3. Create a git tag matching the version: `git tag v0.1.0`
4. Push the tag: `git push origin v0.1.0`
5. GitHub Actions automatically builds and publishes to npm

The workflow will:
- ✓ Verify that `package.json` version matches the git tag
- ✓ Build TypeScript
- ✓ Run type checking and formatting checks
- ✓ Publish to npm registry with appropriate tag

### Version & Tag Format

The tag must match the version in `package.json` exactly (without the `v` prefix):

**Stable releases:**
- Version: `1.0.0`
- Tag: `v1.0.0`
- Published to npm as `@lokiengineering/loki-common-node@1.0.0` (tagged as `latest`)

**Prerelease versions:**
- Version: `1.0.0-rc` or `1.0.0-beta.1`
- Tag: `v1.0.0-rc` or `v1.0.0-beta.1`
- Published to npm as `@lokiengineering/loki-common-node@1.0.0-rc` (tagged as `next`)

Prerelease versions are published with the `next` tag on npm, so users must explicitly install them:
```bash
npm install @lokiengineering/loki-common-node@next
```

## Versioning

This package follows [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes to enum definitions
- **MINOR**: New enums or backward-compatible additions
- **PATCH**: Bug fixes and documentation

## License

MIT

## Contributing

Contributions are welcome! Please ensure:
- TypeScript code is strictly typed
- All enums are well-documented
- Type definitions are included
- Changes maintain backward compatibility where possible
