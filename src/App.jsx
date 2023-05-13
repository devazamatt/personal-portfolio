import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import themeSettings from './theme'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Qualification } from './components/Qualification'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Drawer } from './components/Drawer'
import { ScrollToTop } from './components/ScrollToTop'

export const App = () => {
  const mode = useSelector((state) => state.theme)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  useEffect(() => {
    document.body.className = mode === 'dark' ? 'dark' : 'light'
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Qualification />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Drawer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
