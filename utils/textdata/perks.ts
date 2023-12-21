import { Aperture, Computer, LucideProps, PackageCheck, Shell, ThumbsUp } from "lucide-react"



type Perks = {
    id: number
    name: string
    icon: React.ForwardRefExoticComponent<LucideProps>
    description: string
}[]

export const perks: Perks = [
    {
        id:1, 
        name: 'Versatility Unleashed', 
        icon: Aperture, 
        description: "Effortlessly explore and acquire both tangible treasures and digital delights."
    },

    {
        id:2, 
        name: 'Curated Excellence', 
        icon: ThumbsUp,
        description: "Immerse yourself in a world curated with utmost precision with expertly selected blend of physical and digital products."
    },

    {
        id:3, 
        name: 'Unified Checkout Experience', 
        icon: PackageCheck,
        description: "Experience the ease of a unified shopping journey, making your shopping experience both convenient and enjoyable."
    },

    {
        id:4, 
        name: 'Digital Discovery Hub', 
        icon: Computer,
        description: "Explore and uncover a realm of virtual delights, from software solutions to artistic masterpieces."
    },

    {
        id:5, 
        name: 'Seamless Integration for Creators', 
        icon: Shell,
        description: "Offers the perfect stage to showcase your creations to a global audience."
    }
]