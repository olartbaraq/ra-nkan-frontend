"use client"
import React, {useState} from "react"
import { cn } from "@/lib/utils"
import { MaxWidthWrapper, DarkMode, SearchInput } from '@/other-components'
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

  return (
    <div className="border-b border-gray-300">
      <MaxWidthWrapper>
        <div className='hidden sm:flex items-center justify-start space-x-10 h-20 w-full'>

          <div className='ml-4 lg:ml-0'>
            <Link className="invert-0 dark:invert" href='/'><Image src={SiteLogo} alt="Ra'Nkan Logo" width={100} height={100} priority={true}/></Link>
          </div>
            
          <NavigationMenu>
              <NavigationMenuList>
                  <NavigationMenuItem className="hidden lg:block">
                      <NavigationMenuTrigger>Shop By Category</NavigationMenuTrigger>
                          <NavigationMenuContent>
                              <ul className="grid min-w-max gap-3 p-4 md:min-w-max md:grid-cols-5 lg:min-w-max ">
                                  {PRODUCT_CATEGORIES.map((category) => (
                                      <ListItem
                                      key={category.label}
                                      title={category.label}
                                      // href={category.href}
                                      >
                                      {
                                      category.featured.map(feature => (
                                          <li className="no-underline hover:underline" key={feature.name}>
                                              <Link href={`/category/${category.value}/${feature.href}`}>{feature.name}</Link>
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

          <div className="flex-grow">
            <SearchInput />
            {/* <Input className="h-11 w-60 lg:min-w-96 2xl:w-[1000px]" type="search" onChange={(e) => setsearch(e.target.value)} placeholder="Search for anything" />
            <Button onClick={SearchProducts} type="submit">Search</Button> */}
          </div>

          <DarkMode />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Navbar