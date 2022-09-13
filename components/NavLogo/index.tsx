import Links from "components/Links"
import { BlogLogo } from "icons"
import { HiddenText } from "styles/shared"

const NavLogo = () => (
  <Links to="/" alt="Go to homepage">
    <HiddenText>Go to homepage</HiddenText>
    <BlogLogo />
  </Links>
)

export default NavLogo
