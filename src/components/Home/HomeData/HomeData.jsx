import Grid from '@mui/material/Unstable_Grid2'

import { StyledDataTitle } from './styled'

import { HomeBlob } from '../HomeBlob'
import { HomeSocial } from '../HomeSocial'

export const HomeData = () => {
  return (
    <>
      <Grid xs={12}>
        <StyledDataTitle variant="h1" component="h1">
          Hi, I'm Azamat <br /> Frontend Developer <br /> Based in Tashkent
        </StyledDataTitle>
      </Grid>
      <Grid xs={12}>
        <HomeBlob />
      </Grid>
      <Grid xs={12}>
        <HomeSocial />
      </Grid>
    </>
  )
}
