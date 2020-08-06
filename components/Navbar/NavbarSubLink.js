// packages
import styled from 'styled-components'
// components
import Link from 'next/link'

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
`
const StyledBranch = styled.span``

const StyledName = styled.span``

export default NavbarSubLink
