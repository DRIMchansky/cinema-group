// packages
import styled from 'styled-components'
// components
import NavbarSubLink from './NavbarSubLink'

const NavbarSubList = ({ cities }) => {
  return (
    <StyledNavbarSublist>
      {cities.map((city) => {
        return (
          <li key={city.city}>
            <StyledCity>{city.city}</StyledCity>
            {city.links.map((link) => {
              return <NavbarSubLink branch={link.branch} name={link.name} href={link.href} />
            })}
          </li>
        )
      })}
    </StyledNavbarSublist>
  )
}
const StyledNavbarSublist = styled.ul`
  & li {
  }
`

const StyledCity = styled.span``

export default NavbarSubList
