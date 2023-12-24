type Props = {
    params : {
      cate: string
      subcate: string
    }
}

const Category = ({params : {cate, subcate}}: Props) => {
    //console.log(cate,name)
  return (
    <div>{cate}/ {subcate}</div>
  )
}

export default Category