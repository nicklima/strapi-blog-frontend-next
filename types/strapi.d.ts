declare module "strapi-data" {
  export interface StrapiImage {
    data: {
      attributes: {
        alternativeText: string
        caption: string
        height: number
        name: string
        size: number
        url: string
        width: number
      }
    }
  }
}
