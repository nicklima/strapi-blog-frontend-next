import { ICategories } from "interfaces"

import { Container } from "styles/shared"
import { BlogLogo } from "icons"
import * as Styled from "./styled"

const Nav = ({ categories }: any) => {
  return (
    <Styled.Header>
      <Container>
        <Styled.Nav>
          <Styled.NavLink to="/">
            <BlogLogo />
          </Styled.NavLink>
          <Styled.List>
            {categories.map((category: ICategories) => {
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
