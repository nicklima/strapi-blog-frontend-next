declare module "strapi-data" {
  export interface IStrapiImage {
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
