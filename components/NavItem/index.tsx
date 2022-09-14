import { Links } from "components"
import { ICategoriesAttr } from "global-interfaces"

import * as Styled from "./styled"

const NavItem = ({ data }: { data: ICategoriesAttr }) => {
  const { slug, name } = data
  return (
    <Styled.Item>
      <Links to={`/category/${slug}`} alt={`See all posts in ${name}`}>
        {name}
      </Links>
    </Styled.Item>
  )
}

export default NavItem
