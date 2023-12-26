"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { SITE_PERKS } from "@/utils/textdata/perks"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

export default function CarouselItems() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true})
  )


  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-fit"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {SITE_PERKS.map((perks) => (
          <CarouselItem key={perks.id}>
            <div className="p-0">
              <Card>
                <CardContent>
                    <div className={cn("flex h-96 max-w-max justify-start items-center",perks.bgColor)}>

                      <div className="flex flex-col h-30 w-full justify-center lg:justify-normal space-y-10 p-5">
                        <h2 className="text-4xl text-wrap">{perks.title}</h2>
                        <p className="text-2xl text-wrap">{perks.description}</p>
                        <div>
                          <Link className="border border-black dark:border-white rounded-sm flex items-center px-6 py-2 justify-between h-50 w-80" href={perks.href}>
                            <p className="text-2xl">{perks.call_to_action}</p>
                            {<perks.icon />}
                          </Link>
                        </div>
                      </div>

                      <div className="hidden lg:block">
                        <Link href={perks.href}>
                          <Image className="invert-0 dark:invert bg-gradient-to-b" src={perks.image} alt={perks.title} width={1920} height={500} priority={true} />
                        </Link>
                      </div>

                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
