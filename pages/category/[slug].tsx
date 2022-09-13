import dynamic from "next/dynamic"

import { Layout, Section, Title } from "components"
const Articles = dynamic(() => import("components/Articles"))

import { fetchAPI, getPaths } from "lib"

const Category = ({ category }: { category: any }) => {
  const { seo, name, articles } = category
  const seoObj = {
    metaTitle: name,
    ...seo,
  }

  return (
    <Layout seo={seoObj}>
      <Section>
        <Title>{name}</Title>
        <Articles articles={articles?.data} />
      </Section>
    </Layout>
  )
}

export const getStaticPaths = () => getPaths("/categories")

export async function getStaticProps({ params }: any) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      seo: {
        populate: "*",
      },
      articles: {
        populate: "*",
      },
    },
  })

  return {
    props: { category: matchingCategories.data[0].attributes },
    revalidate: 1,
  }
}

export default Category
