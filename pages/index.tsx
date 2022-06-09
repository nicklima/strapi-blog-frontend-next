import dynamic from "next/dynamic"

import Layout from "components/Layout"
const Articles = dynamic(() => import("components/Articles"))

import { fetchAPI } from "lib/api"
import { Container, Section, Title } from "styles/shared"

const Home = ({ articles }: any) => {
  const seo = {
    metaTitle: "Home Page",
  }

  return (
    <Layout seo={seo}>
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
  const articlesRes = await fetchAPI("/articles", { populate: "*" })
  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  }
}

export default Home
