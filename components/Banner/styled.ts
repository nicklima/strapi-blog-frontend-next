import styled from "styled-components"

export const Banner = styled.div`
  height: 450px;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:before {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.835171568627451) 10%,
      rgba(0, 0, 0, 0) 100%
    );
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  }
`
export const BannerImg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;

  & > span {
    height: 100% !important;
    width: 100% !important;
  }
`

export const BannerInfo = styled.div`
  bottom: 25px;
  color: ${({ theme }) => theme.text};
  position: absolute;
  width: 100%;
  z-index: 3;
`

export const Title = styled.h1`
  font-family: var(--font-heading);
`

export const SubTitle = styled.h3`
  font-weight: 100;
`

export const PostDetails = styled.div`
  align-items: center;
  display: flex;
  font-family: var(--font-heading);
  padding-top: 20px;
`

export const Date = styled.time``

export const PostDetailsLine = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  grid-gap: 10px;
  justify-content: flex-start;
  justify-content: space-between;
  padding-left: 10px;
`

export const Author = styled.div``
