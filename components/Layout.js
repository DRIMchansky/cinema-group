// packages
import styled from 'styled-components'
import { useState } from 'react'
// components
import Header from './Header'
import Hamburger from './Hamburger'

const Layout = ({ children }) => {
  // mobile menu state state
  const [isActive, setActive] = useState(false)

  return (
    <>
      <StyledLayout>
        <StyledContent>
          <Header />
          <Hamburger isActive={isActive} setActive={setActive} />
          {children}
        </StyledContent>
        <StyledFooter>Footer</StyledFooter>
      </StyledLayout>
    </>
  )
}

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

export default Layout
