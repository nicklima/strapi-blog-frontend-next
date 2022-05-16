import { ReactNode } from "react"
import dynamic from "next/dynamic"

const Nav = dynamic(() => import("components/NavTop"))
const Seo = dynamic(() => import("components/SEO"))
const Footer = dynamic(() => import("components/Footer"))

import { Main } from "styles/shared"

const Layout = ({
  children,
  seo,
  categories,
}: {
  children: ReactNode
  seo: any
  categories: any
}) => {
  return (
    <>
      <Seo seo={seo} categories={categories} />
      <Nav categories={categories} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
export default Layout
