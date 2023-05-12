import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../store/slices/drawerSlice'
import { StyledDrawer } from './styled'
import { links } from '../../constants'
import { Link } from 'react-scroll'

export const Drawer = () => {
  const { isOpen } = useSelector((state) => state.drawer)
  const dispatch = useDispatch()

  return (
    <StyledDrawer
      anchor="bottom"
      open={isOpen}
      onClose={() => dispatch(toggleDrawer(false))}
    >
      <nav className="nav-drawer">
        <ul className="nav-drawer__list">
          {links.map((link) => (
            <li className="nav-drawer__item" key={link.key}>
              <Link
                className="nav-drawer__link"
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
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="close-drawer"
          onClick={() => dispatch(toggleDrawer(false))}
          type="button"
        >
          <i className="ri-close-line"></i>
        </button>
      </nav>
    </StyledDrawer>
  )
}
