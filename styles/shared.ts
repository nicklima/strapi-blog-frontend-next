import styled from "styled-components"
import { theme } from "styles/theme"

export const Main = styled.main`
  min-height: 80vh;
`

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

export const Section = styled.section`
  padding: 80px 0;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 1.5rem;
  width: 100%;
`
export const HiddenText = styled.span`
  height: 1px;
  left: 0px;
  overflow: hidden;
  position: absolute;
  top: -500px;
  width: 1px;
`
