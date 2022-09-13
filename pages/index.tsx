import dynamic from "next/dynamic"

import { Section, Title, Layout } from "components"
const Articles = dynamic(() => import("components/Articles"))
const Pagination = dynamic(() => import("components/Pagination"))

import { fetchAPI } from "lib"

const Home = ({ articles, pages }: any) => {
  const hasPages = pages.limit < pages.total
  const seo = {
    metaTitle: "Home Page",
  }

  return (
    <Layout seo={seo}>
      <Section>
        <Title>Next.js + Strapi Blog</Title>
        <Articles articles={articles} />
        {hasPages && <Pagination pagination={pages} />}
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
