import { MaxWidthWrapper } from '@/other-components'
import Image from 'next/image'
import Link from "next/link"
import SiteLogo from "../public/RaNkan_logo.png"




const Navbar = () => {
  return (
    <MaxWidthWrapper className="border-b border-gray-300">
        <div className='flex flex-row items-center justify-between h-20 min-w-full'>

            <div className='ml-4 flex lg:ml-0'>
                <Link href='/'><Image src={SiteLogo} alt="Ra'Nkan Logo" width={100} height={100}/></Link>
            </div>

            
        </div>
    </MaxWidthWrapper>
  )
}

export default Navbar