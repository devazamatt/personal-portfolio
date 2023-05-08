import {
  StyledBlob,
  StyledProfileImg,
  StyledProfile,
  StyledShapeCircle,
  StyledShapeWaves
} from './styled'

import ProfileImg from '../../../assets/images/profile.png'
import ShapeWavesImg from '../../../assets/images/shape-waves.svg'
import ShapeCircleImg from '../../../assets/images/shape-circle.svg'

export const HomeBlob = () => {
  return (
    <StyledBlob>
      <StyledProfile>
        <StyledProfileImg component="img" src={ProfileImg} alt="Profile image" />
      </StyledProfile>

      <StyledShapeWaves
        component="img"
        src={ShapeWavesImg}
        alt="Shape waves image"
      />
      <StyledShapeCircle
        component="img"
        src={ShapeCircleImg}
        alt="Shape circle image"
      />
    </StyledBlob>
  )
}
