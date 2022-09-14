declare module "global-interfaces" {
  import { ReactNode } from "react"
  import { IStrapiImage } from "strapi-data"

  interface ISEOOptions {
    id?: number
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    metaRobots?: string | null
    structuredData?: string | null
    metaViewport?: string | null
    canonicalURL?: string | null
    metaSocial?: []
    article?: boolean
  }
  export interface ISEO extends ISEOOptions {
    metaImage: IStrapiImage
  }
  export interface ISEOLayout extends ISEOOptions {
    metaImage?: IStrapiImage
  }

  export interface IGlobalContext {
    global?: {
      seo: ISEOGlobal
      siteName: string
      tileColor: string
      themeColor: string
    }
    categories?: [ICategories]
  }

  export interface ILayout {
    children: ReactNode
    seo: ISEOLayout
  }

  export interface ICategoriesAttr {
    slug: string
    name: string
  }

  export interface ICategories {
    id: number
    attributes: ICategoriesAttr
  }
}
