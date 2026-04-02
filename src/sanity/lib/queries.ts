import { defineQuery } from "groq";

// ─── News / Posts ────────────────────────────────────────────────────────────

export const allPostsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    publishedAt,
    excerpt,
    externalUrl,
    coverImage
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    publishedAt,
    excerpt,
    body,
    externalUrl,
    coverImage
  }
`);

// ─── Original Projects ───────────────────────────────────────────────────────

export const allProjectsQuery = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    subtitle,
    status,
    description,
    achievements,
    credits,
    externalUrl,
    coverImage,
    featured,
    order
  }
`);

export const featuredProjectsQuery = defineQuery(`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    subtitle,
    status,
    description,
    achievements,
    coverImage
  }
`);

// ─── Work / Portfolio ────────────────────────────────────────────────────────

export const allWorkItemsQuery = defineQuery(`
  *[_type == "workItem"] | order(order asc) {
    _id,
    title,
    client,
    category,
    filters,
    description,
    tags,
    externalUrl,
    coverImage,
    featured,
    order
  }
`);

export const featuredWorkItemsQuery = defineQuery(`
  *[_type == "workItem" && featured == true] | order(order asc) {
    _id,
    title,
    client,
    category,
    description,
    tags,
    coverImage
  }
`);
