import { styled } from '@mui/material/styles'
import { Link, List, ListItem } from '@mui/material'

export const StyledSocialList = styled(List)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledSocialListItem = styled(ListItem)(({ theme }) => ({
  width: 'initial',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledSocialLink = styled(Link)(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.palette.primary.light,
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.palette.text.title
  },
  [theme.breakpoints.up('md')]: {}
}))
