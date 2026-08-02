import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { load } from 'js-yaml';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'myself';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'Hoang-PM-7604119';
const userSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.SITE_BASE ?? (userSite ? '/' : `/${repository}/`);
const site = process.env.SITE_URL ?? `https://${owner}.github.io`;

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [{ name: 'local-yaml', transform(code, id) { if (!/\.ya?ml$/.test(id)) return; return { code: `export default ${JSON.stringify(load(code))}`, map: null }; } }] },
  markdown: { shikiConfig: { theme: 'github-dark' } }
});
