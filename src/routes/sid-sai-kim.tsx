import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { sidSaiKim } from 'content-collections'

export const Route = createFileRoute('/sid-sai-kim')({
  head: () => ({
    meta: [
      {
        title: `${sidSaiKim.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: sidSaiKim.summary,
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
          <h1 className={'card-title text-center'}>{sidSaiKim.title}</h1>
          <time
            className={'text-center d-block mb-2 text-muted'}
            about={sidSaiKim.slug}
            dateTime={time}
          >
            Last updated on {time}
          </time>

          <div className={'card-text'}>
            <MDXContent code={sidSaiKim.mdx} />
          </div>
        </div>
      </div>
    </main>
  )
}
