# Enums Spec

The `src/enums` directory contains shared TypeScript enums used throughout the application.

## Responsibilities

- **Domain Enums:** Enums for statuses (e.g., `OrderStatus`), types (e.g., `WalletTransactionType`), and other discrete sets of values.
- **System Enums:** Enums for configuration, error types, or environment settings.

## Conventions

- Use PascalCase for enum names and keys.
- Prefer string enums for better debuggability and logging.
- Export all enums from a central file if needed, or keep them in domain-specific files.
