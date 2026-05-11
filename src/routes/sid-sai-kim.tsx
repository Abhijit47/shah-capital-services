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
  return (
    <main>
      <div
        className={'card'}
        style={{ maxWidth: '40em', margin: '0 auto', border: 'none' }}
      >
        <div className={'card-body'}>
          <h1 className={'card-title'}>{sidSaiKim.title}</h1>

          <div className={'card-text'}>
            <MDXContent code={sidSaiKim.mdx} />
          </div>
        </div>
      </div>
    </main>
  )
}
