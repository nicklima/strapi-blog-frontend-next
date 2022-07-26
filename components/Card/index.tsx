import Moment from "react-moment"
import dynamic from "next/dynamic"

const Links = dynamic(() => import("components/Links"))
const ImageStrapi = dynamic(() => import("components/ImageStrapi"))

import { AuthorIcon } from "icons"
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
        <Links
          to={`/article/${post.slug}`}
          alt={`Read the post: ${post.title}`}
        >
          <Styled.Figure>
            <ImageStrapi image={post.image} />
          </Styled.Figure>
        </Links>
      </Styled.FigureHolder>
      <Styled.Info>
        <Styled.Grid>
          <Links
            to={`/category/${catSlug}`}
            alt={`See all posts on ${catName}`}
          >
            <Styled.Category>{catName}</Styled.Category>
          </Links>
          <Styled.Date>
            <Moment format="DD MMM, YYYY">{post.published_at}</Moment>
          </Styled.Date>
        </Styled.Grid>
        <Styled.Title>
          <Links to={`/article/${post.slug}`} alt={`Read the ${post.title}`}>
            {post.title}
          </Links>
        </Styled.Title>
        <Styled.Description>{post.description}</Styled.Description>
      </Styled.Info>
      <Links
        to={`/authors/${post.author.data.attributes.slug}`}
        alt={`See all ${post.author.data.attributes.name} posts`}
      >
        <Styled.AuthorLine>
          <AuthorIcon />
          <Styled.Author>{post.author.data.attributes.name}</Styled.Author>
        </Styled.AuthorLine>
      </Links>
    </Styled.Card>
  )
}

export default Card
