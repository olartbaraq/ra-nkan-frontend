import Sneakers from '@/public/sneakers.jpg'
import Cards from '@/public/giftcards.jpg'
import Bags from '@/public/luxurybags.jpg'
import Gaming from '@/public/gaming.jpg'
import Watch from '@/public/watch.jpg'
import Phone from '@/public/phone.jpg'

export const POPULAR_CATEGORIES = [
    {
        category: "fashion" as const,
        href: 'shoes' as const,
        image: Sneakers,
        title: 'Sneakers'
    },
    {
        category: "other_categories" as const,
        href: 'digital_products' as const,
        image: Cards,
        title: 'Trading Cards'
    },
    {
        category: "fashion" as const,
        href: 'bags' as const,
        image: Bags,
        title: 'Pre-Loved Luxury'
    },
    {
        category: "fashion" as const,
        href: 'jewlery' as const,
        image: Watch,
        title: 'Watches'
    },
    {
        category: "phones_tablets" as const,
        href: 'phones' as const,
        image: Phone,
        title: 'Mobile Phones'
    },
    {
        category: "gaming" as const,
        href: 'playstation' as const,
        image: Gaming,
        title: 'Gaming'
    },
];