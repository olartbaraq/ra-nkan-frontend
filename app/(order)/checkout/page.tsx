"use client";
import Image from 'next/image';
import { MaxWidthWrapper } from '@/other-components'
import { itemSelector, removeItem, updateItem } from "@/reduxfeatures/itemSlice";
import { useAppSelector, useAppDispatch } from "@/redux/storehook";
import { Item, UserData } from "@/typings";
import { Button, buttonVariants } from "@/components/ui/button"
import { useEffect, useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type GroupedItems = { [shopName: string]: Item[] };


const Checkout = () => {

  const dispatch = useAppDispatch();
  const items = useAppSelector(itemSelector);
  const [itemCounts, setItemCounts] = useState<{ [itemId: number]: number }>({});

  useEffect(() => { 
    const initialCounts = items.reduce((acc, item) => {
      acc[item.id] = item.count;
      return acc;
    }, {} as { [itemId: number]: number });
    setItemCounts(initialCounts);
  }, [items])


  const updateDecrementCount = (itemId: number): void => {
    const updatedCounts = { ...itemCounts, [itemId]: Math.max(itemCounts[itemId] - 1, 0)};
    setItemCounts(updatedCounts);
    updateItemQuantity(itemId, updatedCounts[itemId]);
  }

  const updateIncrementCount = (itemId: number): void => {
    const updatedCounts = { ...itemCounts, [itemId]: Math.max(itemCounts[itemId] + 1, 0)};
    setItemCounts(updatedCounts);
    updateItemQuantity(itemId, updatedCounts[itemId]);
  }

  const removeItemFromBasket = (item:Item) => {
    dispatch(removeItem(item));
  }

  const updateItemQuantity = (itemId: number, quantity: number): void => {
    const item = items.find((i) => i.id === itemId);
    if (item) {
      const basePrice = parseFloat(item.price);
      //console.log(basePrice)
      const newPrice = basePrice * quantity;
      const stringNewPrice = newPrice.toString();
      const product = {
        id: item.id,
        name: item.name,
        count: quantity,
        price: item.price,
        totalPrice: stringNewPrice,
        image: item.image,
        shop_name: item.shop_name,
        sub_category_name: item.sub_category_name,
        description: item.description,
        category_name: item.category_name,
      };
      dispatch(updateItem(product));
    }
  };

  const groupedItems: GroupedItems = items.reduce((acc, item) => {
    const shopName = item.shop_name;
  
    if (!acc[shopName]) {
      acc[shopName] = [];
    }
  
    acc[shopName].push(item);
    return acc;
  }, {} as GroupedItems);

  const renderItem = (item:Item) => (
    <div key={item.id}>
      {/* Render individual item details */}
      <div className='flex flex-col space-y-3 items-center w-full'>
        <div className='flex justify-between w-full items-center border border-gray-300 rounded-lg p-2'>
          <div className='w-28 justify-start items-center'>
            <Image src={item.image} alt={item.name} height={40} width={40}/>
          </div>

          <div className='items-center w-full'>
            <div className='flex flex-col space-y-1 items-start w-full'>
              <h2 className='text-lg line-clamp-1 leading-relaxed font-semibold'>{item.name}</h2>
              <p className='text-gray-500 text-lg'>
              {
                item.count > 1 ? (<h2 className="text-gray-300">{item.count} items</h2>) : (<h2 className="text-gray-300">{item.count} item</h2>)
              }
              </p>
              {/* Item counter */}
              <div className='border-2 p-1 border-gray-300 rounded-lg flex space-x-5 items-center'>
                <h2 className='font-bold'>{itemCounts[item.id]}</h2>
                <div className='flex space-x-3 items-center'>
                  <div onClick={() => updateDecrementCount(item.id)} className='border rounded-xl bg-primary items-center'>
                    <Minus className='text-black h-4 w-4 '/>
                  </div>
                  <div onClick={() => updateIncrementCount(item.id)} className='border rounded-xl bg-primary items-center'>
                    <Plus className='text-black h-4 w-4 '/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div  className='w-40 items-center justify-normal space-y-2'>
            <h2 className='font-bold text-2xl'>&#x20A6;{parseFloat(item.totalPrice).toFixed(2)}</h2>
            <div className="flex flex-row items-end self-end">
              <Button variant={"outline"} size={"sm"} onClick={() => removeItemFromBasket(item)}>
                <Trash2 className="w-5 h-5 text-primary"/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const subtotal = items.reduce((acc, item) => acc + parseFloat(item.price) * item.count, 0);
  const tax = items.reduce((acc, item) => acc + (parseFloat(item.price) * item.count * 0.03), 0);
  const shipping = items.reduce((acc, item) => acc + (parseFloat(item.price) * item.count * 0.1), 0);
  const overallTotal = subtotal + tax + shipping


  return (
    <MaxWidthWrapper>
      <div className='flex w-full justify-between items-start'>
        <div className='w-full flex py-5 flex-col space-y-2'>
          <h3>Cart({items.length})</h3>

          {/* Render items based on shop name */}
          <div>
          {Object.keys(groupedItems).map((shopName) => (
            <div key={shopName} className='font-bold text-sm flex flex-col space-y-2 mb-10 px-5'>
              <h2>{shopName}</h2>
              {groupedItems[shopName].map(renderItem)}
            </div>
          ))}
          </div>
        </div>

        <div className='rounded-lg w-full flex flex-col p-5 space-y-5 self-start'>
          <h2 className='font-bold text-2xl '>Shopping summary</h2>
          <div className='flex flex-col space-y-2 w-full items-center justify-center'>
            <div className='flex justify-between w-full items-center '>
              <h3 className='text-gray-500 text-lg'>Subtotal</h3>
              <p className='font-semibold text-2xl'>&#x20A6;{subtotal.toFixed(2)}</p>
            </div>
            <div className='flex justify-between w-full items-center '>
              <h3 className='text-gray-500 text-lg'>Tax</h3>
              <p className='font-semibold text-2xl'>&#x20A6;{tax.toFixed(2)}</p>
            </div>
            <div className='flex justify-between w-full items-center '>
              <h3 className='text-gray-500 text-lg'>Shipping</h3>
              <p className='font-semibold text-2xl'>&#x20A6;{shipping.toFixed(2)}</p>
            </div>
          </div>
          <hr className='w-full h-[1px] border border-gray-500'/>
          <div className='flex justify-between w-full items-center '>
            <h3 className='text-gray-500 text-lg'>Total</h3>
            <p className='font-semibold text-2xl'>&#x20A6;{overallTotal.toFixed(2)}</p>
          </div>
          <Link href={'/information'}>
            <Button className={cn(buttonVariants({variant: 'default'}), 
              "text-2xl h-14 w-full rounded-full",)}>Buy Now</Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Checkout