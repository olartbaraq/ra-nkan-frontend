
type Props = {
  params: {
    productId: string
  }
}


const Product = ({params: {productId} }: Props) => {

  return (
    <div>
      <p>Details about product {productId}</p>
    </div>
  )
}


export const getStaticProps = async (context:any) => {

}

export default Product