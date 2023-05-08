import { styled } from '@mui/material/styles'
import { Divider } from '@mui/material'

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderStyle: 'dashed',
  borderColor: theme.palette.text.title,
  borderBottomWidth: `2px`,
  paddingBottom: '3.5rem',
  [theme.breakpoints.up('lg')]: {
    paddingBottom: '6rem'
  }
}))
