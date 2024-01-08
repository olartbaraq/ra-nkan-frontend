"use client";

import Image from "next/image";
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ChevronDown, BellRing, ShoppingCart } from "../utils/icons"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  }  from "@/components/ui/hover-card"
	import {
		Sheet,
		SheetClose,
		SheetContent,
		SheetDescription,
		SheetFooter,
		SheetHeader,
		SheetTitle,
		SheetTrigger,
	} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { MY_NKANS } from "@/utils/textdata/my_nkan"
import { useEffect, useState } from "react";
import { userSelector, resetUser } from '@/reduxfeatures/userSlice';
import { clearItems, itemSelector, removeItem } from "@/reduxfeatures/itemSlice";
import { useAppSelector, useAppDispatch } from "@/redux/storehook";
import { Item, UserData } from "@/typings";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";



const Advert = () => {

    const dispatch = useAppDispatch();
    const LoggedInUser = useAppSelector(userSelector);
    const items = useAppSelector(itemSelector);
    const [user, setUser] = useState<UserData>();

    //const[count, setCount] = useState<number>(1);


  // const DecrementCount = (count: number): void => {
  //   if (count === 0) {
  //     return;
  //   }
  //   setCount(count - 1 );
  // }

  // const IncrementCount = (count: number): void => {
  //   setCount(count + 1 );
  // }


    useEffect(() => {
      setUser(LoggedInUser);
      //console.log(LoggedInUser);
    }, [LoggedInUser])


    const LogoutHandler = () => {
      dispatch(resetUser());
			dispatch(clearItems());
      //console.log(user);
    }

    const removeItemFromBasket = (item:Item) => {
      dispatch(removeItem(item));
    }



  return (
    <div className="border-b border-gray-300">
        <MaxWidthWrapper className="py-2">
            <div className="flex flex-row justify-between h-8 w-full">
                <div className="flex flex-row justify-normal space-x-3 items-center w-fit">
                    {
                        user?.isLoggedIn === "true" ? (
                            <div className="flex flex-row space-x-3 items-center">Hi
                                <p className="text-orange-400 text-sm underline ml-1">{user?.firstname}</p>
                                <button className="text-orange-400 text-sm underline" onClick={LogoutHandler}>Logout</button>
                            </div>
                        ) : (
                            <div>Hi 
                                <span className="text-orange-400 text-sm underline mx-2">
                                    <Link href={'/login'}>Sign In</Link>
                                </span> 
                                or 
                                <span className="text-orange-400 text-sm underline mx-2">
                                    <Link href={'/register'}>Register</Link>
                                </span>
                            </div>
                        )
                    }
                    <h4 className="hidden md:block text-sm no-underline hover:underline"><Link href={'/login'}>Daily Deals</Link></h4>

                    <h4 className="hidden md:block text-sm no-underline hover:underline"><Link href={'/login'}>Help & Contact</Link></h4>
                </div>

                <div className="flex flex-row justify-center items-center space-x-3 min-w-max">
                {
                    user?.isLoggedIn === "true" ? (
                        <h4 className=" text-sm hidden md:block no-underline hover:underline">
                            <Link href={'/shipto'}>Ship to</Link>
                        </h4>
                    ) : (
                        <h4 className=" text-sm hidden md:block no-underline hover:underline">
                            <Link href={'/login'}>Ship to</Link>
                        </h4>
                    )
                }

                {
                    user?.isLoggedIn === "true" ? (
                        <h4 className="hidden md:block text-sm no-underline hover:underline">
                            <Link href={'/sell'}>Sell</Link>
                        </h4>
                    ) : (
                        <h4 className="hidden md:block text-sm no-underline hover:underline">
                            <Link href={'/login'}>Sell</Link>
                        </h4>
                    )
                }
                    
                    <h4 className="text-sm no-underline hover:underline">
                        {/* <Link href={'/login'}> */}
                            <div className="hidden md:flex flex-row items-center justify-start">
                                <HoverCard>
                                    <HoverCardTrigger>
                                        Watchlist
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        The React Framework – created and maintained by @vercel.
                                    </HoverCardContent>
                                </HoverCard>
                                <ChevronDown className={cn("h-6 w-6 transition-all text-muted-foreground"
                                )}/>
                            </div>
                        {/* </Link> */}
                    </h4>

                    <h4 className="text-sm no-underline hover:underline">
                        {/* <Link href={'/login'}> */}
                            <div className="flex flex-row items-center justify-start">
                                <HoverCard>
                                    <HoverCardTrigger>
                                        My nKan's
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-[160px]">
                                        {
                                            MY_NKANS.map(my_nkan => (
                                                <div key={my_nkan.label}
                                                    
                                                >
                                                    <div className="space-y-3 no-underline hover:underline">
                                                        {
                                                            user?.isLoggedIn === "true" ? (
                                                                <Link href={my_nkan.href}>{my_nkan.label}</Link>

                                                            ) : (
                                                                <Link href={'/login'}>{my_nkan.label}</Link>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </HoverCardContent>
                                </HoverCard>
                                <ChevronDown className={cn("h-6 w-6 transition-all text-muted-foreground")}/>
                            </div>
                        {/* </Link> */}
                    </h4>

                    <BellRing />

                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="relative flex items-center cursor-pointer">
                                <span className="absolute flex bottom-4 right-0 md:left-2 h-5 w-5 bg-black justify-center items-center rounded-full text-white">
                                    <p className="self-center justify-center text-sm mb-2">{items.length}</p>
                                </span>
                            <ShoppingCart />
                            </div>
                        </SheetTrigger>
                        <SheetContent className="overflow-y-scroll">
                            <SheetHeader className="border-gray-300 border-b p-5">
                                <SheetTitle>Cart({items.length})</SheetTitle>
                                <SheetDescription>
                                    See All items in the cart, click checkout to order
                                </SheetDescription>
                            </SheetHeader>
                            {items.length > 0 ? (
                                <>
                                    <div className="flex flex-col space-y-2 items-center w-full mb-5">
                                            {
                                                items.map(item => (
                                                    <div key={item.id} className="border-b border-gray-300 flex flex-row w-full items-center justify-between">
                                                        <div className="flex flex-row items-start space-x-5 py-3">
                                                          <Button variant={"outline"} size={"sm"} onClick={() => removeItemFromBasket(item)}>
                                                            <Trash2 className="w-5 h-5 text-primary"/>
                                                          </Button>
                                                          <Image src={item.image} alt={item.sub_category_name} height={30} width={30} priority/>
                                                          <div className="flex flex-col items-start justify-center space-y-1 w-full">
                                                            <h2 className="line-clamp-1 leading-relaxed ">{item.description}</h2>
                                                            {
                                                            item.count > 1 ? (<h2 className="text-gray-300">{item.count} items</h2>) : (<h2 className="text-gray-300">{item.count} item</h2>)}
                                                          </div>
                                                        </div>

                                                        <h2 className="font-bold text-xl">&#x20A6;{parseFloat(item.totalPrice).toFixed(2)}</h2>
                                                    </div>
                                                ))
                                            }
                                    </div>
                                    <SheetFooter className="w-full">
                                        <SheetClose asChild>
																					<Link className="w-full self-center " href={'/checkout'}>
																						<Button variant="default" type="submit" className="w-full text-lg h-10 justify-center items-center">Continue</Button>
																					</Link>
                                        </SheetClose>
                                    </SheetFooter>
                                </>
                            ) : (
                                <div className="self-center space-y-4 items-center w-full flex flex-col">
                                  <Image src={'/emptycart.png'} alt="empty cart" height={200} width={200} />
                                  <h3 className="text-primary text-2xl font-bold">Cart is Empty...</h3>
                                </div>
                            )}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </MaxWidthWrapper>
    </div>
    
    
  )
}

export default Advert