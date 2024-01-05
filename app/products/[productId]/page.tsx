

import { MaxWidthWrapper, ImageDetails, ProductDescription, CartBox } from "@/other-components"
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
      <main>
        <section className="py-10 border-b border-gray-200 flex space-x-5 items-center w-full">
          <ImageDetails images={PRODUCTS.images}/>
          <ProductDescription {...PRODUCTS}/>
          <CartBox qty={PRODUCTS.qty_aval} name={PRODUCTS.name} price={PRODUCTS.price}/>
        </section>

        <section>

        </section>

      </main>
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