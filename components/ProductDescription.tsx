import React from 'react'
import { Products } from "@/typings";
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';



const ProductDescription = (ProductsData: Products) => {


  return (
    <div className='w-full flex flex-col space-y-5 items-start self-start'>
      <h2 className='font-bold text-2xl leading-relaxed'>{ProductsData.name}</h2>

      <div className="flex space-x-2 items-center">
        <Star className={cn("text-yellow-500 h-5 w-5")}/>
        <h6 className="text-lg">4.8</h6>
        <h6 className="text-gray-400">1.2k reviews</h6>
        <hr className="w-[3px] h-1 bg-gray-300 gap-x-5"/>
        <h3>{(ProductsData.qty_aval) > 500 ? (
          <span>700+</span>
        ) : (<span>{ProductsData.qty_aval}</span>)}</h3>
      </div>

      <h3 className="font-bold text-xl">&#x20A6;{ProductsData.price}</h3>

      <div className='border-t-2 border-gray-200 flex flex-col space-y-5 py-5 self-start items-start'>
        <h3 className='font-semibold text-xl'>Details</h3>

        <div className='flex flex-col space-y-2 self-start items-start'>
          <div className='flex space-x-16 items-center'>
            <p className='text-lg text-gray-300 self-start'>Condition</p>
            <h3 className='text-xl font-bold self-end'>New</h3>
          </div>
          <div className='flex space-x-10 items-center'>
            <p className='text-lg text-gray-300'>Unit Weight</p>
            <h3 className='text-xl font-bold self-end'>10 g</h3>
          </div>
          <div className='flex space-x-16 items-center'>
            <p className='text-lg text-gray-300'>Category</p>
            <h3 className='text-xl font-bold self-end'>{ProductsData.sub_category_name}</h3>
          </div>
          <div className='flex space-x-12 items-center'>
            <p className='text-lg text-gray-300'>StoreFront</p>
            <h3 className='text-xl font-bold'>{ProductsData.shop_name}</h3>
          </div>
        </div>

        <div className='w-fit leading-relaxed text-wrap'>
          <h4 className=''>{ProductsData.description}</h4>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription