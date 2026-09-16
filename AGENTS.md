# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro academic homepage. Page routes live in `src/pages/`, reusable UI sections live in `src/components/`, and shared layouts live in `src/layouts/`. Profile and navigation data are stored in `src/data/*.yaml`. Long-form content uses Astro content collections under `src/content/`, especially `projects/`, `publications/`, and `news/`. Static files, PDFs, and SVG artwork live in `public/`. Utility checks are in `scripts/`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Astro development server.
- `npm run check`: run Astro and TypeScript diagnostics.
- `npm run validate:content`: verify content references, topics, and frontmatter.
- `npm run build`: build the static site into `dist/`.
- `npm run test:links`: test generated internal links.
- `npm run quality`: run check, content validation, build, and link tests in sequence.

Use Node `>=20`, as declared in `package.json`.

## Coding Style & Naming Conventions

Keep Astro components concise and content-driven. Prefer editing YAML or Markdown before hard-coding copy in components. Use lowercase kebab-case for content slugs and filenames, for example `src/content/projects/bee-monitoring-aiot-system.md`. Keep frontmatter fields aligned with `src/content.config.ts`. CSS is centralized in `src/styles/global.css`; reuse existing variables such as `--accent`, `--surface`, `--line`, and `--radius`.

## Testing Guidelines

There is no unit-test framework in this repository. Treat `npm run quality` as the required pre-commit validation suite. When adding content, run `npm run validate:content` first to catch broken topic, project, publication, or person references. For visual changes, run `npm run build` and inspect the affected pages locally.

## Commit & Pull Request Guidelines

History uses short, imperative commit messages such as `Build static academic research homepage` and `Personalize academic homepage`. Keep commits focused by separating content, styling, and infrastructure when practical. Pull requests should include a clear summary, validation commands run, screenshots for visual changes, and links to relevant pages or issues.

## Security & Configuration Tips

Do not commit local agent folders, temporary review artifacts, or private source files unless intentionally needed. Current local-only examples include `.agents/`, `.codex/`, `.impeccable/`, and personal draft files. Keep public assets under `public/` and avoid placing secrets in YAML, Markdown, or client-rendered Astro code.
