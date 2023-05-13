import { styled } from '@mui/material/styles'
import { Drawer } from '@mui/material'

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background:
      theme.palette.mode === 'light'
        ? theme.palette.background.default
        : theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === 'light'
        ? '0 4px 20px hsla(207, 24%, 35%, 0.1)'
        : '0 4px 20px hsla(207, 24%, 8%, 0.4)',
    borderRadius: '2rem',
    bottom: '2rem',
    right: '1rem',
    left: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '380px',
      margin: '0 auto',
      right: '0',
      left: '0'
    }
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))
