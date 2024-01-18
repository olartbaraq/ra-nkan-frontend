import { MaxWidthWrapper, ShippingAddress, PaymentInformation } from "@/other-components"


const page = () => {

  return (
    <MaxWidthWrapper>
      <div className='flex w-full justify-between gap-32 items-start'>
        <ShippingAddress />
        <PaymentInformation />
      </div>
    </MaxWidthWrapper>
  )
}

export default page