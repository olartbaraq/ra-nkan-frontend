import FooterTemplate from "./FooterTemplate";
import { BUY } from "@/utils/textdata/footerbuy";
import { SELL } from "@/utils/textdata/footersell";
import { TOOLS } from "@/utils/textdata/footertools";
import { SOCIAL } from "@/utils/textdata/fotersocial";

const Footer = () => {
  return (
    <div className="hidden w-full h-96 md:flex py-20 px-10 space-x-20 items-start border-t-2 border-gray-100">
        <FooterTemplate footerdata={BUY}/>
        <div className="flex flex-col space-y-10 items-start min-h-max">
            <FooterTemplate footerdata={SELL}/>
            <FooterTemplate footerdata={TOOLS}/>
        </div>
        <FooterTemplate footerdata={SOCIAL}/>
    </div>
    
  )
}

export default Footer