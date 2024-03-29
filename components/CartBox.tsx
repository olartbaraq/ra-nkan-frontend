"use client";

import React, { useEffect, useState } from "react";
import { Check, Minus, Plus, ShoppingBasketIcon, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { addItem } from "@/reduxfeatures/itemSlice";
import { useAppDispatch } from "@/redux/storehook";
import { Product } from "@/typings";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const CartBox = ({
  id,
  name,
  qty_aval,
  price,
  image,
  description,
  shop_name,
  sub_category_name,
  category_name,
}: Product) => {
  const [count, setCount] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  //const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (count == 0) {
      setDisabled(true);
    }

    if (count === qty_aval) {
      setDisabled(true);
    }
  }, [count, qty_aval]);

  const DecrementCount = (count: number): void => {
    if (count == 0) {
      return;
    }
    setDisabled(false);
    setCount(count - 1);
  };

  const IncrementCount = (count: number): void => {
    if (count === qty_aval) {
      return;
    }
    setDisabled(false);
    setCount(count + 1);
  };

  const newPrice = parseFloat(price) * count;
  const stringNewPrice = newPrice.toString();

  const addtoCartHandler = () => {
    const product = {
      id,
      name,
      count,
      price,
      totalPrice: stringNewPrice,
      image,
      shop_name,
      sub_category_name,
      description,
      category_name,
    };

    dispatch(addItem(product));
    toast({
      variant: "default",
      title: `item added to cart`,
      description: "You can continue shopping or checkout",
      action: <ToastAction altText="OK">OK</ToastAction>,
    });
  };

  return (
    <div className="p-3 flex flex-col w-full space-y-6 self-start items-center">
      {/* In Stock or Not */}
      <div className="flex w-full justify-between items-center border-b border-gray-200">
        <h3 className="text-lg font-bold text-wrap">{name}</h3>
        {qty_aval > 0 ? (
          <div className="flex gap-x-1">
            <h3 className="text-lg font-semibold">In Stock</h3>
            <Check className="w-7 h-7 text-primary" />
          </div>
        ) : (
          <div className="flex gap-x-1">
            <h3 className="text-lg font-semibold">In Stock</h3>
            <X className="w-7 h-7 text-primary" />
          </div>
        )}
      </div>

      {/* Quantity */}
      <div className="flex w-full justify-between items-center">
        <h2 className="text-xl font-semibold">Quantity</h2>

        <div className="border-2 p-3 border-gray-300 rounded-lg flex space-x-10 items-center">
          <h2 className="font-bold">{count}</h2>
          <div className="flex space-x-3 items-center">
            <div
              onClick={() => DecrementCount(count)}
              className="border rounded-xl bg-primary items-center"
            >
              <Minus className="text-black h-7 w-7 " />
            </div>
            <div
              onClick={() => IncrementCount(count)}
              className="border rounded-xl bg-primary items-center"
            >
              <Plus className="text-black h-7 w-7 " />
            </div>
          </div>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex w-full justify-between items-center">
        <h2 className="text-xl font-semibold">Subtotal</h2>
        <h3 className="font-bold text-xl">
          &#x20A6;{(parseFloat(price) * count).toFixed(2)}
        </h3>
      </div>

      {/* Add to cart */}
      {/* button sends data to redux */}
      <Button
        disabled={disabled}
        className={cn(
          buttonVariants({ variant: "default" }),
          "text-2xl h-14 w-full rounded-full",
          disabled ? "bg-gray-300" : null
        )}
        onClick={addtoCartHandler}
      >
        <ShoppingBasketIcon
          className={cn(disabled ? "text-gray-600" : "w-7 h-7 text-secondary")}
        />
        <h2
          className={cn(
            disabled ? "text-gray-600" : "text-secondary font-semibold text-xl"
          )}
        >
          Add to Cart
        </h2>
      </Button>

      {/* Buy Now */}
      {/* button send order to order page  */}
    </div>
  );
};

// <Button disabled={disabled} className='w-full gap-x-2' size={"lg"} variant={"default"} onClick={addtoCartHandler}>
//   <ShoppingBasketIcon className={cn(disabled ? 'text-gray-600' : 'w-7 h-7 text-secondary')}/>
//   <h2 className={cn( disabled ? 'text-gray-600' : 'text-secondary font-semibold text-xl')}>Add to Cart</h2>
// </Button>
export default CartBox;
