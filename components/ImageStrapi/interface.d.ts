import { IStrapiImage } from "strapi-data"

interface IImage {
  image: IStrapiImage
  layout?: "responsive" | "fill" | "fixed" | "intrinsic" | undefined
  width?: string
  height?: string
}

interface IImageLoader {
  src: string
  width?: number
  quality?: number
  format?: number
}
