

import { MaxWidthWrapper, ImageDetails } from "@/other-components"
import { Products } from "@/typings";




type Props = {
  params: {
    productId: string
  }
}



const Product = async ({params: {productId} }: Props) => {

  const PRODUCTS : Products = await getStaticData({params : {productId}})


  return (
    <MaxWidthWrapper>
      <section>
        <ImageDetails images={PRODUCTS.images}/>
      </section>
    </MaxWidthWrapper>
  )
}

export async function getStaticData({params: {productId} }: Props) {
  const response = await fetch(`http://127.0.0.1:8000/products/get_product_by_id?id=${productId}`, { cache: 'force-cache' })

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();
  //console.log(data.data)
  return data.data
}


export default Product