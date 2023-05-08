import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../../store/slices/drawerSlice'
import { StyledCloseDrawer } from './styled'

export const CloseDrawer = () => {
  const dispatch = useDispatch()

  return (
    <StyledCloseDrawer onClick={() => dispatch(toggleDrawer(false))}>
      <i className="ri-close-line"></i>
    </StyledCloseDrawer>
  )
}
