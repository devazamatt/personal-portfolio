import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../store/slices/drawerSlice'
import {
  CloseDrawer,
  StyledDrawer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNav
} from './styled'
import { links } from '../../constants'
import CloseIcon from '@mui/icons-material/Close'

export const Drawer = () => {
  const { isOpen } = useSelector((state) => state.drawer)
  const dispatch = useDispatch()

  return (
    <StyledDrawer
      anchor="bottom"
      open={isOpen}
      onClose={() => dispatch(toggleDrawer(false))}
    >
      <StyledNav component="nav">
        <StyledList>
          {links.map((link) => (
            <StyledListItem key={link.key}>
              <StyledLink
                className="nav__link"
                href={`#${link.url}`}
                onClick={() => dispatch(toggleDrawer(false))}
                activeClass="active"
                to={link.url}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                delay={1000}
              >
                {link.icon} {link.label}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
        <CloseDrawer onClick={() => dispatch(toggleDrawer(false))}>
          <CloseIcon />
        </CloseDrawer>
      </StyledNav>
    </StyledDrawer>
  )
}
