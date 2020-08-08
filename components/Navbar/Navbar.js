// packages
import styled from 'styled-components'
// components
import NavbarList from './NavbarList'
// utils

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

  @media (min-width: 960px) {
    display: ${(props) => (props.type === 'mobile' ? 'none' : 'block')};
    visibility: ${(props) => (props.type === 'mobile' ? 'hidden' : 'visible')};
  }
`

export default Navbar
