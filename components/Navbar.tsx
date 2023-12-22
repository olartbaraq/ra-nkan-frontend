"use client"
import React, {useState} from "react"
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
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"




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

  const [search, setsearch] = useState("")

  const SearchProducts = () => {
    console.log(search)
  }
    return (
        <MaxWidthWrapper className="border-b border-gray-300">
            <div className='hidden sm:flex flex-row items-center justify-between h-20 w-full'>

                <div className='ml-4 lg:ml-0'>
                  <Link href='/'><Image src={SiteLogo} alt="Ra'Nkan Logo" width={100} height={100} priority={true}/></Link>
                </div>
                
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Shop By Category</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[1000px] gap-3 p-4 md:max-w-full md:grid-cols-5 lg:max-w-full ">
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

                <div className="flex w-full items-center space-x-5">
                  <Input className=" ml-2 w-2/3" type="search" onChange={(e) => setsearch(e.target.value)} placeholder="Search for anything" />
                  <Button onClick={SearchProducts} className={cn(buttonVariants({variant: 'default', size: "lg"}))} type="submit">Search</Button>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default Navbar