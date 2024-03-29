"use client";

import Image from "next/image"
import Link from "next/link"
import { POPULAR_CATEGORIES } from "@/utils/textdata/popularcategory";




const ExploreCategories = () => {
    return (
        <div className="w-full items-center flex flex-col space-y-10">

            <div className="w-full flex justify-center md:justify-normal mt-10">
                <h4 className="font-bold text-primary text-md md:text-3xl">
                    Explore Popular Categories
                </h4>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {
                    POPULAR_CATEGORIES.map((pcate, index) => (
                        <div key={index} className="flex flex-col max-h-min space-y-4 items-center">
                            <Link className="flex flex-col items-center space-y-3" href={`/category/${pcate.category}/${pcate.href}`}>
                                <div className="bg-gray-200 dark:bg-slate-100 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg flex items-center justify-center h-56 lg:h-36 w-56 lg:w-36 xl:h-48 xl:w-48 rounded-full">
                                    <Image src={pcate.image} alt={pcate.title} className="h-30 w-40 lg:w-32 xl:w-40" priority={true}/>
                                </div>

                                <h3 className="text-xl lg:text-sm">{pcate.title}</h3>
                            </Link>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default ExploreCategories