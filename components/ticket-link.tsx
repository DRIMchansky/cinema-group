// packages
import React from 'react'
import styled from 'styled-components'
// components
import Button from '@material-ui/core/Button'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
// utils
import { colors, breakpoints } from '../utils/css-config'

const TicketLink: React.FC = () => {
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
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: ${breakpoints.small}) {
    right: 24px;
  }
`

const StyledTicketLink = styled(Button)`
  color: ${colors.white} !important;
  background: ${colors.lighter} !important;
`

const StyledLabel = styled.span`
  margin-right: 5px;

  @media (max-width: 600px) {
    display: none;
    visibility: hidden;
  }
`

export default TicketLink
