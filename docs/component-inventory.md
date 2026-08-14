# Shopify reference component inventory

This inventory mirrors the one-page render in `src/App.tsx`. All copy is original, all art is CSS-generated placeholder imagery, and every interaction is display-only.

## Shared primitives

| Component | Typed props | Purpose |
| --- | --- | --- |
| `Hero` | `eyebrow?`, `title`, `body?`, `actions`, `tone?`, `compact?` | Art-led campaign area with one or more CTAs. |
| `ProductRail` | `title`, `products`, `accent?`, `tabs?` | Scrollable product-card collection with optional filter tabs. |
| `TileGrid` | `title?`, `tiles`, `columns?` | Category or editorial tile collection. |
| `Benefits` | `items` | Compact service-assurance strip. |
| `Footer` | `title`, `description`, `groups` | Email capture, navigation groups, and study disclaimer. |

Shared data types are documented in `src/types.ts`: `Action`, `Product`, and `Tile`.

## Reference 01: Allbirds-inspired group

Rendered by `AllbirdsShowcase` in this order:

1. `ReferenceLabel` - study divider and attribution.
2. Announcement bar - delivery message.
3. Editorial header - wordmark, centered navigation, utility icons.
4. `Hero` - full-height nature-led launch campaign.
5. `TileGrid` - three gender/arrival discovery cards.
6. `ProductRail` - everyday favorites.
7. `Hero` (compact) - travel campaign.
8. `TileGrid` - three seasonal editorials.
9. Values split - comfort and materials messaging.
10. `Footer` - newsletter plus help/shop/about groups.

## Reference 02: boAt-inspired group

Rendered by `BoatShowcase` in this order:

1. `ReferenceLabel` - study divider and attribution.
2. Sale strip - time-sensitive campaign message.
3. Search-led header - categories, search, account, and bag icons.
4. `Hero` - high-energy promotional campaign.
5. `Benefits` - cover, billing, delivery, replacement.
6. `ProductRail` - live deals.
7. `ProductRail` with tabs - broad deal categories.
8. `TileGrid` - five product categories.
9. `ProductRail` with tabs - launches and personalisation.
10. `TileGrid` - four lifestyle entry points.
11. `ProductRail` with tabs - best sellers.
12. `Footer` - newsletter plus shop/help/company groups.

## Guardrails

- No Liquid, theme, or reference-site source code was used.
- No copied headlines, product names, descriptions, logos, photography, or brand imagery.
- CSS gradients and geometric shapes stand in for all imagery.
- Product buttons, navigation, search, and forms do not connect to commerce services.
- There is no cart state, checkout, authentication, database, or backend.
