import styled from "styled-components"
import { theme } from "styles/theme"

export const Footer = styled.footer`
  align-items: center;
  background: ${theme.white};
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  width: 100%;
`

export const Credits = styled.div`
  background: ${theme.bg};
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  text-align: center;
  width: 100%;

  a {
    color: ${theme.white};
    line-height: 1.5;

    &:visited,
    &:hover {
      color: ${theme.white};
    }
  }
`

export const Logos = styled.div`
  display: flex;
  height: 80px;
  max-width: 90%;
  width: 320px;
`

export const Logo = styled.a`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`
