// packages
import styled from 'styled-components'
// components
import Logo from './Logo'
import Navbar from './Navbar/Navbar'
import TicketLink from './TicketLink'
import Container from '@material-ui/core/Container'
import Hamburger from './Hamburger'
// utils
import { background } from '../utils/colors'
import { sm } from '../utils/media'

const Header = ({ isActive, setActive }) => {
  return (
    <StyledHeader>
      <StyledContainer maxWidth="lg">
        <Hamburger isActive={isActive} setActive={setActive} />
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
  padding: 0.6rem 0;
`

const StyledContainer = styled(Container)`
  display: flex !important;
  justify-content: center;

  @media (min-width: ${sm}) {
    justify-content: flex-start;
    padding-left: 4rem !important;
  }
`

export default Header
