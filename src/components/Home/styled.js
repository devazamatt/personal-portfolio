import { styled } from '@mui/material/styles'
import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Typography
} from '@mui/material'

export const HomeTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.title,
  textAlign: 'center',
  letterSpacing: '0.3px',
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {}
}))

export const HomeBlob = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '200px',
  height: '290px',
  backgroundColor: theme.palette.background.default,
  border: `2px solid ${theme.palette.primary.light}`,
  borderRadius: '6.25rem',
  margin: '0 auto',
  display: 'grid',
  justifyContent: 'center',
  placeItems: 'center',
  transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  [theme.breakpoints.up('md')]: {}
}))

export const HomeProfile = styled(Box)(({ theme }) => ({
  width: '170px',
  height: '260px',
  background:
    'linear-gradient(180deg, hsla(207, 48%, 72%, 0), hsla(207, 65%, 65%, 1))',
  borderRadius: '5.5rem',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  [theme.breakpoints.up('md')]: {}
}))

export const HomeImage = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  aspectRatio: '0.45/0.6',
  objectFit: 'cover',
  [theme.breakpoints.up('md')]: {}
}))

export const ShapeWaves = styled(Box)(({ theme }) => ({
  position: 'absolute',
  opacity: theme.palette.mode === 'light' && '0.1',
  filter: theme.palette.mode === 'dark' && 'invert(0.5)',
  width: '50px',
  left: '-1.5rem',
  top: '5rem',
  [theme.breakpoints.up('md')]: {}
}))

export const ShapeCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  opacity: theme.palette.mode === 'light' && '0.1',
  filter: theme.palette.mode === 'dark' && 'invert(0.5)',
  width: '150px',
  bottom: '-1rem',
  right: '-3rem',
  transform: 'rotate(11deg)',
  zIndex: '-1',
  [theme.breakpoints.up('md')]: {}
}))

export const Socials = styled(List)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  [theme.breakpoints.up('md')]: {}
}))

export const SocialsItem = styled(ListItem)(({ theme }) => ({
  width: 'initial',
  [theme.breakpoints.up('md')]: {}
}))

export const SocialsLink = styled(IconButton)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.palette.primary.light
      : theme.palette.text.title,
  transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}, color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  '&:hover': {
    color: theme.palette.mode === 'light'
      ? theme.palette.text.title
      : theme.palette.text.primary
  },
  [theme.breakpoints.up('md')]: {}
}))

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

export const ExperienceTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  color: theme.palette.text.secondary,
  marginBottom: '1rem',
  [theme.breakpoints.up('md')]: {}
}))

export const ExperienceDesc = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lora',
  fontWeight: 600,
  fontSize: '1.5rem',
  color: theme.palette.text.title,
  [theme.breakpoints.up('md')]: {}
}))
