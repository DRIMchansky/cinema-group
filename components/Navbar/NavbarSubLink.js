// packages
import styled from 'styled-components'
// components
import Link from 'next/link'
// utils
import { colors, breakpoints } from '../../utils/cssConfig'

const NavbarSubLink = ({ branch, name, href }) => {
  return (
    <Link href={href} passHref>
      <StyledNavbarSubLink>
        <StyledBranch>{branch}</StyledBranch>
        <StyledName>{name}</StyledName>
      </StyledNavbarSubLink>
    </Link>
  )
}

const StyledNavbarSubLink = styled.a`
  display: block;
  padding: 0.4rem 0 0.4rem 0.5rem;
  color: ${colors.white};
  transition: background 0.1s ease;
  text-decoration: none;

  &:hover {
    background: ${colors.lighter};
  }

  @media (min-width: ${breakpoints.medium}) {
    border-radius: 4px;
  }
`
const StyledBranch = styled.span`
  display: block;
  color: ${colors.primary};
  font-size: 0.75rem;
`

const StyledName = styled.span`
  display: block;
  font-size: 1.1rem;
`

export default NavbarSubLink
