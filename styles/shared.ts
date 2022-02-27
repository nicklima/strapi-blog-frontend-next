import styled from "styled-components"
import { theme } from "styles/theme"

export const Main = styled.main`
  min-height: 80vh;
`

export const Title = styled.h1`
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
export const ReadMore = styled.a`
  background: linear-gradient(
    to right,
    #3dd0d8 0%,
    rgba(124, 105, 227, 0.64) 100%
  );
  border-radius: 10px;
  border: 0;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
`
