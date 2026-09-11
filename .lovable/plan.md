# KODEBLINK Corporate Website

## Goal
Build a simple, premium, trustworthy corporate website for KODEBLINK using the supplied official logo, concise copy, six working pages, responsive navigation, and a frontend-only contact form.

## User-visible work
- Replace the starter screen with a polished KODEBLINK home page.
- Add shared sticky header, mobile menu, footer, logo treatment, buttons, section titles, cards, CTA section, and contact form.
- Add `/about`, `/services`, `/solutions`, `/smart-receipt`, `/portfolio`, and `/contact` with focused content from the brief.
- Use black, dark, white, light, and mint design tokens with generous whitespace and restrained motion.
- Use the exact uploaded logo as the branded asset; do not redraw or alter it.
- Make navigation, form validation, focus states, and success feedback work without backend services.
- Add route-specific page metadata and preserve semantic, accessible markup.

## Technical details
- Follow the existing TanStack Start routing setup and Tailwind v4 CSS-first tokens.
- Keep all visual colors and typography decisions in `src/styles.css`.
- Use data-driven arrays for repeated services, solutions, portfolio items, and process steps.
- Use client-side Zod validation for the contact form; no API or database.
- Validate desktop and mobile rendering, route navigation, form feedback, console output, and horizontal overflow.
