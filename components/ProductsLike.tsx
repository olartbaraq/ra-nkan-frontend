
import { PRODUCTS } from "@/utils/textdata/fakeproducts"
import Image from "next/image"
import { Store } from 'lucide-react';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

// type Product = typeof PRODUCTS[number]

// type ProductProps = {
// 	product: Product
// }

export default async function ProductsLike() {

	// const data : ProductFromApi[] = await getProductsData(); //remember this

	// const router = useRouter();

	// const ProductsPageHandler = () => {

	// 	router.push(`/products/${product}`)
	// }


  return (
    <div className="flex flex-col space-y-10 items-center justify-center md:justify-normal w-full">
      <div className="w-full flex justify-center md:justify-normal mt-10">
				<h3 className="font-bold md:text-3xl text-primary">Products you may like</h3>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-5 w-full items-center">
				{
					PRODUCTS.map((product) => (
						<Link 
							href={`/products/${product.id}`}
							key={product.id} 
							className="flex flex-col border border-gray-100 rounded-md items-center cursor-pointer"
						>

							<Image src={product.image} alt={product.description} height={300} width={300}/>
							<div className="bg-popover flex-shrink p-5 flex flex-col space-y-2 items-start text-balance">
								<h5 className="font-semibold">{product.name} <span className="line-clamp-2 text-sm">{product.description}</span></h5>
								<h3 className="font-bold text-xl">&#x20A6;{product.price}</h3>
								<div className="flex space-x-3 w-40 items-center">
									<Store className={cn("h-3 w-3")}/>
									<h6 className="text-gray-300 text-sm">{product.shop}</h6>
								</div>

								<div className="flex space-x-1 items-center">
									<Star className={cn("text-yellow-500 h-3 w-3")}/>
									<h6 className="text-gray-400">{product.rating}</h6>
									<hr className="w-[1px] h-5 bg-gray-300"/>
									<h3>Sold {parseInt(product.sold) > 500 ? (
										<span>700+</span>
									) : (<span>{product.sold}</span>)}</h3>
								</div>
							</div>
						</Link>
					))
				}
			</div>
    </div>
  )
}