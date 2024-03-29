import { notFound } from "next/navigation"

type Props = {
    params: {
      term: string
    }
}


const SitePage = ({params: {term} }: Props) => {

    if (!term) notFound;

    const termToUse = decodeURI(term)

  return (
    <div>You are now in {termToUse}</div>
  )
}

export default SitePage