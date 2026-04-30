import Banner from '#/features/banner/Banner'
import WishlistMain from '#/features/wishlist/WishlistMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(shop)/wishlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Wishlist" subTitle="Wishlist" />
      <WishlistMain />
    </main>
  )
}
