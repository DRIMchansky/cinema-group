// packages
import styled from 'styled-components'
// components
import NavbarLink from './NavbarLink'
// utils
import { white, primary } from '../../utils/colors'
// data
import { navigation } from '../../data/navigation'

const NavbarList = () => {
  return (
    <StyledNavbarList>
      {navigation.map((item) => {
        return (
          <NavbarLink
            name={item.primaryTitle}
            href={item.primaryTitleHref}
            type="primary"
            key={item.primaryTitle}
          />
        )
      })}
    </StyledNavbarList>
  )
}

const StyledNavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export default NavbarList
