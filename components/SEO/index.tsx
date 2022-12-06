import { IGlobalObj, ISEO, ISEOLayout } from 'global-interfaces'
import Head from 'next/head'

import { getStrapiMedia } from 'lib'
import { useStore } from 'store'
import { createMeta, createMetaTitle } from 'utils'

const Seo = ({ seo }: { seo: ISEO | ISEOLayout }): JSX.Element => {
  const { global } = useStore() as IGlobalObj

  let seoData = {
    ...global?.seo,
  } as ISEO

  if (seo) {
    seoData = {
      ...seoData,
      ...seo,
    }
  }

  const fullSeo = {
    ...seoData,
    metaTitle: `${seoData.metaTitle} | ${global?.siteName}`,
    shareImage: getStrapiMedia(seoData.metaImage),
  }

  return (
    <Head>
      <meta content={global?.themeColor} name="theme-color" />
      <meta content={global?.tileColor} name="msapplication-TileColor" />
      {createMetaTitle(fullSeo?.metaTitle)}
      {createMeta('description', fullSeo?.metaDescription)}
      {createMeta('image', fullSeo?.shareImage)}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Seo
