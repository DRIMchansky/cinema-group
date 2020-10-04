// packages
import React from 'react'
import styled from 'styled-components'
// components
import Logo from './logo'
import Navbar from './navbar/navbar'
import TicketLink from './ticket-link'
import Container from '@material-ui/core/Container'
import Hamburger from './hamburger'
// utils
import { colors, breakpoints } from '../utils/css-config'

type Props = {
  isActive: Boolean
  setActive: Function
}

const Header: React.FC<Props> = ({ isActive, setActive }) => {
  return (
    <StyledHeader>
      <StyledContainer maxWidth="xl">
        <Hamburger isActive={isActive} setActive={setActive} />
        <Logo />
        <Navbar type="desctop" />
        <TicketLink />
      </StyledContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: ${colors.background};
  position: relative;
  padding: 0.6rem 0;
`

const StyledContainer = styled(Container)`
  display: flex !important;
  justify-content: center;

  @media (min-width: ${breakpoints.small}) {
    justify-content: flex-start;
    padding-left: 4rem !important;
  }

  @media (min-width: ${breakpoints.medium}) {
    padding-left: 24px !important;
  }
`

export default Header
