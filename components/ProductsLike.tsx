
import Image from "next/image"
import { Store } from 'lucide-react';
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Products } from "@/typings";



export async function getProductsData() {
	const response = await fetch("http://127.0.0.1:8000/products/list_products", { next: { revalidate: 60 *60 * 24 } })
	const data = await response.json();
	//console.log(data);
	return data.data

}

export default async function ProductsLike() {

	const PRODUCTS : Products[] = await getProductsData();


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

							{
								product.image_urls.slice(0,1).map((image, index) =>(
									<Image key={index} src={image} alt={product.name} height={300} width={300} className="w-56 h-48"/>
								))
							}
							<div className="bg-popover flex-shrink p-5 h-60 flex flex-col space-y-2 items-start text-balance">
								<h5 className="font-semibold">{product.name} <span className="line-clamp-2 text-xs">{product.description}</span></h5>
								<h3 className="font-bold text-xl">&#x20A6;{product.price}</h3>
								<div className="flex space-x-3 w-40 items-center">
									<Store className={cn("h-3 w-3")}/>
									<h6 className="text-gray-300 text-sm">{product.shop_name}</h6>
								</div>

								<div className="flex space-x-1 items-center">
									<Star className={cn("text-yellow-500 h-3 w-3")}/>
									<h6 className="text-gray-400">4.8</h6>
									<hr className="w-[1px] h-5 bg-gray-300"/>
									<h3>{(product.qty_aval) > 500 ? (
										<span>700+</span>
									) : (<span>{product.qty_aval}</span>)}</h3>
								</div>
							</div>
						</Link>
					))
				}
			</div>
    </div>
  )
}