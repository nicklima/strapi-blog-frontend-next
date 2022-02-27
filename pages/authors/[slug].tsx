import Layout from "components/Layout"
import Author from "components/Author"
import Articles from "components/Articles"

import { fetchAPI } from "lib/api"
import { Container, Section } from "styles/shared"

const AuthorPage = ({ author, articles, categories }: any) => {
  const seo = {
    metaTitle: author.attributes.name,
    metaDescription: author.attributes.description,
    shareImage: author?.attributes?.picture,
    article: true,
  }

  return (
    <Layout seo={seo} categories={categories.data}>
      <Section>
        <Container>
          <Author data={author} />
          <Articles articles={articles.data} />
        </Container>
      </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const authorRes = await fetchAPI("/writers", { fields: ["slug"] })

  return {
    paths: authorRes.data.map((author: { attributes: { slug: string } }) => ({
      params: {
        slug: author.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const authorRes = await fetchAPI(`/writers`, {
    filters: {
      slug: params.slug,
    },
    populate: "*",
    social: { populate: "*" },
  })

  const articlesRes = await fetchAPI("/articles", {
    filters: {
      author: authorRes.data[0].id,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: {
      author: authorRes.data[0],
      articles: articlesRes,
      categories: categoriesRes,
    },
    revalidate: 1,
  }
}

export default AuthorPage
