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

export const App = () => {
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
      </Layout>
    </ThemeProvider>
  )
}
