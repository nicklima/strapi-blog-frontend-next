import { ReactNode } from "react"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("components/Header"))
const Seo = dynamic(() => import("components/SEO"))
const Footer = dynamic(() => import("components/Footer"))

import { ISEO } from "interfaces"
import { Main } from "styles/shared"

const Layout = ({ children, seo }: { children: ReactNode; seo: ISEO }) => (
  <>
    <Seo seo={seo} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
