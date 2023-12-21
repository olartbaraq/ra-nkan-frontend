import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ChevronDown, BellRing, ShoppingCart } from "../utils/icons"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  }  from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

import { MY_NKANS } from "@/utils/textdata/my_nkan"



const Advert = () => {
  return (
    <MaxWidthWrapper className="border-b border-gray-300">
        <div className="flex flex-row justify-between h-6 min-w-full">
            <div className="flex flex-row justify-between items-center w-[400px]">
                <div>
                    <h4>Hi 
                        <span className="text-orange-400 underline mx-2">
                            <Link href={'/login'}>Sign In</Link>
                        </span> 
                        or 
                        <span className="text-orange-400 underline mx-2">
                            <Link href={'/login'}>Register</Link>
                        </span>
                    </h4>
                </div>
                <h4 className="no-underline hover:underline"><Link href={'/login'}>Daily Deals</Link></h4>

                <h4 className="no-underline hover:underline"><Link href={'/login'}>Help & Contact</Link></h4>
            </div>

            <div className="flex flex-row justify-evenly items-center w-[500px]">
                
                <h4 className="no-underline hover:underline">
                    <Link href={'/login'}>Ship to</Link>
                </h4>

                <h4 className="no-underline hover:underline">
                    <Link href={'/login'}>Sell</Link>
                </h4>
                
                <h4 className="no-underline hover:underline">
                    <Link href={'/login'}>
                        <div className="flex flex-row items-center justify-start">
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
                    </Link>
                </h4>

                <h4 className="no-underline hover:underline">
                    <Link href={'/login'}>
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
                                                    <Link href={my_nkan.href}>{my_nkan.label}</Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </HoverCardContent>
                            </HoverCard>
                            <ChevronDown className={cn("h-6 w-6 transition-all text-muted-foreground"
                            )}/>
                        </div>
                    </Link>
                </h4>

                <BellRing />

                <ShoppingCart />

            </div>

    </div>
    </MaxWidthWrapper>
    
  )
}

export default Advert