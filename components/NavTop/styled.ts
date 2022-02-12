import styled from "styled-components"
import Links from "components/Links"

export const Header = styled.header`
  background: #181728;
`

export const NavLink = styled(Links)``

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 90px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 100px auto;
    justify-content: space-between;
  }
`

export const List = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }
`

export const ListItem = styled.li`
  color: #fff;
  font-family: Staatliches;
  font-size: 20px;
`
