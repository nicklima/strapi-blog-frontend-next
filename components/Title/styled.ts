import styled from "styled-components"
import { theme } from "styles/theme"

export const Title = styled.h2`
  color: ${theme.text};
  font-family: Staatliches;
  font-size: 50px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 80px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 100px;
  }
`
