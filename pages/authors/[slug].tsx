import dynamic from "next/dynamic"

import Layout from "components/Layout"

const Author = dynamic(() => import("components/Author"))
const Articles = dynamic(() => import("components/Articles"))

import { fetchAPI } from "lib/api"
import { Container, Section } from "styles/shared"

const AuthorPage = ({ author, articles }: any) => {
  const seo = {
    metaTitle: author.name,
    article: true,
    ...author.seo,
  }

  return (
    <Layout seo={seo}>
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
    seo: { populate: "*" },
  })

  const articlesRes = await fetchAPI("/articles", {
    filters: {
      author: authorRes.data[0].id,
    },
    populate: "*",
  })

  return {
    props: {
      author: authorRes.data[0].attributes,
      articles: articlesRes,
    },
    revalidate: 1,
  }
}

export default AuthorPage
