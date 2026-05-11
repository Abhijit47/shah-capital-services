import {
  defineCollection,
  defineConfig,
  defineSingleton,
} from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { z } from 'zod'

const disclaimer = defineSingleton({
  name: 'disclaimer',
  filePath: 'content/disclaimer.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
    slug: z.string(),
    lastModified: z.string(),
    draft: z.boolean().default(false),
  }),

  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft')
    }

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })

    return {
      ...document,
      mdx,
    }
  },
})

const commissionDisclosure = defineSingleton({
  name: 'commission-disclosure',
  filePath: 'content/commission-disclosure.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
    slug: z.string(),
    lastModified: z.string(),
    draft: z.boolean().default(false),
  }),

  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft')
    }

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })

    return {
      ...document,
      mdx,
    }
  },
})

const privacyPolicy = defineSingleton({
  name: 'privacy-policy',
  filePath: 'content/privacy-policy.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
    slug: z.string(),
    lastModified: z.string(),
    draft: z.boolean().default(false),
  }),

  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft')
    }

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })

    return {
      ...document,
      mdx,
    }
  },
})

const codeOfConduct = defineSingleton({
  name: 'code-of-conduct',
  filePath: 'content/code-of-conduct.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
    slug: z.string(),
    lastModified: z.string(),
    draft: z.boolean().default(false),
  }),

  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft')
    }

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })

    return {
      ...document,
      mdx,
    }
  },
})

const sidSaiKim = defineSingleton({
  name: 'sid-sai-kim',
  filePath: 'content/sid-sai-kim.mdx',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
    slug: z.string(),
    lastModified: z.string(),
    draft: z.boolean().default(false),
  }),

  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft')
    }

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })

    return {
      ...document,
      mdx,
    }
  },
})

const services = defineCollection({
  name: 'services',
  directory: 'content/services',
  include: ['**/*.md', '**/*.mdx'],
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    image: z.string(),
    draft: z.boolean().default(false),
  }),
})

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: ['**/*.md', '**/*.mdx'],
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    image: z.string(),
    categories: z.array(z.string()),
    author: z.string(),
    createdAt: z.string(),
    draft: z.boolean().default(false),
    // content: z.string(),
  }),
  transform: async (document, context) => {
    if (document.draft) {
      return context.skip('document is a draft')
    }

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    })
    const docs = await context.collection.documents()
    const idx = docs.findIndex(
      (d) => document._meta.filePath === d._meta.filePath,
    )

    const readTime = Math.ceil(mdx.split(' ').length / 150) // Assuming an average reading speed of 200 words per minute

    return {
      ...document,
      mdx,
      prev: idx > 0 ? docs[idx - 1] : null,
      next: idx < docs.length - 1 ? docs[idx + 1] : null,
      readTime,
    }
  },
})

export default defineConfig({
  content: [
    posts,
    services,
    disclaimer,
    commissionDisclosure,
    privacyPolicy,
    codeOfConduct,
    sidSaiKim,
  ],
})
