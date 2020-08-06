// packages
import styled from 'styled-components'
import Link from 'next/link'
// utils
import { white, primary } from '../../utils/colors'

const NavbarLink = ({ name, href, type }) => {
  return (
    <Link href={href} passHref>
      <StyledNavbarLink type={type}>{name}</StyledNavbarLink>
    </Link>
  )
}

const StyledNavbarLink = styled.a`
  display: block;
  color: ${white};
  text-decoration: none;
  font-weight: 500;
  font-size: ${(props) => (props.type === 'primary' ? '1.2rem' : '1rem')};
  padding: 0.3rem 0.5rem;
  width: 100%;

  &:hover {
  }
`

export default NavbarLink
