import Banner from '#/features/banner/Banner'
import ProductsMain from '#/features/products/ProductsMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(shop)/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Products" subTitle="Products" />
      <ProductsMain />
    </main>
  )
}
