import { styled } from '@mui/material/styles'
import { Link, List, Typography } from '@mui/material'

export const BioTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {}
}))

export const BioDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lora',
  color: theme.palette.text.title,
  paddingRight: '4rem',
  [theme.breakpoints.up('md')]: {}
}))

export const ServiceDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lora',
  color: theme.palette.text.title,
  [theme.breakpoints.up('md')]: {}
}))

export const ContactList = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {}
}))

export const ContactLink = styled(Link)(({ theme }) => ({
  fontFamily: ['Lora', 'serif'].join(','),
  color: theme.palette.text.title,
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.palette.text.secondary
  },
  [theme.breakpoints.up('md')]: {}
}))
