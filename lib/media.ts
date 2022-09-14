import { getStrapiURL } from "lib"
import { IStrapiImage } from "strapi-data"

export const getStrapiMedia = (media: IStrapiImage) => {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
