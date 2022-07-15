import { fetchAPI } from "lib"

export async function getPaths(path: string) {
  const rsp = await fetchAPI(path, { fields: ["slug"] })

  return {
    paths: rsp.data.map((item: { attributes: { slug: string } }) => ({
      params: {
        slug: item.attributes.slug,
      },
    })),
    fallback: false,
  }
}
