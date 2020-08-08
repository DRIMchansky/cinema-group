// packages
import styled from 'styled-components'
// components
import NavbarSubLink from './NavbarSubLink'
// utils
import { colors, breakpoints, shadows } from '../../utils/cssConfig'

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

  @media (min-width: ${breakpoints.medium}) {
    position: absolute;
    background: ${colors.background};
    min-width: 15ch;
    left: 50%;
    top: calc(100% - 0.25rem);
    transition: 280ms all 120ms ease-out;
    transform: rotateX(-90deg) translateX(-50%);
    transform-origin: top center;
    opacity: 0.3;
    padding: 0.5em 0;
    border-radius: 4px;
    box-shadow: 0 0.15em 0.25em rgba(black, 0.25);

    &:before {
      content: '';
      border: 0.5rem solid transparent;
      border-bottom-color: #fff;
      position: absolute;
      top: calc(100% - 1.25rem);
      left: 50%;
      transform: translateX(-50%);
      transition: 280ms all 120ms ease-out;
      opacity: 0;
    }

    &:hover,
    &:focus-within {
    }
  }

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
