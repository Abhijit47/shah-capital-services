import Banner from '#/features/banner/Banner'
import CartMain from '#/features/cart/CartMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(shop)/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Cart" subTitle="Cart" />
      <CartMain />
    </main>
  )
}
