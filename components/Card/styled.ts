import styled from "styled-components"

export const Card = styled.div`
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  display: grid;
  grid-template-rows: 250px auto auto;
  overflow: hidden;
`

export const FigureHolder = styled.div`
  margin-bottom: 10px;
  max-height: 250px;
  overflow: hidden;
  position: relative;
`
export const Figure = styled.figure`
  height: 250px;

  & > span {
    height: 100% !important;
  }
`
export const Info = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
`

export const Title = styled.h3`
  font-family: var(--font-heading);
  font-size: 28px;
  margin: 15px 0;
  min-height: 80px;
`

export const Description = styled.div`
  margin-bottom: 15px;
  min-height: 100px;
`

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Category = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: var(--font-heading);
`

export const Date = styled.time`
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: var(--font-heading);
`

export const AuthorLine = styled(Grid)`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  grid-gap: 10px;
  justify-content: flex-start;
  padding: 15px;
  position: relative;

  &:before {
    background: ${({ theme }) => theme.text};
    content: "";
    height: 1px;
    left: 0;
    opacity: 0.1;
    position: absolute;
    top: 0.3px;
    width: 100%;
  }
`

export const Author = styled.div``
