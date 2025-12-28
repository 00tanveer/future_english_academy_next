# Future English Academy - Copilot Instructions

## Project Overview
This is a **landing page** for "Future English Academy - Speak Up: Find Your Voice", a 4-week spoken English program in Bangladesh. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, with bilingual support (English + বাংলা).

## Architecture & Tech Stack

### Core Framework
- **Next.js 16** with App Router (`app/` directory)
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** (new syntax with `@import "tailwindcss"` and `@theme inline`)
- **React 19.2.3** with Server Components by default

### Key Dependencies (To Be Added)
- **NextAuth.js v5** for Google Sign-In authentication
- **shadcn/ui** for UI components (Button, Accordion, Sheet for mobile menu)
- **next-intl** for i18n (English/বাংলা language switching)
- **Firebase** for storing registration data
- **Urbanist** (Google Font) for English text
- **Noto Sans Bengali** (Google Font) for Bangla text

### Path Aliases
- Use `@/` to reference root directory (configured in `tsconfig.json`)
- Example: `import { Button } from '@/components/ui/button'`

## Project Structure

```
app/
  layout.tsx          # Root layout with font configuration
  page.tsx            # Main landing page (10 sections)
  globals.css         # Tailwind imports + theme variables
  api/
    auth/[...nextauth]/route.ts  # NextAuth configuration
components/
  ui/                 # shadcn/ui components
  sections/           # Landing page sections (Hero, Problem, Solution, etc.)
  LanguageSwitcher.tsx
  Navbar.tsx
  MobileMenu.tsx
lib/
  i18n.ts            # i18n configuration
  firebase.ts        # Firebase initialization
public/
  images/            # Instructor photo, icons, etc.
messages/
  en.json            # English translations
  bn.json            # Bangla translations
```

## Development Workflow

### Running the Dev Server
```bash
npm run dev          # Start at http://localhost:3000
npm run build        # Production build
npm run lint         # ESLint check
```

### Installing Dependencies
When adding packages, use `npm install` (project uses npm, not yarn/pnpm/bun).

## Brand Voice & Design Principles

### Writing Style
- **Casual, confident, conversational** tone
- **Anti-grammar, anti-traditional education** messaging
- Focus on **speaking practice > theory**
- **Hormozi-style** value propositions (clear, benefit-focused)
- Context: Bengali/Bangladeshi audience

### Design Guidelines
- **Mobile-first** responsive design
- **High contrast** for readability (especially on mobile)
- **Clean, modern, minimal** aesthetic
- Prominent CTAs with **৳8,000 price** visible
- Subtle section dividers/spacing

### Typography
- **Urbanist** font for English text (sans-serif, modern)
- **Noto Sans Bengali** for Bangla text (proper Unicode support)
- Configure in `app/layout.tsx` using `next/font/google`

### Color Palette
- Define CSS variables in `app/globals.css` using Tailwind v4's `@theme inline`
- Use semantic naming: `--color-primary`, `--color-accent`, `--color-background`
- Ensure high contrast ratios (WCAG AA minimum)

## Landing Page Sections (10 Total)

1. **Hero** - Headline, subheadline, CTA button, cohort start date
2. **The Problem** - 3-4 pain points (fear of speaking, grammar obsession, etc.)
3. **The Solution** - How the program works (practice-based approach)
4. **What You Get** - Core offer with emojis/icons
5. **Who This Is For** - Inclusion/exclusion criteria (2 columns)
6. **Meet Your Instructor** - Photo, bio, credentials
7. **Program Structure** - 4-week breakdown (timeline format)
8. **Pricing & CTA** - ৳8,000, payment options, register button
9. **FAQ** - Accordion component (8 questions)
10. **Final CTA** - Last chance to register (urgency)

## Key Features to Implement

### Language Switching
- Toggle button in navbar (EN/BN)
- Uses `next-intl` for translations
- Store preference in localStorage or URL parameter
- Update HTML `lang` attribute dynamically

### Authentication Flow
- Google Sign-In button (NextAuth.js)
- After auth, redirect to registration form page
- Store user email/name in Firebase

### Navigation
- Smooth scroll to sections using anchor links
- Sticky navbar on scroll
- Mobile hamburger menu (shadcn Sheet component)
- Optional: Sticky CTA button on mobile

### Form Validation
- Registration form with Zod schema validation
- Fields: Name, Email, Phone, Batch preference
- Submit to Firebase Firestore

## Code Conventions

### Component Structure
- Use **Server Components by default** (async when fetching data)
- Mark with `'use client'` only when needed (interactivity, hooks, context)
- Prefer composition over prop drilling

### File Naming
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatPrice.ts`)
- Pages: `lowercase.tsx` (Next.js convention)

### Styling
- Use Tailwind utility classes directly in JSX
- Avoid CSS modules or styled-components
- Use `cn()` helper from shadcn for conditional classes

### TypeScript
- Define types for all props and functions
- Use `interface` for object shapes, `type` for unions/intersections
- Avoid `any` - use `unknown` if type is truly uncertain

## Common Pitfalls

### Tailwind CSS v4 Differences
- **Old syntax:** `@tailwind base; @tailwind components; @tailwind utilities;`
- **New syntax:** `@import "tailwindcss";` + `@theme inline { ... }`
- Theme customization now inside `@theme inline` block in CSS

### Next.js App Router
- `page.tsx` exports default function (not named export)
- `layout.tsx` must return `<html>` and `<body>` tags
- Server Components cannot use `useState`, `useEffect`, event handlers

### i18n with next-intl
- Wrap app in `NextIntlClientProvider` (client component)
- Create `[locale]` dynamic route if using URL-based locale
- Use `useTranslations()` hook in client components

## Firebase Configuration
- Store credentials in `.env.local` (add to `.gitignore`)
- Initialize Firebase in `lib/firebase.ts`
- Use Firestore for registration data (collection: `registrations`)

## Deployment Notes
- Target platform: **Netlify** (or Vercel as fallback)
- Environment variables: Firebase config, NextAuth secret
- Build command: `npm run build`
- Output directory: `.next`
