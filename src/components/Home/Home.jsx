import { Section } from '../Section'
import { Divider } from '../Divider'

import { HomeData } from './HomeData'
import { HomeBio } from './HomeBio'
import { HomeExperience } from './HomeExperience'

import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Grid container spacing={4}>
          <Grid container xs={12}>
            <HomeData />
          </Grid>

          <Grid container xs={12}>
            <HomeBio />
          </Grid>

          <Grid container xs={12}>
            <HomeExperience />
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </Section>
  )
}
