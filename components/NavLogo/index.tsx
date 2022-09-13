import { HiddenText, Links } from "components"
import { BlogLogo } from "icons"

const NavLogo = () => (
  <Links to="/" alt="Go to homepage">
    <HiddenText>Go to homepage</HiddenText>
    <BlogLogo />
  </Links>
)

export default NavLogo
