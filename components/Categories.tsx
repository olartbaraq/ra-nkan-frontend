import { cn } from "@/lib/utils"
import { Heart } from "@/utils/icons"
import { PRODUCT_CATEGORIES } from "@/utils/textdata/category"
import Link from "next/link"

const Categories = () => {
  return (
    <div className="hidden border-b border-gray-200 content-center w-full xl:flex justify-center">
        <div className=" flex content-center h-10 max-w-max items-center space-x-3 2xl:space-x-6 ">
          <Link className="text-xs min-w-max mt-1" href='/'>Home</Link>
          <Link className="text-xs min-w-max flex items-center space-x-1 mt-1" href='/cart'><Heart className={cn("h-3 w-3 transition-all text-muted-foreground")}/>Saved</Link>
        {
          PRODUCT_CATEGORIES.map(categories => (
              <ul key={categories.label}>
                <Link className="text-xs min-w-max" href={categories.value}>{categories.label}</Link>
              </ul>
          ))
        }
        </div>
    </div>
    
  )
}

export default Categories