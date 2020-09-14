// packages
import styled from 'styled-components'
// components
import NavbarLink from './navbar-link'
import NavbarSubList from './navbar-sublist'
// utils
import { colors, breakpoints } from '../../utils/css-config'
// data
import { navigation } from '../../data/navigation'

const NavbarList = () => {
  return (
    <StyledNavbarList>
      {navigation.map((item) => {
        return (
          <StyledNavbarItem key={item.primaryTitle}>
            <NavbarLink name={item.primaryTitle} href={item.primaryTitleHref} type="primary" />
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
  z-index: 10;

  @media (min-width: ${breakpoints.medium}) {
    display: flex;
  }
`

const StyledNavbarItem = styled.li`
  position: relative;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  @media (min-width: ${breakpoints.medium}) {
    color: red;

    &:not(:first-child) {
      margin-top: 0;
    }

    &:hover,
    &:focus-within {
      & > ul {
        opacity: 1;
        transform: rotateX(0) translateX(-50%);
      }
    }
  }
`

const StyledItemInner = styled.div`
  display: flex;
  flex-direction: column;
`

export default NavbarList
