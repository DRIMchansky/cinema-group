// packages
import styled from 'styled-components'
// components
import Head from 'next/head'
// util
import GlobalStyles from '../utils/GlobalStyles'

const StyledLayout = styled.div``

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StyledLayout>
        <GlobalStyles />
        {children}
      </StyledLayout>
    </>
  )
}

export default Layout
