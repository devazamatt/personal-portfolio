import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

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
