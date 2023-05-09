import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const ShapeCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '5rem',
  right: '1.5rem',
  width: '70px',
  transform: 'rotate(30deg)',
  opacity: theme.palette.mode === 'light' && '0.1',
  filter: theme.palette.mode === 'dark' && 'invert(0.5)',
  [theme.breakpoints.up('md')]: {
    width: '200px',
    top: '13rem',
    right: '4rem'
  }
}))
