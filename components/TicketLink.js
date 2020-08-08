// packages
import styled from 'styled-components'
// components
import Button from '@material-ui/core/Button'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
// utils
import { colors } from '../utils/cssConfig'

const TicketLink = () => {
  return (
    <StyledWrapper>
      <StyledTicketLink disableElevation disableRipple href="/">
        <StyledLabel>в кино</StyledLabel>
        <ConfirmationNumberIcon />
      </StyledTicketLink>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

const StyledTicketLink = styled(Button)`
  color: ${colors.white} !important;
`

const StyledLabel = styled.span`
  margin-right: 5px;

  @media (max-width: 600px) {
    display: none;
    visibility: hidden;
  }
`

export default TicketLink
