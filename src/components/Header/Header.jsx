import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../store/slices/drawerSlice'
import { setMode } from '../../store/slices/themeSlice'
import { Navbar } from '../Navbar'
import { Container, IconButton, Stack, useTheme } from '@mui/material'
import { StyledHeader, StyledLogo, StyledToolbar } from './styled'
import MoonIcon from '@mui/icons-material/DarkMode'
import SunIcon from '@mui/icons-material/WbSunny'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
  const mode = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const theme = useTheme()

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  const handleChange = () => {
    const next = mode === 'dark' ? 'light' : 'dark'
    dispatch(setMode(next))
  }

  return (
    <StyledHeader color="inherit">
      <Container maxWidth="lg">
        <StyledToolbar>
          <Stack direction="row" justifyContent="space-between" flex={1}>
            <StyledLogo component="a" href="#home">
              Azamat.
            </StyledLogo>
            <Navbar />
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton onClick={handleChange} color="inherit">
              {theme.palette.mode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </IconButton>
            <IconButton
              onClick={() => dispatch(toggleDrawer(true))}
              color="inherit"
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </StyledToolbar>
      </Container>
    </StyledHeader>
  )
}
