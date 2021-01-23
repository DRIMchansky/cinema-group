// packages
import React from 'react'
import styled from 'styled-components'
// components
import NavbarLink from './navbar-link'
import NavbarSubList from './navbar-sublist'
// utils
import { TMixedObject } from '../../utils/types'
import { breakpoints } from '../../utils/css-config'
// data
import navigation from '../../data/navigation.json'


const NavbarList: React.FC = () => {
  return (
    <StyledNavbarList>
      {navigation.map((item: TMixedObject) => {
        return (
          <StyledNavbarItem key={item.primaryTitle}>
            <NavbarLink name={item.primaryTitle} href={item.primaryTitleHref} />
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

export default NavbarList
