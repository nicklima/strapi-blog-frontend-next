import Head from "next/head"
import { useContext } from "react"
import { IGlobalContext, ISEO, ISEOLayout } from "global-interfaces"

import { getStrapiMedia, GlobalContext } from "lib"
import { createMeta, createMetaTitle } from "utils"

const Seo = ({ seo }: { seo: ISEO | ISEOLayout }) => {
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
      {createMetaTitle(fullSeo?.metaTitle)}
      {createMeta("description", fullSeo?.metaDescription)}
      {createMeta("image", fullSeo?.shareImage)}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Seo
