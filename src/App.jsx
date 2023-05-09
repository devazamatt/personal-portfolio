import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import themeSettings from './theme'

import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Drawer } from './components/Drawer'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box } from '@mui/material'

function ScrollTop(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 500
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#home'
    )
    console.log(anchor)

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start'
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 150, right: 20 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

export const App = (props) => {
  const mode = useSelector((state) => state.theme)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark' : 'light'
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header />
        <Main />
        <Footer />
        <Drawer />
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Layout>
    </ThemeProvider>
  )
}
