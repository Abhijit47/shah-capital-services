import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { commissionDisclosure } from 'content-collections'

export const Route = createFileRoute('/commission-disclosure')({
  head: () => ({
    meta: [
      {
        title: `${commissionDisclosure.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: commissionDisclosure.summary,
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
          <h1 className={'card-title'}>{commissionDisclosure.title}</h1>

          <div className={'card-text'}>
            <MDXContent code={commissionDisclosure.mdx} />
          </div>
        </div>
      </div>
    </main>
  )
}
