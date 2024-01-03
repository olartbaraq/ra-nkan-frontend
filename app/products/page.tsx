"use client";

import { PRODUCTS } from '@/utils/textdata/fakeproducts';
import { useParams } from 'next/navigation'

// type Props = {
//   params : {
//     id: string; name: string; description: string; price: string; image: string; shop: string; rating: string; sold: string
//   }
// }

const Product = () => {

  const {id} = useParams();
  const data = PRODUCTS?.find(p => p.id === id);


  return (
    <div>
      {data?.id} {data?.name} {data?.description}
    </div>
  )
}

export default Product