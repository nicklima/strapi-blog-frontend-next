import Link from "next/link"
import { ILinks } from "interfaces"

const Links = ({ children, to, target }: ILinks) => (
  <Link href={to}>
    <a target={target || "_self"}>{children}</a>
  </Link>
)

export default Links
