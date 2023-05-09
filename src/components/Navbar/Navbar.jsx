import { links } from '../../constants'
import { Nav, NavList, NavItem, NavLink } from './styled'

export const Navbar = () => {
  return (
    <Nav component="nav">
      <NavList disablePadding>
        {links.map((link) => (
          <NavItem key={link.key} disablePadding>
            <NavLink
              href={`#${link.url}`}
              activeClass="active"
              to={link.url}
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              delay={1000}
            >
              {link.label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  )
}
