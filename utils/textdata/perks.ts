import { Aperture, Computer, LucideProps, PackageCheck, Shell, ThumbsUp } from "lucide-react"
import { StaticImageData } from "next/image"
import Ilus_1 from '@/public/Ilus_1.jpg'
import Ilus_2 from '@/public/Ilus_2.jpg'
import Ilus_3 from '@/public/Ilus_3.jpg'
import Ilus_4 from '@/public/Ilus_4.jpg'
import Ilus_5 from '@/public/Ilus_5.jpg'


type Perks = {
    id: number
    title: string
    icon: React.ForwardRefExoticComponent<LucideProps>
    description: string
    call_to_action: string
    image: StaticImageData
    href: string
}[]

export const SITE_PERKS: Perks = [
    {
        id:1, 
        title: 'Versatility Unleashed', 
        icon: Aperture, 
        description: "Effortlessly explore and acquire both tangible treasures and digital delights.",
        call_to_action: 'Choose branded items',
        image: Ilus_1,
        href: "/"
    },

    {
        id:2, 
        title: 'Curated Excellence', 
        icon: ThumbsUp,
        description: "Immerse yourself in a world curated with utmost precision with expertly selected blend of physical and digital products.",
        call_to_action: "Get anything you need",
        image: Ilus_2,
        href: "/"
    },

    {
        id:3, 
        title: 'Unified Checkout Experience', 
        icon: PackageCheck,
        description: "Experience the ease of a unified shopping journey, making your shopping experience both convenient and enjoyable.",
        call_to_action: "Just what you wanted",
        image: Ilus_3,
        href: "/"
    },

    {
        id:4, 
        title: 'Digital Discovery Hub', 
        icon: Computer,
        description: "Explore and uncover a realm of virtual delights, from software solutions to artistic masterpieces.",
        call_to_action: "Collectibles for you",
        image: Ilus_4,
        href: "/"
    },

    {
        id:5, 
        title: 'Seamless Integration for Creators', 
        icon: Shell,
        description: "Offers the perfect stage to showcase your creations to a global audience.",
        call_to_action: "Timeless treasures",
        image: Ilus_5,
        href: "/"
    }
]