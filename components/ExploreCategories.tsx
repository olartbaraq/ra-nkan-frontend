"use client";

import Image from "next/image"
import Link from "next/link"
import { POPULAR_CATEGORIES } from "@/utils/textdata/popularcategory";




const ExploreCategories = () => {
    return (
        <div className="w-full h-max flex flex-col px-3 space-y-10">

            <h4 className="font-bold text-md text-center lg:text-start lg:text-3xl mt-10">
                Explore Popular Categories
            </h4>

            <div className="flex flex-col space-y-3 lg:flex-row w-full h-max lg:space-x-10 items-center justify-center lg:justify-normal">
                {
                    POPULAR_CATEGORIES.map((pcate, index) => (
                        <div key={index} className="flex flex-col max-h-min space-y-4 items-center">
                            <Link className="flex flex-col items-center space-y-3" href={`/category/${pcate.category}/${pcate.href}`}>
                                <div className="bg-gray-200 dark:bg-slate-100 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg flex items-center p-auto justify-center h-64 w-64 rounded-full">
                                    <Image src={pcate.image} alt={pcate.title} width={210} height={250} priority={true}/>
                                </div>

                                <h3 className="text-xl ">{pcate.title}</h3>
                            </Link>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default ExploreCategories