import { MaxWidthWrapper } from "@/other-components"
import { POPULAR_CATEGORIES } from "@/utils/textdata/popularcategory"
import Image from "next/image"
import { useState } from "react"




type Props = {
  params: {
    productId: string
  }
}

type Category = typeof POPULAR_CATEGORIES[number]

type ImageProps = {
  images: any
}


const Product = async ({params: {productId} }: Props) => {

  // const products = await getStaticData({params : {productId}})

  const [BigImage, setBigImage] = useState(0)

  return (
    <MaxWidthWrapper>
      <section>
        <div className="py-10 border-b border-gray-200 flex space-x-10 items-center w-full">
          <div className="w-full flex flex-col items-start space-y-3">
            {/* Images */}
            <div>
              {/* Bigger image section */}
              <Image src={'/sneakers.jpg'} alt="product_name" width={100} height={100} className="h-60 w-60 self-center shadow-md bg-gradient-to-b from-slate-200 to-slate-500 border rounded-md"/>
            </div>

            <div className="flex space-x-0 items-center">
              {/* grid of smaller images */}
              {
                POPULAR_CATEGORIES.map((product : Category) => (
                  <ul key={product.title}>
                    <Image src={product.image} alt="each_image"  width={50} height={50} className="h-16 w-16 self-center border rounded-md"/>
                  </ul>
                ))
              }
            </div>
          </div>

          <div className="flex-grow w-full">
            {/* Product information */}

          </div>

          <div className="w-full">
            {/* Add ti=o Cart box */}

          </div>

        </div>
      </section>
    </MaxWidthWrapper>
  )
}

// export async function getStaticData({params: {productId} }: Props) {
//   const response = await fetch(`https://fakestoreapi.com/products/`, { cache: 'force-cache' })

//   if (!response.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   const data = response.json();
//   //console.log(data)
//   return data
// }


export default Product