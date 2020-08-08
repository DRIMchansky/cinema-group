// packages
import styled from 'styled-components'
import Link from 'next/link'
// utils
import { colors } from '../../utils/cssConfig'

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
`

export default NavbarLink
