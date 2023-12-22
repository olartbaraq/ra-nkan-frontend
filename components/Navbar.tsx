"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { MaxWidthWrapper } from '@/other-components'
import Image from 'next/image'
import Link from "next/link"
import SiteLogo from "../public/RaNkan_logo.png"
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuIndicator,
    NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
    NavigationMenuTrigger,NavigationMenuViewport } from "@/components/ui/navigation-menu"

import { PRODUCT_CATEGORIES } from "@/utils/textdata/category"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground space-y-2 rounded-md py-2">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const Navbar = () => {
    return (
        <MaxWidthWrapper className="border-b border-gray-300">
            <div className='flex flex-row items-center justify-start h-20 min-w-full'>

                <div className='ml-4 flex lg:ml-0'>
                    <Link href='/'><Image src={SiteLogo} alt="Ra'Nkan Logo" width={100} height={100}/></Link>
                </div>
                
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Shop By Category</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[700px] gap-3 p-4 md:w-[800px] md:grid-cols-5 lg:w-[950px] ">
                                        {PRODUCT_CATEGORIES.map((category) => (
                                            <ListItem
                                            key={category.label}
                                            title={category.label}
                                            // href={category.href}
                                            >
                                            {
                                            category.featured.map(feature => (
                                                <li className="no-underline hover:underline" key={feature.name}>
                                                    <Link href={feature.href}>{feature.name}</Link>
                                                </li>
                                            ))
                                            }
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
            </div>
        </MaxWidthWrapper>
    )
}

export default Navbar