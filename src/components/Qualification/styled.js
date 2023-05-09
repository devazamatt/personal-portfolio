import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const ShapeCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '-3rem',
  bottom: '12rem',
  width: '150px',
  transform: 'rotate(15deg)',
  opacity: theme.palette.mode === 'light' && '0.1',
  filter: theme.palette.mode === 'dark' && 'invert(0.5)',
  [theme.breakpoints.up('md')]: {}
}))
