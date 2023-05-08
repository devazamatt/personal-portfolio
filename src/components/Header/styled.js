import { styled } from '@mui/material/styles'
import { AppBar, Toolbar } from '@mui/material'

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  top: 'initial',
  bottom: '2rem'
}))

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 4px 20px hsla(207, 24%, 35%, 0.1)'
      : '0 5px 20px hsla(207, 24%, 8%, 20)',
  borderRadius: '3rem',
  transition: 'background 0.4s, box-shadow 0.4s'
}))
