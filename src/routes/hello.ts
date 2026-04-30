// routes/hello.ts
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello')({
  server: {
    handlers: {
      GET: async () => {
        return new Response('Hello, World!')
      },
      POST: async ({ request }) => {
        const data = (await request.json()) as { name: string }
        return new Response(`Hello, ${data.name}!`)
      },
    },
  },
})
