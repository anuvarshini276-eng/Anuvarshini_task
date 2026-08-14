# Shopify Storefront Component Showcase

A single-page React component study analyzing reusable storefront UI patterns from two Shopify references and rebuilding them as original, prop-driven React components.

## References

- **Allbirds (International):** https://www.allbirds.com/
- **boAt (Indian):** https://www.boat-lifestyle.com/

## Objective

This project is an internship submission demonstrating the ability to research a live storefront's publicly visible desktop UI structure, identify its recurring design patterns - including announcement bars, navigation headers, heroes, category tiles, product rails, editorial sections, service benefits, and footers - and translate those patterns into a clean, reusable React component system.

No Shopify Liquid/theme code, proprietary assets, logos, product photography, or backend functionality was copied or reused.

This is a frontend component showcase only. There is no functional cart, checkout, payment processing, authentication, database, or backend of any kind.

## Technology

- React 19
- Vite
- TypeScript and TSX
- Custom CSS using design tokens, Flexbox, Grid, gradients, and media queries
- Lucide React for interface icons
- Vitest and Testing Library
- GitHub Actions and GitHub Pages

No CSS framework is used.

## Architecture

```text
src/
  components/
    ui.tsx                 Shared, prop-driven storefront primitives
    AllbirdsShowcase.tsx   Allbirds-inspired section composition
    BoatShowcase.tsx       boAt-inspired section composition
  App.tsx                  Single-page showcase and reference dividers
  App.test.tsx             Component render verification
  main.tsx                 React application entry point
  styles.css               Global tokens, layouts, components, and responsive rules
  types.ts                 Shared Action, Product, and Tile data types
docs/
  component-inventory.md   Components, props, rendered order, and guardrails
.github/
  workflows/
    deploy.yml             Automated GitHub Pages deployment
```

Components only exist where a genuine, observed storefront pattern justified them. Both reference groups are rendered on the same page in their original high-level section order, separated by clear reference headers.

## Reusable Components

The shared component system includes:

- `Hero` - configurable campaign hero with eyebrow copy, body text, artwork tone, and calls to action
- `ProductRail` - reusable product collection with cards, badges, prices, optional comparison prices, and tabs
- `TileGrid` - responsive category or editorial tile collection
- `Benefits` - compact service and purchase-assurance strip
- `Footer` - newsletter form, navigation groups, and project disclaimer

All component props are typed and documented in the source and component inventory.

## Placeholder Policy

No real Allbirds or boAt product photography, logos, or downloaded brand assets are used anywhere in this project.

All visual artwork is generated with CSS gradients, geometric shapes, and color fields. Product names, campaign headlines, descriptions, offers, and editorial copy are original or rewritten for this study. The application makes no external image requests.

## Storefront Guardrails

- No copied Liquid, Shopify theme, or storefront source code
- No brand photography, logos, or proprietary product imagery
- No functional cart or checkout
- No payment or authentication flows
- No database, API, or backend
- Navigation, search, forms, tabs, and product actions are display-only

## Run Locally

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite in your browser.

## Test

```bash
pnpm test
```

## Build

```bash
pnpm build
```

The optimized production output is generated in `dist/`.

## Deployment

The project is deployed through GitHub Pages using the workflow in `.github/workflows/deploy.yml`.

- Pushes to `main` trigger a new deployment automatically.
- Vite derives the repository base path from GitHub's `GITHUB_REPOSITORY` environment variable.
- The workflow installs dependencies, runs the production build, uploads `dist/`, and publishes the Pages artifact.

**Live site:** https://anuvarshini276-eng.github.io/Anuvarshini_task/

## Documentation

- [`docs/component-inventory.md`](docs/component-inventory.md) - every reusable component, its typed props, purpose, reference group, rendered position, and implementation guardrails
- [`src/types.ts`](src/types.ts) - shared component data contracts
- [`src/components/ui.tsx`](src/components/ui.tsx) - documented shared component implementations

## Verification

Before deployment, the project was checked with:

- Manual desktop inspection of both reference storefronts
- Responsive component styling
- Component render testing with Vitest and Testing Library
- TypeScript production compilation
- Vite production build
- Live GitHub Pages visual verification

## Disclaimer

This project is an independent educational UI study. Allbirds and boAt are referenced only as sources of publicly visible layout and interaction-pattern research. This repository is not affiliated with, endorsed by, or connected to either company.

