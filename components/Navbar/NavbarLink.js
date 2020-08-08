// packages
import styled from 'styled-components'
import Link from 'next/link'
// utils
import { colors, breakpoints } from '../../utils/cssConfig'

const NavbarLink = ({ name, href }) => {
  return (
    <Link href={href} passHref>
      <StyledNavbarLink>{name}</StyledNavbarLink>
    </Link>
  )
}

const StyledNavbarLink = styled.a`
  display: block;
  color: ${colors.white};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.3rem;
  padding: 0.7rem 0 0.3rem 0.5rem;
  width: 100%;

  @media (min-width: ${breakpoints.medium}) {
    font-weight: 400;
    font-size: 1.1rem;
    padding: 0.5rem;

    &:hover {
      opacity: 0.8;
    }
  }
`

export default NavbarLink
