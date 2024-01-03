import { StaticImageData } from "next/image"
import { URL } from "url"

type ProductTemplate = {
	id: string
	name: string
	description: string
	price: string
	image: string
	shop: string
	rating: string
	sold: string
}[]




export const PRODUCTS : ProductTemplate = [
	{
		id: "1",
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "1500"
	},
	{
		id: '2',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '3',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "1500"
	},
	{
		id: '4',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '5',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '6',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "1500"
	},
	{
		id: '30',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '7',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '8',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '9',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '10',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '11',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '12',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '13',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '14',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '15',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '16',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '17',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '18',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '19',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '20',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '21',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '22',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '23',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '24',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '25',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '29',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '26',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "1500"
	},
	{
		id: '27',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "500"
	},
	{
		id: '28',
		name: "Awesome Product",
		description: "Cool Product with awesome product name with optional description with",
		price: "4567.98",
		image: "/phone.jpg",
		shop: "Mubby Store",
		rating: "4.8",
		sold: "1500"
	},
]