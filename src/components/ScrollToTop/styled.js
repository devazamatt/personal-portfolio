import { styled } from '@mui/material/styles'
import { Fab } from '@mui/material'

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '7.5rem',
  right: '1rem',
  backgroundColor: theme.palette.background.default,
  // boxShadow: '0 4px 12px hsla(207, 24%, 35%, 0.15)',
  color: theme.palette.text.title,
  '&:hover': {
    backgroundColor: theme.palette.background.default
  },
  [theme.breakpoints.up('md')]: {
    bottom: '4rem'
  }
}))
