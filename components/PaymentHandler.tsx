import { PaystackConfig } from '@/typings';

const PaymentHandler = () => {

  const config: PaystackConfig = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_7224f8021f185ace3d7f860e5bca82de81fbdbc2',
};

// you can call this function anything
const onSuccess = (reference:string) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}


  return (
    <div>
      
    </div>
  )
}

export default PaymentHandler