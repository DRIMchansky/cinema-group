// packages
import React from 'react'
import styled from 'styled-components'
// components
import Navbar from './navbar/navbar'
// utils
import { colors, constants, breakpoints } from '../utils/css-config'

type Props = {
  isActive: Boolean
}

const MobileHeader: React.FC<Props> = ({ isActive }) => {
  return (
    <StyledMobileHeader<any> isActive={isActive}>
      <Navbar type="mobile" />
    </StyledMobileHeader>
  )
}

const StyledMobileHeader = styled.nav<Props>`
  display: flex;
  position: fixed;
  background: ${colors.white};
  transform: translateX(${(props) => (props.isActive ? '0' : '-100%')});
  transition: 0.2s ease-out;
  transition-property: all;
  transition-timing-function: ease-out;
  transition-timing-function: cubic-bezier(0.61, 0.67, 0.02, 0.99);
  left: 0;
  top: 0;
  height: 100%;
  width: ${constants.MOBILE_MENU_WIDTH}px;
  z-index: 3;
  padding-top: 4rem;
  overflow-y: scroll;
  background: ${colors.background};

  @media (min-width: ${breakpoints.medium}) {
    display: none;
    visibility: none;
  }
`

export default MobileHeader
