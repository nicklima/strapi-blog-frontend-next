import { useContext } from "react"
import { ICategories, IGlobalContext } from "global-interfaces"

import { GlobalContext } from "lib"
import { NavItem, NavLogo } from "components"

import * as Styled from "./styled"

const Nav = () => {
  const { categories } = useContext(GlobalContext) as IGlobalContext
  return (
    <Styled.Nav>
      <NavLogo />
      <Styled.List>
        {categories?.map(({ id, attributes }: ICategories) => {
          return <NavItem data={attributes} key={`nav-item-${id}`} />
        })}
      </Styled.List>
    </Styled.Nav>
  )
}

export default Nav
