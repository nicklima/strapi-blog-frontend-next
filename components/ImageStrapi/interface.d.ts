import { StrapiImage } from "strapi-data"

interface IImage {
  image: StrapiImage
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
