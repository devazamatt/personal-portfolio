import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const StyledToggleTheme = styled(Button)(({ theme }) => ({
  fontSize: '1.25rem',
  lineHeight: 'initial',
  minWidth: 'initial',
  color: theme.palette.text.title
}))
