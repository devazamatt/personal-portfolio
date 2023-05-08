import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const StyledOpenDrawer = styled(Button)(({ theme }) => ({
  fontSize: '1.25rem',
  lineHeight: 'initial',
  minWidth: 'initial',
  color: theme.palette.text.title,
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))
