# Aurelia Atelier Travel Landing Page

## Overview

Refactored a legacy static Tailwind project into a 2026-ready luxury travel concierge landing page with editorial typography, restrained motion, and production-grade accessibility.

## Problem Context

The original site was branded for plumbing with legacy animation assets and unused dependencies. The goal was to rebuild as an ultra-luxury bespoke travel agency while preserving the Tailwind CLI workflow and keeping the project static for GitHub Pages.

## Architectural Approach

Kept the build simple: semantic HTML, Tailwind CLI, and a small progressive JavaScript enhancement for the mobile menu. The layout relies on a tokenized design system in `tailwind.config.js` and component abstractions in `input.css` to control typography, spacing, and visual rhythm without class bloat.

## Key Technical Decisions

- **Static + Tailwind CLI**: Chosen to maximize simplicity, portability, and GitHub Pages compatibility while maintaining a modern design system.
- **Design tokens in config**: Added a curated palette, type scale, and spacing scale to keep the visual language consistent.
- **CSS-first Tailwind v4 setup**: `input.css` uses the modern Tailwind import and config directive for predictable builds.
- **Minimal JS**: Only the mobile nav toggle uses JavaScript; everything else is purely semantic HTML and CSS.
- **Performance-first assets**: Hero image uses `fetchpriority="high"`, non-critical images are lazy-loaded, and dimensions are set to prevent layout shift.

## Edge Case Handling

- **Accessibility**: Skip link, proper heading hierarchy, labeled form controls, visible focus rings, and aria attributes for the mobile menu.
- **Reduced motion**: All transitions respect `prefers-reduced-motion` at the CSS level.
- **Responsive layout**: Mobile-first grid and spacing ensure the layout stays readable and balanced on small screens.
- **Form resilience**: Input types, autocomplete, and required fields reduce submission errors.

## Skills Demonstrated

- Information architecture and UX writing for premium brand voice
- Tailwind design system refactoring and component hygiene
- Accessibility-first HTML and progressive enhancement
- Performance-minded asset loading and layout stability
