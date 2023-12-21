import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({children, className} : {children: ReactNode, className? : string}) => {
    return (
        <div className={cn("mx-auto w-full px-10 py-2", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper