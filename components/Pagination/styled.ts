import styled from "styled-components"
import { theme } from "styles/theme"

interface activeProps {
  active: boolean
}

export const Pages = styled.div`
  padding: 30px;
  width: 100%;
`

export const PagesList = styled.ul`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
`

export const PagesItem = styled.button<activeProps>`
  padding: 8px 10px;
  color: ${({ active }) => (active ? theme.white : theme.colors.primary)};
  font-weight: bold;
  background-color: ${({ active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  cursor: ${({ active }) => (active ? "initial" : "pointer")};
  border-radius: 5px;
`
