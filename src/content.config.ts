import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase kebab-case');
const common = { title: z.string().min(3), description: z.string().min(10), date: z.coerce.date(), draft: z.boolean().default(false), featured: z.boolean().default(false), order: z.number().int().default(99), topics: z.array(slug).default([]) };
const dateRange = { start: z.string().regex(/^\d{4}-\d{2}$/), end: z.string().regex(/^\d{4}-\d{2}$/).optional() };

const projects = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }), schema: z.object({
  ...common, ...dateRange, status: z.enum(['active', 'completed', 'paused']), cover: z.string().startsWith('/'), people: z.array(slug).default([]), publications: z.array(slug).default([]), relatedProjects: z.array(slug).default([]), technologies: z.array(z.string()).default([]), organizations: z.array(z.string()).default([]), code: z.string().url().optional(), dataset: z.string().url().optional()
}).refine(v => !v.end || v.end >= v.start, { message: 'Project end date must not be earlier than start date', path: ['end'] }) });
const publications = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/publications' }), schema: z.object({
  ...common, type: z.enum(['journal','conference','workshop','preprint','thesis','technical-report','book-chapter']), status: z.enum(['published','accepted','in-press','under-review','preprint']), year: z.number().int().min(1900).max(2100), venue: z.string(), authors: z.array(z.object({ name: z.string(), person: slug.optional(), first: z.boolean().optional(), corresponding: z.boolean().optional(), highlight: z.boolean().optional() })), abstract: z.string(), summary: z.string(), contribution: z.string().optional(), projects: z.array(slug).default([]), doi: z.string().url().optional(), paper: z.string().url().optional(), pdf: z.string().startsWith('/').optional(), code: z.string().url().optional(), dataset: z.string().url().optional(), slides: z.string().optional(), poster: z.string().optional(), video: z.string().url().optional(), bibtex: z.string()
}) });
const people = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/people' }), schema: z.object({
  ...common, role: z.string(), organization: z.string(), image: z.string().startsWith('/'), homepage: z.string().url().optional(), scholar: z.string().url().optional(), orcid: z.string().url().optional()
}) });
const news = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/news' }), schema: z.object({ ...common, category: z.enum(['publication','project','award','talk','general']).default('general'), projects: z.array(slug).default([]) }) });
const talks = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/talks' }), schema: z.object({ ...common, venue: z.string(), location: z.string(), slides: z.string().optional(), video: z.string().url().optional() }) });
export const collections = { projects, publications, people, news, talks };
