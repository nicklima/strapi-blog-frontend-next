import Layout from "components/Layout"
import Author from "components/Author"
import Wysiwyg from "components/Wysiwyg"
import Banner from "components/Banner"

import { fetchAPI } from "lib/api"
import { Container, Section } from "styles/shared"

const Article = ({ article, categories, author }: any) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article?.attributes?.image,
    article: true,
  }

  return (
    <Layout seo={seo} categories={categories.data}>
      <Banner author={author} article={article} />
      <Section>
        <Container>
          <Wysiwyg content={article.attributes.content} />
          <Author data={author.data} />
        </Container>
      </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article: { attributes: { slug: any } }) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })

  const authorRes = await fetchAPI(
    `/writers/${articlesRes.data[0].attributes.author.data.id}`,
    {
      populate: "*",
      social: { populate: "*" },
    }
  )

  const categoriesRes = await fetchAPI("/categories")

  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes,
      author: authorRes,
    },
    revalidate: 1,
  }
}

export default Article
