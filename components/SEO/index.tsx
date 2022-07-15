import Head from "next/head"
import { useContext } from "react"

import { IGlobalContext, ISEO } from "interfaces"
import { getStrapiMedia, GlobalContext } from "lib"

const Seo = ({ seo }: { seo: ISEO }) => {
  // todo: fix the GLOBAL types
  const globalData = useContext<IGlobalContext>(GlobalContext)
  const siteData = globalData.global

  let seoData = {
    ...globalData?.global?.seo,
  } as IGlobalContext as ISEO

  if (seo) {
    seoData = {
      ...seoData,
      ...seo,
    }
  }

  const fullSeo = {
    ...seoData,
    // Add title suffix
    metaTitle: `${seoData.metaTitle} | ${siteData?.siteName}`,
    // Get full image URL
    shareImage: getStrapiMedia(seoData.metaImage),
  }

  return (
    <Head>
      <meta content={siteData?.themeColor} name="theme-color" />
      <meta content={siteData?.tileColor} name="msapplication-TileColor" />
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
