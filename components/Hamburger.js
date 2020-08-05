// packages
import styled from 'styled-components'
// components
import { FoldIcon, CloseIcon } from './NavIcons'

const Hamburger = ({ isActive, setActive }) => {
  return (
    <StyledHamburger onClick={() => setActive(!isActive)}>
      {isActive ? <CloseIcon /> : <FoldIcon />}
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
  left: 0.6rem;
  top: 0.6rem;
  z-index: 3;
`

export default Hamburger