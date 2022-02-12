import { ReactNode } from "react"

import Nav from "components/NavTop"
import Seo from "components/SEO"
import Footer from "components/Footer"
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
