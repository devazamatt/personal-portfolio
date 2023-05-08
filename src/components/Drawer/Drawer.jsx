import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../store/slices/drawerSlice'
import {
  StyledDrawer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledNav
} from './styled'
import { CloseDrawer } from '../CloseDrawer'
import { links } from '../../constants'

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
                href={link.url}
                onClick={() => dispatch(toggleDrawer(false))}
              >
                {link.icon} {link.label}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
        <CloseDrawer />
      </StyledNav>
    </StyledDrawer>
  )
}
