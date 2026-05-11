import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { disclaimer } from 'content-collections'

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
  return (
    <main>
      <div
        className={'card'}
        style={{ maxWidth: '40em', margin: '0 auto', border: 'none' }}
      >
        <div className={'card-body'}>
          <h1 className={'card-title'}>{disclaimer.title}</h1>

          <div className={'card-text'}>
            <MDXContent code={disclaimer.mdx} />
          </div>
        </div>
      </div>
    </main>
  )
}
