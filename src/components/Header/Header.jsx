import { Box, Container } from '@mui/material'
import { StyledAppbar, StyledToolbar } from './styled'

import { Logo } from '../Logo'
import { Navbar } from '../Navbar'
import { ToggleTheme } from '../ToggleTheme'
import { OpenDrawer } from '../OpenDrawer'

export const Header = () => {
  return (
    <StyledAppbar>
      <Container>
        <StyledToolbar>
          <Box>
            <Logo />
            <Navbar />
          </Box>

          <Box>
            <ToggleTheme />
            <OpenDrawer />
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppbar>
  )
}
