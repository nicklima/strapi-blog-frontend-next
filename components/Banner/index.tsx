import Moment from "react-moment"
import dynamic from "next/dynamic"

const ImageStrapi = dynamic(() => import("components/ImageStrapi"))
const Links = dynamic(() => import("components/Links"))

import { Container } from "styles/shared"
import { AuthorIcon, CalendarIcon } from "icons"

import * as Styled from "./styled"

const Banner = ({ author, article }: any) => (
  <Styled.Banner>
    <Styled.BannerInfo>
      <Container>
        <Styled.Title>{article.title}</Styled.Title>
        <Styled.SubTitle>{article.description}</Styled.SubTitle>
        <Styled.PostDetails>
          <Styled.PostDetailsLine>
            <CalendarIcon />
            <Styled.Date>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </Styled.Date>
          </Styled.PostDetailsLine>
          <Styled.PostDetailsLine>
            <AuthorIcon />
            <Links to={`/authors/${author.slug}`}>
              <Styled.Author>{author.name}</Styled.Author>
            </Links>
          </Styled.PostDetailsLine>
        </Styled.PostDetails>
      </Container>
    </Styled.BannerInfo>
    <Styled.BannerImg>
      <ImageStrapi image={article.image} height="450" />
    </Styled.BannerImg>
  </Styled.Banner>
)

export default Banner
