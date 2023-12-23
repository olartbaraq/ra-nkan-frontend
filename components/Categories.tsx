import { PRODUCT_CATEGORIES } from "@/utils/textdata/category"
import Link from "next/link"

const Categories = () => {
  return (
    <div className="border-b border-gray-200 content-center w-full flex justify-center">
        <div className=" flex content-center h-10 max-w-max items-center space-x-6 ">
        {
            PRODUCT_CATEGORIES.map(categories => (
                <ul key={categories.label}>
                    <Link href={categories.value}>{categories.label}</Link>
                </ul>
            ))
        }
        </div>
    </div>
    
  )
}

export default Categories