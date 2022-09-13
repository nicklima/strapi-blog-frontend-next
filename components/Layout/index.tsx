import dynamic from "next/dynamic"
import { ILayout } from "global-interfaces"

const Header = dynamic(() => import("components/Header"))
const Seo = dynamic(() => import("components/SEO"))
const Footer = dynamic(() => import("components/Footer"))

import * as Styled from "./styled"

const Layout = ({ children, seo }: ILayout) => (
  <>
    <Seo seo={seo} />
    <Header />
    <Styled.Main>{children}</Styled.Main>
    <Footer />
  </>
)

export default Layout
