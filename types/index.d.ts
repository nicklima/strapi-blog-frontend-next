declare module "global-interfaces" {
  import { ReactNode } from "react"

  export interface ISEO {
    id?: number
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    metaRobots?: string | null
    structuredData?: string | null
    metaViewport?: string | null
    canonicalURL?: string | null
    metaImage?: IImageData
    metaSocial?: []
    article?: boolean
  }

  export interface IGlobalContext {
    global?: {
      seo: ISEO
      siteName: string
      tileColor: string
      themeColor: string
    }
    categories?: [ICategories]
  }

  export interface ILayout {
    children: ReactNode
    seo: ISEO
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
