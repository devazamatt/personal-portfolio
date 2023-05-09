import { styled } from '@mui/material/styles'
import { Box, List, ListItem } from '@mui/material'
import { Link } from 'react-scroll'

export const Nav = styled(Box)(({ theme }) => ({
  display: 'none',
  paddingInline: '1rem',
  [theme.breakpoints.up('md')]: {
    display: 'initial'
  }
}))

export const NavList = styled(List)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '1rem',
  height: '100%',
  [theme.breakpoints.up('md')]: {}
}))

export const NavItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('md')]: {}
}))

export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.light,
  transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  '&:hover': {
    color: theme.palette.text.title
  },
  '&.active': {
    color: theme.palette.text.title
  },
  [theme.breakpoints.up('md')]: {}
}))
