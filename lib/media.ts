import { getStrapiURL } from "lib"
import { StrapiImage } from "strapi-data"

export const getStrapiMedia = (media: StrapiImage) => {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
