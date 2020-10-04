// packages
import React from 'react'
import styled from 'styled-components'
// components
import { FoldIcon, CloseIcon } from './nav-icons'
// utils
import { colors } from '../utils/css-config'

type Props = {
  isActive: Boolean
  setActive: Function
}

const Hamburger: React.FC<Props> = ({ isActive, setActive }) => {
  return (
    <StyledHamburger onClick={() => setActive(!isActive)}>
      {isActive ? <CloseIcon color={colors.white} /> : <FoldIcon color={colors.white} />}
    </StyledHamburger>
  )
}

const StyledHamburger = styled.button`
  cursor: pointer;
  padding: 15px 15px;
  display: inline-block;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;

  @media (min-width: 960px) {
    display: none;
    visibility: hidden;
  }
`

export default Hamburger
