import { CarouselItems, MaxWidthWrapper, Categories,
  ExploreCategories, ProductsLike} from '@/other-components'

export default function Home() {

  return (
    <MaxWidthWrapper>
      <div className='flex flex-col space-y-10 mb-24'>
        <Categories />
        <CarouselItems />
        <ExploreCategories />
        <ProductsLike />
      </div>
    </MaxWidthWrapper>
  )
}
