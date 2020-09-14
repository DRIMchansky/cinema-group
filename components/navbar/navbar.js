// packages
import styled from 'styled-components'
// components
import NavbarList from './navbar-list'
// utils
import { breakpoints } from '../../utils/css-config'

const Navbar = ({ type }) => {
  return (
    <StyledNavbar type={type}>
      <NavbarList />
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  width: 100%;
  display: ${(props) => (props.type === 'mobile' ? 'block' : 'none')};
  visibility: ${(props) => (props.type === 'mobile' ? 'visible' : 'hidden')};

  @media (min-width: ${breakpoints.medium}) {
    display: ${(props) => (props.type === 'mobile' ? 'none' : 'flex')};
    visibility: ${(props) => (props.type === 'mobile' ? 'hidden' : 'visible')};
    align-items: center;
    margin-left: 2rem;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-left: 4rem;
  }
`

export default Navbar
