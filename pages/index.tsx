import dynamic from "next/dynamic"

import Layout from "components/Layout"
const Articles = dynamic(() => import("components/Articles"))
const Pagination = dynamic(() => import("components/Pagination"))

import { fetchAPI } from "lib/api"
import { Container, Section, Title } from "styles/shared"

const Home = ({ articles, pages }: any) => {
  const hasPages = pages.limit < pages.total
  const seo = {
    metaTitle: "Home Page",
  }

  return (
    <Layout seo={seo}>
      <Section>
        <Container>
          <Title>Next.js + Strapi Blog</Title>
          <Articles articles={articles} />
          {hasPages && <Pagination pagination={pages} />}
        </Container>
      </Section>
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const limit = 6
  const start = +page === 1 ? 0 : (+page - 1) * limit

  const articlesRes = await fetchAPI("/articles", {
    pagination: {
      start,
      limit,
    },
    populate: "*",
  })

  return {
    props: {
      page: +page,
      pages: {
        current: +page,
        ...articlesRes.meta.pagination,
      },
      articles: articlesRes.data,
    },
  }
}

export default Home
