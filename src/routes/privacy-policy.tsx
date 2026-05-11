import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { privacyPolicy } from 'content-collections'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      {
        title: `${privacyPolicy.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: privacyPolicy.summary,
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
          <h1 className={'card-title'}>{privacyPolicy.title}</h1>

          <div className={'card-text'}>
            <MDXContent code={privacyPolicy.mdx} />
          </div>
        </div>
      </div>
    </main>
  )
}
