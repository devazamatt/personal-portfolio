import useScrollTrigger from '@mui/material/useScrollTrigger'
import Fade from '@mui/material/Fade'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { StyledFab } from './styled'

export const ScrollToTop = (props) => {
  const { window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#home'
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start'
      })
    }
  }

  return (
    <Fade in={trigger}>
      <StyledFab
        disableRipple
        onClick={handleClick}
        size="small"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </StyledFab>
    </Fade>
  )
}
