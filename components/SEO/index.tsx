import Head from "next/head"
import { useContext } from "react"

import { IGlobalContext } from "interfaces"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"

const Seo = ({ seo }: any) => {
  const { defaultSeo, siteName } = useContext<IGlobalContext>(GlobalContext)
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  }
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: getStrapiMedia(seoWithDefaults.shareImage),
  }

  return (
    <Head>
      {/* ToDo: Grab these values from Strapi */}
      <meta content="#fff" name="theme-color" />
      <meta content="#000" name="msapplication-TileColor" />
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Seo
