// packages
import styled from 'styled-components'
// components
import NavbarLink from './NavbarLink'
import NavbarSubList from './NavbarSubList'
// utils

// data
import { navigation } from '../../data/navigation'

const NavbarList = () => {
  return (
    <StyledNavbarList>
      {navigation.map((item) => {
        return (
          <StyledNavbarItem>
            <NavbarLink
              name={item.primaryTitle}
              href={item.primaryTitleHref}
              type="primary"
              key={item.primaryTitle}
            />
            <NavbarSubList cities={item.cities} />
          </StyledNavbarItem>
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

const StyledNavbarItem = styled.li``

const StyledItemInner = styled.div`
  display: flex;
  flex-direction: column;
`

export default NavbarList
