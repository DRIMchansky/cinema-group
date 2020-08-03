import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from '../utils/GlobalStyles'

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preload" as="style" href="$CSS&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#232946" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Рублион Синема" />
          <meta name="application-name" content="Рублион Синема" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#232946" />
        </Head>
        <GlobalStyles />
        <CssBaseline />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
