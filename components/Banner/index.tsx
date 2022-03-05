import ImageStrapi from "components/ImageStrapi"
import Links from "components/Links"

import { Container } from "styles/shared"
import { AuthorIcon, CalendarIcon } from "icons"

import * as Styled from "./styled"

const Banner = ({ author, article }: any) => {
  return (
    <Styled.Banner>
      <Styled.BannerInfo>
        <Container>
          <Styled.Title>{article.attributes.title}</Styled.Title>
          <Styled.SubTitle>{article.attributes.description}</Styled.SubTitle>
          <Styled.PostDetails>
            <Styled.PostDetailsLine>
              <CalendarIcon />
              <Styled.Date format="MMM Do YYYY">
                {article.attributes.published_at}
              </Styled.Date>
            </Styled.PostDetailsLine>
            <Styled.PostDetailsLine>
              <AuthorIcon width="15" height="15" />
              <Links to={`/authors/${author.data.attributes.slug}`}>
                <Styled.Author>{author.data.attributes.name}</Styled.Author>
              </Links>
            </Styled.PostDetailsLine>
          </Styled.PostDetails>
        </Container>
      </Styled.BannerInfo>
      <Styled.BannerImg>
        <ImageStrapi image={article.attributes.image} height="450" />
      </Styled.BannerImg>
    </Styled.Banner>
  )
}

export default Banner
