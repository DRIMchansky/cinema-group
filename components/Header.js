// packages
import styled from 'styled-components'
// components
import Logo from './Logo'
import Navbar from './Navbar'
import TicketLink from './TicketLink'
import Container from '@material-ui/core/Container'
// utils
import { background } from '../utils/colors'

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer maxWidth="lg">
        <Logo />
        <Navbar type="desctop" />
        <TicketLink />
      </StyledContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: ${background};
  position: relative;
  padding: 0.5rem 0;
`

const StyledContainer = styled(Container)`
  display: flex !important;
  justify-content: center;
`

export default Header
