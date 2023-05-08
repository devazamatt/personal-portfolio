import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const StyledCloseDrawer = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: '1.5rem',
  bottom: '0.7rem',
  fontSize: '1.25rem',
  lineHeight: 'initial',
  minWidth: 'initial',
  color: theme.palette.text.title,
  [theme.breakpoints.up('md')]: {

  }
}))