import { styled } from '@mui/material/styles'
import {Box, Drawer, IconButton, List, ListItem} from '@mui/material'
import { Link } from 'react-scroll'

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiModal-backdrop': {
    backgroundColor: 'transparent'
  },
  '& .MuiDrawer-paper': {
    background:
      theme.palette.mode === 'light'
        ? theme.palette.background.default
        : theme.palette.background.paper,
    boxShadow: '0 4px 20px hsla(207, 24%, 35%, 0.1)',
    borderRadius: '2rem',
    bottom: '2rem',
    right: '1rem',
    left: '1rem'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))

export const StyledNav = styled(Box)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledList = styled(List)(({ theme }) => ({
  padding: '2rem 1.5rem 5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyContent: 'center',
  gap: '2rem 3rem',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '0.25rem',
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.palette.text.title
  },
  '& i': {
    fontSize: '1.25rem'
  },
  '&.active': {
    color: theme.palette.text.title
  },
  [theme.breakpoints.up('md')]: {}
}))

export const CloseDrawer = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '1.5rem',
  bottom: '0.7rem',
  [theme.breakpoints.up('md')]: {}
}))
