// packages
import styled from 'styled-components'
// components
import NavbarSubLink from './NavbarSubLink'
// utils
import { colors } from '../../utils/cssConfig'

const NavbarSubList = ({ cities }) => {
  return (
    <StyledNavbarSublist>
      {cities.map((city) => {
        return (
          <li key={city.city}>
            <StyledCity>{city.city}</StyledCity>
            {city.links.map((link) => {
              return <NavbarSubLink branch={link.branch} name={link.name} href={link.href} key={link.name} />
            })}
          </li>
        )
      })}
    </StyledNavbarSublist>
  )
}

const StyledNavbarSublist = styled.ul`
  color: ${colors.white};
  list-style-type: none;
  margin: 0;
  padding: 0;

  & li {
  }
`

const StyledCity = styled.span`
  font-size: 1.1rem;
  padding-left: 1rem;
  margin-top: 1rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 80%;
    width: 3px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: ${colors.primary};
  }
`

export default NavbarSubList
