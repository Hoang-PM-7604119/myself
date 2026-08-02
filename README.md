# Research Journey — Astro academic homepage

A production-oriented, static academic homepage that treats research as a journey through questions, experiments, setbacks, collaborators, and outcomes. The included profile and accomplishments are **clearly fictional placeholder content** for Dr. Maya Chen.

The site is built with Astro, TypeScript, Content Collections, Markdown/MDX, YAML, Zod, and a small local CSS/JavaScript layer. It has no runtime backend, database, analytics, cookies, hosted CMS, or form service. GitHub Actions turns the repository into static HTML, CSS, JavaScript, images, XML, and documents, then publishes it to GitHub Pages.

## Browser-only workflow

Normal maintenance requires only GitHub in a browser:

1. Open a content file and click the pencil icon.
2. Edit YAML or Markdown and choose **Commit changes**.
3. Prefer a new branch and pull request for substantial edits.
4. GitHub Actions validates content, builds every route, checks internal links, and deploys after changes reach `main`.

See [CONTENT_EDITING_GUIDE.md](CONTENT_EDITING_GUIDE.md) for click-by-click instructions and [CODEX_TASK_EXAMPLES.md](CODEX_TASK_EXAMPLES.md) for ready-to-copy requests.

## Where content lives

| What | Edit |
|---|---|
| Name, role, bio, email, portrait, CV | `src/data/profile.yaml` |
| Academic profiles | `src/data/social.yaml` |
| Homepage order and navigation | `src/data/site.yaml` |
| Accent and motion tokens | `src/data/theme.yaml` |
| Research themes | `src/data/research.yaml` |
| Experience, education, awards | `src/data/*.yaml` |
| Project stories | `src/content/projects/*.md` |
| Publications, people, news, talks | `src/content/<collection>/*.md` |
| Images and PDFs | `public/images/`, `public/files/` |

All dynamic pages are generated at build time. Relationships use filename IDs: `people: [elena-varga]` points to `src/content/people/elena-varga.md`. Person pages automatically show projects and publications that reference them.

Homepage sections are rendered in the exact order under `homepage.sections`. Delete a key to hide that section. Supported keys are `hero`, `research`, `featured_projects`, `publications`, `timeline`, `collaborators`, `news`, and `contact`.

## Quality and architecture

The content schema checks dates, URLs, enums, image paths, required fields, and date ordering. A separate validator reports missing cross-content references and topics. The link checker inspects the generated static output. Drafts remain available during development and are excluded in production.

Optional local development (not required for site ownership): install Node 20+ and run `npm ci`, then `npm run dev`. The complete check is `npm run quality`.

Repository-aware deployment configuration derives the owner and repo in GitHub Actions. A user site named `USERNAME.github.io` uses `/`; this repository, `Hoang-PM-7604119/myself`, uses `/myself/`. Author internal links using root-like paths such as `/projects/`; templates add the deployment base automatically.

## GitHub Pages setup (browser only)

1. Open this repository on GitHub and choose **Settings**.
2. In the left sidebar, choose **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the repository’s **Actions** tab.
5. Choose **Deploy Astro site to Pages**, then **Run workflow** if a push to `main` has not already started it.
6. When the deploy job is green, open its `github-pages` environment link. For this repository the expected URL is `https://hoang-pm-7604119.github.io/myself/`.
7. If deployment reports a permission failure, return to **Settings → Actions → General → Workflow permissions** and confirm Actions are allowed. Also confirm **Settings → Pages → Source** is GitHub Actions and that the `github-pages` environment does not have an unmet protection rule. Organization policies may require an owner to allow Pages or the official `actions/deploy-pages` action.
