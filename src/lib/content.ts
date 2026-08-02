import { getCollection, type CollectionEntry } from 'astro:content';

export const byOrder = <T extends { data: { order: number; date: Date } }>(a: T, b: T) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf();
export const published = async <K extends 'projects'|'publications'|'people'|'news'|'talks'>(name: K) => (await getCollection(name, ({ data }) => import.meta.env.PROD ? !data.draft : true)).sort(byOrder) as CollectionEntry<K>[];
export const wordsToMinutes = (text: string) => Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 220));
export const pretty = (value: string) => value.replaceAll('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
