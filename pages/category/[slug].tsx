import dynamic from "next/dynamic"

import Layout from "components/Layout"
const Articles = dynamic(() => import("components/Articles"))

import { fetchAPI } from "lib/api"
import { Container, Section, Title } from "styles/shared"

const Category = ({ category, categories }: any) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  }

  return (
    <Layout seo={seo} categories={categories.data}>
      <Section>
        <Container>
          <Title>{category.attributes.name}</Title>
          <Articles articles={category.attributes.articles.data} />
        </Container>
      </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })

  return {
    paths: categoriesRes.data.map(
      (category: { attributes: { slug: any } }) => ({
        params: {
          slug: category.attributes.slug,
        },
      })
    ),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  })
  const allCategories = await fetchAPI("/categories")

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
    },
    revalidate: 1,
  }
}

export default Category
