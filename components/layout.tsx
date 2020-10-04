// packages
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
// components
import MobileHeader from './mobile-header'

import Header from './header'

type Props = {
  children: JSX.Element
}

type StateTypes = {
  isActive: Boolean
  setActive: Function
}

const Layout: React.FC<Props> = ({ children }) => {
  // mobile menu state state
  const [isActive, setActive] = useState(false)

  return (
    <>
      <StyledLayout>
        <StyledContent>
          <MobileHeader isActive={isActive} />
          <Header isActive={isActive} setActive={setActive} />
          <OverflowStyled<any> isActive={isActive} onClick={() => setActive(!isActive)} />
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

const OverflowStyled = styled.div<StateTypes>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #000;
  transition: opacity 0.2s ease-out;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  opacity: ${(props) => (props.isActive ? '0.7' : '0')};
  z-index: 2;
`

export default Layout
