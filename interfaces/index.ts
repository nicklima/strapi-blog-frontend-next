import { ReactNode } from "react"

export interface IGlobalContext {
  defaultSeo?: object
  siteName?: String
}
export interface IMedia {
  data: {
    attributes: {
      url: any
    }
  }
}

export interface ICategories {
  id: number
  attributes: {
    slug: string
    name: string
  }
}

export interface IStrapiImage {
  image: {
    data: {
      attributes: any
    }
  }
  layout?: "responsive" | "fill" | "fixed" | "intrinsic" | undefined
  width?: string
  height?: string
}

export interface ILinks {
  children?: ReactNode
  to: string
  target?: string
}

export interface ITheme {
  white: string
  bg: string
  text: string
  colors: {
    primary: string
    secondary: string
    tertiary: string
  }
}
