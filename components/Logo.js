// packages
import styled from 'styled-components'

const Logo = () => {
  return <StyledLogo href="/" />
}

const StyledLogo = styled.a`
  display: block;
  height: 2.4rem;
  width: 9rem;
  background-image: url('/logo_cinema.svg');
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 960px) {
    height: 3.4rem;
    width: 10rem;
  }
`

export default Logo
