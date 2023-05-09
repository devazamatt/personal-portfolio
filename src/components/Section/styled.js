import { styled } from '@mui/material/styles'
import { Box, Typography, Divider } from '@mui/material'

export const StyledSection = styled(Box)(({ theme }) => ({
  paddingBlock: '2.5rem',
  [theme.breakpoints.up('lg')]: {
    paddingBlock: '8rem 0'
  }
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: ['Lora', 'serif'].join(','),
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.text.title,
  marginBottom: '0.25rem',
  [theme.breakpoints.up('lg')]: {}
}))

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.813rem',
  color: theme.palette.text.secondary,
  marginBottom: '3rem',
  [theme.breakpoints.up('lg')]: {}
}))

export const SectionText = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {}
}))

export const SectionBorder = styled(Divider)(({ theme }) => ({
  borderStyle: 'dashed',
  borderColor: theme.palette.text.title,
  borderBottomWidth: `2px`,
  paddingBottom: '3.5rem',
  [theme.breakpoints.up('lg')]: {
    paddingBottom: '6rem'
  }
}))
