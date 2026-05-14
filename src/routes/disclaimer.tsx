import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { disclaimer } from 'content-collections'
// import { z } from 'zod'

export const Route = createFileRoute('/disclaimer')({
  head: () => ({
    meta: [
      {
        title: `${disclaimer.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: disclaimer.summary,
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const time = new Date().toISOString().split('T')[0]

  return (
    <main className={'my-5'}>
      <div
        className={'card'}
        style={{ maxWidth: '40em', margin: '0 auto', border: 'none' }}
      >
        <div className={'card-body'}>
          <h1 className={'card-title text-center'}>{disclaimer.title}</h1>
          <time
            className={'text-center d-block mb-2 text-muted'}
            about={disclaimer.slug}
            dateTime={time}
          >
            Last updated on {time}
          </time>

          <div className={'card-text'}>
            <MDXContent code={disclaimer.mdx} />
          </div>
        </div>
      </div>
    </main>
  )
}
