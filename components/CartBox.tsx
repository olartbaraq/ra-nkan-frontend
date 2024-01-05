"use client";

import React, {useState} from 'react'
import { Check, Minus, Plus, ShoppingBasketIcon, X } from 'lucide-react'
import { Button } from './ui/button';

type Quantity = {
  name: string
  qty : number
  price: string
}

const CartBox = ({name, qty, price}: Quantity) => {

  const[count, setCount] = useState<number>(0);

  const DecrementCount = (count: number): void => {
    if (count === 0) {
      return;
    }
    setCount(count - 1 );
  }

  const IncrementCount = (count: number): void => {
    if (count === qty) {
      return;
    }
    setCount(count + 1 );
  }

  return (
    <div className='p-3 flex flex-col w-full space-y-6 self-start items-center'>
      {/* In Stock or Not */}
      <div className='flex w-full justify-between items-center border-b border-gray-200'>
        <h3 className='text-lg font-bold text-wrap'>{name}</h3>
        {
          qty > 0 ? (
            <div className='flex gap-x-1'>
              <h3 className='text-lg font-semibold'>In Stock</h3>
              <Check className='w-7 h-7 text-primary'/>
            </div>
          ) : (
            <div className='flex gap-x-1'>
              <h3 className='text-lg font-semibold'>In Stock</h3>
              <X className='w-7 h-7 text-primary'/>
            </div>
          )
        }
      </div>

      {/* Quantity */}
      <div className='flex w-full justify-between items-center'>
        <h2 className='text-xl font-semibold'>Quantity</h2>

        <div className='border-2 p-3 border-gray-300 rounded-lg flex space-x-10 items-center'>
          <h2 className='font-bold'>{count}</h2>
          <div className='flex space-x-3 items-center'>
            <div onClick={() => DecrementCount(count)} className='border rounded-xl bg-primary items-center'>
              <Minus className='text-black h-7 w-7 '/>
            </div>
            <div onClick={() => IncrementCount(count)} className='border rounded-xl bg-primary items-center'>
              <Plus className='text-black h-7 w-7 '/>
            </div>
          </div>
        </div>

      </div>

      {/* Subtotal */}
      <div className='flex w-full justify-between items-center'>
        <h2 className='text-xl font-semibold'>Subtotal</h2>
        <h3 className="font-bold text-xl">&#x20A6;{parseFloat(price) * count}</h3>
      </div>

      {/* Add to cart */}
        {/* button sends data to redux */}
      <button className='flex space-x-2 text-center items-center p-2 w-full justify-center border-orange-600 border rounded-xl'>
        <ShoppingBasketIcon className='w-7 h-7 text-primary'/>
        <h2 className='text-primary font-semibold text-xl'>Add to Cart</h2>
      </button>

      {/* Buy Now */}
      {/* button send order to order page  */}
      <Button className="w-full" size={'lg'} variant={'default'}>Buy Now</Button>
    </div>
  )
}

export default CartBox