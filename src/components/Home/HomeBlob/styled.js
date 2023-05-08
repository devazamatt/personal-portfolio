import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledBlob = styled(Box)(({ theme }) => ({
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
  transition: 'background .4s',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledProfile = styled(Box)(({ theme }) => ({
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

export const StyledProfileImg = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  aspectRatio: '0.45/0.6',
  objectFit: 'cover',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledShapeWaves = styled(Box)(({ theme }) => ({
  position: 'absolute',
  opacity: theme.palette.mode === 'light' && '0.1',
  filter: theme.palette.mode === 'dark' && 'invert(0.5)',
  width: '50px',
  left: '-1.5rem',
  top: '5rem',
  [theme.breakpoints.up('md')]: {}
}))

export const StyledShapeCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  opacity: theme.palette.mode === 'light' && '0.1',
  filter: theme.palette.mode === 'dark' && 'invert(0.5)',
  width: '150px',
  bottom: '-2rem',
  right: '-3rem',
  transform: 'rotate(15deg)',
  zIndex: '-1',
  [theme.breakpoints.up('md')]: {}
}))
