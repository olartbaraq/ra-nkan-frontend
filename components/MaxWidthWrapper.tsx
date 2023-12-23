import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({children, className} : {children: ReactNode, className? : string}) => {
    return (
        <div className={cn("mx-auto max-w-full px-20", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper