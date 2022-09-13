import dynamic from "next/dynamic"

import { Layout, Section } from "components"
const Author = dynamic(() => import("components/Author"))
const Articles = dynamic(() => import("components/Articles"))

import { fetchAPI, getPaths } from "lib"

const AuthorPage = ({ author, articles }: any) => {
  const seo = {
    metaTitle: author.name,
    article: true,
    ...author.seo,
  }

  return (
    <Layout seo={seo}>
      <Section>
        <Author data={author} />
        <Articles articles={articles.data} />
      </Section>
    </Layout>
  )
}

export const getStaticPaths = () => getPaths("/writers")

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
