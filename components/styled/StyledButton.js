// packages
import styled from 'styled-components'
// components
import Button from '@material-ui/core/Button'
// util
import { primary, black } from '../../utils/colors'

const StyledButton = styled(({ color, ...other }) => (
  <Button classes={{ root: 'root-class', label: 'label' }} {...other} />
))`
  &.root-class {
    background: ${black};
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;

    &:hover {
      background: ${black};
      opacity: 0.8;
    }
  }

  & .label {
    color: white;
  }
`

export default StyledButton
