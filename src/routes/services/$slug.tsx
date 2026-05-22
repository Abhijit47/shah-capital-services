import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { allServices } from 'content-collections'

const isDev = import.meta.env.DEV

const baseUrl = isDev ? 'http://localhost:3000' : import.meta.env.VITE_BASE_URL

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = allServices.find((s) => s.slug === params.slug)
    if (!service) {
      throw notFound({ throw: true })
    }
    return service
  },
  head: ({ loaderData, params }) => {
    return {
      meta: [
        {
          title: `${loaderData?.title ?? 'Services'} | Shah Capital Services`,
        },
        {
          name: 'description',
          content:
            loaderData?.summary ??
            'Shah Capital Services offers a range of financial services to help you achieve your investment goals.',
        },
        // Open Graph
        { property: 'og:title', content: loaderData?.title },
        { property: 'og:description', content: loaderData?.summary },
        { property: 'og:image', content: loaderData?.image },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `${baseUrl}/services/${params.slug}` },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: loaderData?.title },
        { name: 'twitter:description', content: loaderData?.summary },
        { name: 'twitter:image', content: loaderData?.image },
        { name: 'twitter:url', content: `${baseUrl}/services/${params.slug}` },
        {
          rel: 'canonical',
          href: `${baseUrl}/services/${params.slug}`,
        },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: loaderData?.title,
            description: loaderData?.summary,
            image: loaderData?.image,
            author: {
              '@type': 'Person',
              name: 'Shah Capital Services',
            },
            datePublished: `${JSON.parse(JSON.stringify(loaderData?.lastModified))}`,
          }),
        },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const service = Route.useLoaderData()
  return (
    <main style={{ maxWidth: '990px', margin: 'auto' }}>
      <div>
        <img
          src={service.image}
          alt={service.title}
          width={'100%'}
          height={'100%'}
        />
      </div>

      <article className={'px-4 pb-5'}>
        <div id="blog-markdown" className={'mt-3'}>
          <MDXContent code={service.mdx} />
        </div>
      </article>

      <div className={'pb-5 d-flex align-items-center justify-content-center'}>
        <Link to="/contact" className={'thm-btn'}>
          Get In Touch
        </Link>
      </div>
    </main>
  )
}
