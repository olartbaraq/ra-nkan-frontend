type Props = {
    params : {
      id: string
    }
    searchParams : {
      name: string
    }
}

const Category = ({params : {id}, searchParams : {name}}: Props) => {
    console.log(name,id)
  return (
    <div>{name} {id}</div>
  )
}

export default Category