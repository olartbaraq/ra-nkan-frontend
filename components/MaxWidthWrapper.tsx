import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({children, className} : {children: ReactNode, className? : string}) => {
    return (
        <div className={cn("mx-auto px-5 max-w-screen-xl", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper