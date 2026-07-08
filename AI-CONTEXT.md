# AI Context

This repository represents the frontend MVP for Valora (Carrier Shield Compliance LLC).

## Core Directives for Future AI Work
1. **Preserve Visual Identity**: Maintain the existing dark, modern, high-trust SaaS aesthetic. Use Tailwind utility classes with the established color palette (e.g., `#030d1b`, `#38bdf8`, `#4ade80`).
2. **Scope Constraint**: Do not introduce a database, CMS, or complex backend workflows unless explicitly requested by stakeholders. This is a lean marketing/service site MVP.
3. **Component Reusability**: When adding new sections, prefer re-using established patterns like the gradient borders, `lucide-react` icons, and `motion` animations.
4. **Routing**: `react-router-dom` is used for client-side navigation. All new pages must be registered in `App.tsx` and placed in the `/src/pages` directory.
5. **Form Handling**: Contact forms currently use client-side `mailto:` links to remain stateless.
