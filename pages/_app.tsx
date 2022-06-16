import App from "next/app"
import type { AppProps } from "next/app"

import { fetchAPI } from "lib/api"
import { GlobalContext } from "lib/global"
import GlobalStyle from "styles/global"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { global, categories } = pageProps
  const GlobalStyleProxy: any = GlobalStyle

  return (
    <GlobalContext.Provider value={{ global: global, categories }}>
      <GlobalStyleProxy />
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)

  // Fetch global site settings from Strapi
  const [categoriesRes, globalRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/global", {
      populate: {
        themeColor: "*",
        tileColor: "*",
        favicon: "*",
        seo: {
          populate: "*",
        },
      },
    }),
  ])

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      global: globalRes.data.attributes,
      categories: categoriesRes.data,
    },
  }
}

export default MyApp
