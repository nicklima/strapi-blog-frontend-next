import { getStrapiURL } from "lib"
import { IMedia } from "interfaces"

export const getStrapiMedia = (media: IMedia) => {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
