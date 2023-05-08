import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledName = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {}
}))
