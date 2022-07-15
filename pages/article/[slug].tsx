import dynamic from "next/dynamic"

import Layout from "components/Layout"
const Author = dynamic(() => import("components/Author"))
const Wysiwyg = dynamic(() => import("components/Wysiwyg"))
const Banner = dynamic(() => import("components/Banner"))

import { fetchAPI, getPaths } from "lib"
import { Container, Section } from "styles/shared"

const Article = ({ article, author }: any) => {
  const seo = {
    metaTitle: article.title,
    article: true,
    ...article.seo,
  }

  return (
    <Layout seo={seo}>
      <Banner author={author} article={article} />
      <Section>
        <Container>
          <Wysiwyg content={article.content} />
          <Author data={author} />
        </Container>
      </Section>
    </Layout>
  )
}

export const getStaticPaths = () => getPaths("/articles")

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
    seo: { populate: "*" },
  })

  const authorRes = await fetchAPI(
    `/writers/${articlesRes.data[0].attributes.author.data.id}`,
    {
      populate: "*",
      social: { populate: "*" },
    }
  )

  return {
    props: {
      article: articlesRes.data[0].attributes,
      author: authorRes.data.attributes,
    },
    revalidate: 1,
  }
}

export default Article
