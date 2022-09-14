import styled from "styled-components"

export const Footer = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  width: 100%;
`

export const Credits = styled.div`
  background: ${({ theme }) => theme.bg};
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  text-align: center;
  width: 100%;

  a {
    color: ${({ theme }) => theme.white};
    line-height: 1.5;

    &:visited,
    &:hover {
      color: ${({ theme }) => theme.white};
    }
  }
`

export const Logos = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  max-width: 90%;
  width: 320px;
`

export const Logo = styled.a`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 35px;
  justify-content: center;
  position: relative;
  width: 90px;
`
