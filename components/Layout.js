// packages
import styled from 'styled-components'
// components
import Header from './Header'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledContent = styled.div`
  flex-grow: 1;
`

const StyledFooter = styled.footer`
  flex-shrink: 0;
`

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <StyledContent>
          <Header />
          {children}
        </StyledContent>
        <StyledFooter>Footer</StyledFooter>
      </StyledLayout>
    </>
  )
}

export default Layout
