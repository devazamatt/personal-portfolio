import { styled } from '@mui/material/styles'
import { AppBar, Box, Toolbar } from '@mui/material'

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  top: 'initial',
  right: '1rem',
  bottom: '2rem',
  left: '1rem',
  width: 'initial',
  boxShadow: '0 4px 20px hsla(207, 24%, 35%, 0.1)',
  borderRadius: '3rem',
  transition: `box-shadow ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}, background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  [theme.breakpoints.up('md')]: {
    top: 0,
    right: 0,
    bottom: 'initial',
    left: 0,
    borderRadius: 0
  }
}))

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  columnGap: '1rem',
  [theme.breakpoints.up('xs')]: {
    minHeight: '64px'
  }
}))

export const StyledLogo = styled(Box)(({ theme }) => ({
  fontFamily: ['Lora', 'serif'].join(','),
  fontWeight: 500,
  padding: '8px',
  color: theme.palette.text.title,
  [theme.breakpoints.up('md')]: {}
}))
