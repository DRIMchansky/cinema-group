// packages
import styled from 'styled-components'
// components
import Navbar from './Navbar'
// utils
import { mobileMenuWidth } from '../utils/sizes'

const MobileHeader = ({ isActive }) => {
  return (
    <StyledMobileHeader isActive={isActive}>
      <Navbar />
    </StyledMobileHeader>
  )
}

const StyledMobileHeader = styled.header`
  display: flex;
  position: fixed;
  background: pink;
  transform: translateX(${(props) => (props.isActive ? '0' : '-100%')});
  transition: 0.2s ease-out;
  transition-property: all;
  transition-timing-function: ease-out;
  transition-timing-function: cubic-bezier(0.61, 0.67, 0.02, 0.99);
  left: 0;
  top: 0;
  height: 100%;
  width: ${mobileMenuWidth}px;
  z-index: 2;
`

export default MobileHeader
