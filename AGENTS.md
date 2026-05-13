# AI Agent Instructions for this Repository

## What this project is

- A **React + Vite portfolio website** built with **TypeScript** and **Tailwind CSS**.
- The app is a single-page portfolio landing page using static pages under `public/` for demo links.
- Main app logic is in `src/App.tsx`, with metadata in `src/projects.ts`.

## Key files

- `package.json` - install with `npm install`; run dev server with `npm run dev`; build with `npm run build`.
- `vite.config.ts` - Vite config includes `@` alias to repo root and exposes `process.env.GEMINI_API_KEY` from `.env.local` if present.
- `src/main.tsx` - React app entry point.
- `src/App.tsx` - primary UI and interactions: scroll state, mobile nav toggle, intersection observers, form submission simulation.
- `src/projects.ts` - typed project definitions for the portfolio cards.
- `src/index.css` - Tailwind import plus custom CSS definitions for layout and styling.
- `public/` - static assets, demo HTML files, and image folders.

## How to work with this project

- Prefer edits to the React component tree in `src/App.tsx` for UI and content changes.
- Keep asset references consistent with the `public/` folder structure; the app uses root-relative URLs like `/assets/images/...` and `/skills/...`.
- Maintain accessibility and responsive behavior, especially the nav menu ARIA attributes and mobile menu toggle.
- Use TypeScript types from `src/projects.ts` when updating portfolio project data.

## Commands

- `npm install` - install dependencies
- `npm run dev` - start Vite development server
- `npm run build` - create production build
- `npm run preview` - preview production build
- `npm run lint` - run TypeScript type check only (`tsc --noEmit`)

## Notes for agents

- Do not assume a backend API exists; contact form submission is currently simulated inside `App.tsx`.
- There is no ESLint configuration in this repository; use `npm run lint` for type checking.
- The README mentions `.env.local` for `GEMINI_API_KEY`, but the current codebase does not reference it directly in `src/`.
- Keep the repository root as the working directory for commands and file paths.

## Suggested next customization

- Add `.github/copilot-instructions.md` if you want project-specific guidance for GitHub Copilot in addition to `AGENTS.md`.
