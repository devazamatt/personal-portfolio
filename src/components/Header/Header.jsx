import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../store/slices/drawerSlice'
import { setMode } from '../../store/slices/themeSlice'
import { useTheme } from '@mui/material'
import { links } from '../../constants'
import { Link } from 'react-scroll'

export const Header = () => {
  const [top, setTop] = useState(false)
  const mode = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const theme = useTheme()

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset >= 50 ? setTop(true) : setTop(false)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const handleChange = () => {
    const next = mode === 'dark' ? 'light' : 'dark'
    dispatch(setMode(next))
  }

  return (
    <header className={`${top ? 'header shadow' : 'header'}`}>
      <div className="container">
        <div className="header__toolbar">
          <div className="header__left">
            <a className="logo" href="#">
              Azamat.
            </a>

            <nav className="nav">
              <ul className="nav__list">
                {links.map((link) => (
                  <li className="nav__item" key={link.key}>
                    <Link
                      className="nav__link"
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
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__right">
            <button
              className="change-theme"
              onClick={handleChange}
              type="button"
            >
              {theme.palette.mode === 'dark' ? (
                <i className="ri-sun-line"></i>
              ) : (
                <i className="ri-moon-line"></i>
              )}
            </button>
            <button
              className="open-drawer"
              onClick={() => dispatch(toggleDrawer(true))}
              type="button"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
