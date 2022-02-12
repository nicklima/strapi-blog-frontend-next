import { AuthorIcon } from "icons"
import Links from "components/Links"
import ImageStrapi from "components/ImageStrapi"
import * as Styled from "./styled"

const Card = ({ article }: any) => {
  const { attributes: post } = article
  const {
    category: {
      data: {
        attributes: { name: catName, slug: catSlug },
      },
    },
  } = post

  return (
    <Styled.Card>
      <Styled.FigureHolder>
        <Links to={`/article/${post.slug}`}>
          <Styled.Figure>
            <ImageStrapi image={post.image} />
          </Styled.Figure>
        </Links>
      </Styled.FigureHolder>
      <Styled.Info>
        <Styled.Grid>
          <Styled.Category>
            <Links to={`/category/${catSlug}`}>{catName}</Links>
          </Styled.Category>
          <Styled.Date format="DD MMM, YYYY">{post.published_at}</Styled.Date>
        </Styled.Grid>
        <Styled.Title>
          <Links to={`/article/${post.slug}`}>{post.title}</Links>
        </Styled.Title>
        <Styled.Description>{post.description}</Styled.Description>
      </Styled.Info>
      <Styled.AuthorLine>
        <AuthorIcon width="20" height="20" />
        <Styled.Author>{post.author.data.attributes.name}</Styled.Author>
      </Styled.AuthorLine>
    </Styled.Card>
  )
}

export default Card
