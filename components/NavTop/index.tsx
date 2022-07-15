import { useContext } from "react"

import { GlobalContext } from "lib"
import { ICategories, IGlobalContext } from "interfaces"

import { Container, HiddenText } from "styles/shared"
import { BlogLogo } from "icons"
import * as Styled from "./styled"

const Nav = () => {
  const { categories } = useContext(GlobalContext) as IGlobalContext
  return (
    <Styled.Header>
      <Container>
        <Styled.Nav>
          <Styled.NavLink to="/">
            <HiddenText>Go to homepage</HiddenText>
            <BlogLogo />
          </Styled.NavLink>
          <Styled.List>
            {categories?.map((category: ICategories) => {
              return (
                <Styled.ListItem key={category.id}>
                  <Styled.NavLink to={`/category/${category.attributes.slug}`}>
                    {category.attributes.name}
                  </Styled.NavLink>
                </Styled.ListItem>
              )
            })}
          </Styled.List>
        </Styled.Nav>
      </Container>
    </Styled.Header>
  )
}

export default Nav
