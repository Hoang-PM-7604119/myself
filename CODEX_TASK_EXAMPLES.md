# Ready-to-copy Codex tasks

Replace text in brackets, attach source files when relevant, and paste one prompt into Codex.

## Add a publication

> Add a publication using this metadata: [title, authors, venue, year, type, status, abstract, DOI, links, BibTeX]. Connect it to [project/topic/person IDs], highlight my name, validate references, run quality checks, and open a draft PR.

## Add a research project

> Create a project called [name] from these notes: [notes]. Turn them into a research story covering the question, why it matters, origin, people, my role, methods, experiments, setbacks, results, lessons, and next steps where supported. Do not invent facts. Connect [people/publications/topics], add the attached cover, run quality checks, and open a draft PR.

## Profile and collaborators

> Update my profile with [role, institution, statement, bio, email, links]. Replace the portrait with the attached image, preserve aspect ratio and accessibility, and validate the site.

> Add [name] as a collaborator with [role, organization, links, our story]. Connect them to [projects/publications], use the attached photo, verify reverse relationships, and open a draft PR.

## Experience and assets

> Add this experience entry: [role, organization, type, location, dates, summary, achievements, URL, related work]. Keep the YAML style and validate date/reference fields.

> Replace the public CV with the attached PDF, keep a stable browser-safe filename, update the profile reference if needed, check every CV link, and open a draft PR.

## Appearance and homepage

> Change the site accent to [color]. Choose a complementary accessible dark-mode accent, verify contrast and focus states, run quality checks, and show the files changed.

> Reorder the homepage to [section order] and hide [sections]. Change only YAML unless a genuine defect is found, then build and verify the rendered order.

## Diagnose and improve

> Inspect the latest failed GitHub Actions deployment, identify the first root-cause error, fix it without unrelated changes, run the equivalent checks, and prepare a concise draft PR.

> Build the site and check all internal links and local assets for GitHub Pages subpath safety. Fix broken links, explain external links that cannot be verified, and run `npm run quality`.

> Audit the site at 320, 375, 768, and 1024 pixels. Improve mobile navigation, typography, overflow, tap targets, and image behavior without adding a client framework. Validate reduced motion and open a draft PR.

> Audit semantic structure, keyboard use, visible focus, labels, alternative text, color contrast, dark mode, and reduced motion. Fix confirmed accessibility problems and report what was tested.

## Release

> Review these content changes: [list or commits]. Validate facts against the supplied material, normalize relationships and dates, run the full quality suite, update documentation only if the workflow changed, and create a release-ready PR with a clear summary and test report.
