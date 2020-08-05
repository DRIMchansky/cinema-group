// packages
import styled from 'styled-components'

const Logo = () => {
  return <StyledLogo href="/" />
}

const StyledLogo = styled.a`
  display: block;
  height: 3.4rem;
  width: 10rem;
  background-image: url('/logo_cinema.svg');
  background-repeat: no-repeat;
  background-size: contain;
`

export default Logo
