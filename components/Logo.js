// packages
import styled from 'styled-components'

const Logo = () => {
  return <StyledLogo href="/" />
}

const StyledLogo = styled.a`
  display: block;
  height: 2.4rem;
  width: 7rem;
  background-image: url('/logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  transform: translateY(-5%);

  @media (min-width: 960px) {
    height: 3.4rem;
    width: 9rem;
  }
`

export default Logo
