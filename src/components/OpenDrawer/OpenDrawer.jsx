import { StyledOpenDrawer } from './styled'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../../store/slices/drawerSlice'

export const OpenDrawer = () => {
  const dispatch = useDispatch()

  return (
    <StyledOpenDrawer onClick={() => dispatch(toggleDrawer(true))}>
      <i className="ri-menu-line"></i>
    </StyledOpenDrawer>
  )
}
