export interface IGlobalContext {
  global?: {
    seo: ISEO
    siteName: string
    tileColor: string
    themeColor: string
  }
  categories?: [ICategories]
}
export interface ISEO {
  id?: number
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  metaRobots?: string | null
  structuredData?: string | null
  metaViewport?: string | null
  canonicalURL?: string | null
  metaImage?: any
  metaSocial?: []
  article?: boolean
}

export interface IMedia {
  data: {
    attributes: any
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
  image: IMedia
  layout?: "responsive" | "fill" | "fixed" | "intrinsic" | undefined
  width?: string
  height?: string
}

export interface IImageLoader {
  src: string
  width?: number
  quality?: number
  format?: number
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
