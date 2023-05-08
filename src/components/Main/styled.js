import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledMain = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {}
}))
