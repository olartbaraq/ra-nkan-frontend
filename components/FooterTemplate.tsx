import { FooterData } from "@/utils/textdata/footerbuy"
import Link from "next/link"

type FooterProps = {
    footerdata: FooterData

}


const FooterTemplate = ({footerdata} : FooterProps) => {
    return (
        <> 
            {
                footerdata.map((values, id) => (
                    <div key={id} className="flex flex-col space-y-5 items-start">
                        <h4 className="font-bold text-2xl">{values.title}</h4>
                        <div className="flex flex-col space-y-2 items-start">
                            <Link href={`rankan/${values.link1.toLowerCase()}`}>{values.link1.replace("_", " ")}</Link>
                            <Link href={`rankan/${values.link2.toLowerCase()}`}>{values.link2.replace("_", " ")}</Link>
                            <Link href={`rankan/${values.link3.toLowerCase()}`}>{values.link3.replace("_", " ")}</Link>
                        </div>
                    </div>
                ))
            }
        
        </>
    )
}

export default FooterTemplate