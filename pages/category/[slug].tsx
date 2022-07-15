import dynamic from "next/dynamic"

import Layout from "components/Layout"
const Articles = dynamic(() => import("components/Articles"))

import { fetchAPI, getPaths } from "lib"
import { Container, Section, Title } from "styles/shared"

const Category = ({ category }: { category: any }) => {
  const { seo, name, articles } = category
  const seoObj = {
    metaTitle: name,
    ...seo,
  }

  return (
    <Layout seo={seoObj}>
      <Section>
        <Container>
          <Title>{name}</Title>
          <Articles articles={articles?.data} />
        </Container>
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
