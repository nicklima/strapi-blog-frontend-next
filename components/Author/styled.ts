import styled from "styled-components"

export const Author = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  margin: 60px 0 20px;
  padding: 30px;
`

export const Picture = styled.figure`
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100px;
  margin-top: -70px;
`
export const Info = styled.div`
  text-align: center;
`
export const Title = styled.h3`
  font-family: var(--font-heading);
  font-size: 28px;
  margin-top: 10px;
`

export const About = styled.p`
  padding: 20px 30px 35px;
`

export const Social = styled.ul`
  display: flex;
  justify-content: center;
`

export const Network = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.bg};
  border-radius: 50%;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 0 5px;
  padding: 5px;
  width: 40px;

  & a {
    display: block;
    padding: 5px;
  }
`
