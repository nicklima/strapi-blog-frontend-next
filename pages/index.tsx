import dynamic from "next/dynamic"

import Layout from "components/Layout"
const Articles = dynamic(() => import("components/Articles"))

import { fetchAPI } from "lib/api"
import { Container, Section, Title } from "styles/shared"

const Home = ({ articles, categories, homepage }: any) => {
  return (
    <Layout seo={homepage.attributes.seo} categories={categories}>
      <Section>
        <Container>
          <Title>Next.js + Strapi Blog</Title>
          <Articles articles={articles} />
        </Container>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/global", {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
