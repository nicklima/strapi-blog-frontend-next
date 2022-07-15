import React from "react"
import dynamic from "next/dynamic"

const Card = dynamic(() => import("components/Card"))
import * as Styled from "./styled"

const Articles = ({ articles }: any) => (
  <Styled.GridArticles>
    {articles.map((article: { attributes: { slug: any } }, i: any) => {
      return (
        <Card
          article={article}
          key={`article__left__${article.attributes.slug}`}
        />
      )
    })}
  </Styled.GridArticles>
)

export default Articles
