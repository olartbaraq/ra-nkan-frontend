import FooterTemplate from "./FooterTemplate";
import { BUY } from "@/utils/textdata/footerbuy";
import { SELL } from "@/utils/textdata/footersell";
import { TOOLS } from "@/utils/textdata/footertools";
import { SOCIAL } from "@/utils/textdata/fotersocial";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-100">
      <div className="hidden mx-auto px-5 max-w-screen-xl w-full h-96 md:flex py-20 space-x-20 items-start ">
          <FooterTemplate footerdata={BUY}/>
          <div className="flex flex-col space-y-10 items-start min-h-max">
              <FooterTemplate footerdata={SELL}/>
              <FooterTemplate footerdata={TOOLS}/>
          </div>
          <FooterTemplate footerdata={SOCIAL}/>
      </div>
    </div>
    
  )
}

export default Footer