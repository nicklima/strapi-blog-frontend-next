import { ICategories, IGlobalContext } from 'global-interfaces'

import { NavItem, NavLogo } from 'components'

import { useStore } from 'store'
import * as Styled from './styled'

const Nav = () => {
  const { categories } = useStore() as IGlobalContext

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
