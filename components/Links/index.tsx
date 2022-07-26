import Link from "next/link"
import { ILinks } from "./interface"

const Links = ({ to, target = "_self", children, alt }: ILinks) => {
  return (
    <Link href={to}>
      <a target={target} alt={alt} aria-label={alt}>
        {children}
      </a>
    </Link>
  )
}

export default Links
