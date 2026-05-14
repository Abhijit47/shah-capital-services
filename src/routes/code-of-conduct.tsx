import { MDXContent } from '@content-collections/mdx/react'
import { createFileRoute } from '@tanstack/react-router'
import { codeOfConduct } from 'content-collections'

export const Route = createFileRoute('/code-of-conduct')({
  head: () => ({
    meta: [
      {
        title: `${codeOfConduct.title} | Shah Capital Services`,
      },
      {
        name: 'description',
        content: codeOfConduct.summary,
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
          <h1 className={'card-title text-center'}>{codeOfConduct.title}</h1>
          <time
            className={'text-center d-block mb-2 text-muted'}
            about={codeOfConduct.slug}
            dateTime={time}
          >
            Last updated on {time}
          </time>

          <div className={'card-text'}>
            <MDXContent code={codeOfConduct.mdx} />
          </div>
        </div>
      </div>
    </main>
  )
}
