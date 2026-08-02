# Browser-only content editing guide

The everyday workflow needs no terminal, Git installation, or local development environment. Examples in this repository are fictional placeholders.

## Edit, create, upload, and commit

To edit a file, open it on GitHub, click the pencil icon (**Edit this file**), make the change, and use **Preview changes**. Click **Commit changes**, write a short summary, and either commit to `main` for a tiny safe edit or select **Create a new branch and start a pull request**.

To create Markdown, open the intended folder (for example `src/content/projects`), choose **Add file → Create new file**, give it a lowercase kebab-case name ending in `.md`, paste a nearby file as a structural template, replace its values, and commit.

To upload a portrait, cover, logo, CV, paper, poster, or slides, open the intended `public/` folder, choose **Add file → Upload files**, drag in the file, and commit. Use these folders:

- `public/images/profile`, `projects`, `people`, or `organizations`
- `public/files/cv`, `papers`, `posters`, or `slides`

Then reference it with a leading slash, such as `/images/projects/my-project.jpg` or `/files/papers/my-paper.pdf`. Avoid spaces and uppercase letters in filenames.

## Review and merge a Codex pull request

Open **Pull requests**, select the PR, read its summary, and inspect **Files changed**. The **Checks** area should show a green deployment build. Add a comment if anything needs adjustment. When satisfied, choose **Merge pull request**, confirm, and optionally delete the feature branch.

## Inspect errors and recover

Open **Actions → Deploy Astro site to Pages → failed run → build**. Expand the red step. Content errors name the collection/file and field; reference errors name the missing filename ID; link errors show the source page and broken URL. Edit the named file in GitHub and commit the correction.

To undo a merged pull request, open it and use **Revert** (GitHub creates a new PR). For another commit, open the commit from repository history and use GitHub’s revert option when available; otherwise ask Codex: “Create a revert commit for `<commit hash>` without changing later unrelated work.” Do not delete history.

## Add and update content

### Project

Create `src/content/projects/my-project.md`. Copy an existing project, give it a unique filename, update frontmatter, and write only the narrative sections that fit. A featured project needs `featured: true` and a valid `cover`. People/publication/topic references must match filenames or research slugs.

### Publication

Create `src/content/publications/paper-key.md`; update type/status using existing values, authors, venue, abstract, summary, contribution, artifacts, and BibTeX. Author `person` values point to people filenames. Local PDFs belong in `public/files/papers`.

### Collaborator

Create `src/content/people/name.md`, upload a square image to `public/images/people`, and record the collaboration story below the frontmatter. Reverse relationships appear automatically when projects or publication authors use that filename.

### Experience, education, or award

Edit `src/data/experience.yaml`, `education.yaml`, or `awards.yaml`. Duplicate one complete list item, keep indentation identical, replace every placeholder, and use `YYYY-MM` dates for experience. Present positions use `present: true` and omit `end`.

### Talk or news

Create a Markdown file under `src/content/talks` or `src/content/news`. Duplicate an example, replace frontmatter, and write the update/story below `---`. Upload slides first if linking a local PDF.

## Presentation controls

- Reorder or hide homepage sections in `src/data/site.yaml`. Move keys under `homepage.sections`; remove a key to hide it.
- Change `accent` and `accentDark` in `src/data/theme.yaml`. Keep both combinations high contrast in light and dark modes.
- Set `featured: true` to select a project, publication, person, news item, or talk.
- Set `draft: true` to keep an entry out of the deployed production site. Change it to `false` or remove it to publish.

After any commit, open **Actions** and confirm the workflow is green. Content-only changes should never require editing an Astro component.
