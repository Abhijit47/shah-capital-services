import Banner from '#/features/banner/Banner'
import ProductCarousel from '#/features/product-details/ProductCarousel'
import ProductDescription from '#/features/product-details/ProductDescription'
import ProductDetailsMain from '#/features/product-details/ProductDetailsMain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(shop)/product-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Banner title="Product Details" subTitle="Product Details" />
      <ProductDetailsMain />
      <ProductDescription />
      <ProductCarousel />
    </main>
  )
}
