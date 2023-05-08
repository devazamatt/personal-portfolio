import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

export const StyledDataTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
  textAlign: 'center',
  letterSpacing: '0.3px',
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {}
}))
