import App, { AppContext, AppProps } from 'next/app'
import { Provider, useCreateStore } from 'store'

import { ThemeProvider } from 'styled-components'
import { IAppData } from 'global-interfaces'

import { GlobalStyle, theme } from 'styles'
import { fetchAPI } from 'lib'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { appData } = pageProps as IAppData
  const store = useCreateStore(appData)

  return (
    <Provider createStore={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)

  // Fetch global site settings from Strapi
  const [categoriesRes, globalRes] = await Promise.all([
    fetchAPI('/categories', { populate: '*' }),
    fetchAPI('/global', {
      populate: {
        themeColor: '*',
        tileColor: '*',
        favicon: '*',
        seo: {
          populate: '*',
        },
      },
    }),
  ])

  const globalProps = {
    global: globalRes.data.attributes,
    categories: categoriesRes.data,
  }

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      appData: globalProps,
    },
  }
}

export default MyApp
