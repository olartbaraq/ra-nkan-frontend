import { CarouselItems, MaxWidthWrapper, Categories } from '@/other-components'
import Image from 'next/image'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='flex flex-col space-y-5'>
        <Categories />
        <CarouselItems />
      </div>
    </MaxWidthWrapper>
  )
}
