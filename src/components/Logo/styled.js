import { styled } from '@mui/material/styles'
import { Link } from '@mui/material'

export const StyledLogo = styled(Link)(({ theme }) => ({
  fontFamily: 'Lora',
  fontWeight: 500,
  color: theme.palette.text.title
}))
