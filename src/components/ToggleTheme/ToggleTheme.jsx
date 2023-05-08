import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../../store/slices/themeSlice'
import { useTheme } from '@mui/material'
import { StyledToggleTheme } from './styled'

export const ToggleTheme = () => {
  const mode = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const theme = useTheme()

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  const handleChange = () => {
    const next = mode === 'dark' ? 'light' : 'dark'
    dispatch(setMode(next))
  }

  return (
    <StyledToggleTheme onClick={handleChange}>
      {theme.palette.mode === 'dark' ? (
        <i className="ri-sun-line"></i>
      ) : (
        <i className="ri-moon-line"></i>
      )}
    </StyledToggleTheme>
  )
}
