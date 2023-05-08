import { ExperienceDesc, ExperienceTitle } from './styled'
import Grid from '@mui/material/Unstable_Grid2'

export const HomeExperience = () => {
  return (
    <>
      <Grid xs={12}>
        <ExperienceTitle variant="h3" component="h3">
          Years of experience
        </ExperienceTitle>

        <ExperienceDesc>01+</ExperienceDesc>
      </Grid>

      <Grid xs={12}>
        <ExperienceTitle variant="h3" component="h3">
          Completed projects
        </ExperienceTitle>

        <ExperienceDesc>02+</ExperienceDesc>
      </Grid>

      <Grid xs={12}>
        <ExperienceTitle variant="h3" component="h3">
          Companies worked
        </ExperienceTitle>

        <ExperienceDesc>02+</ExperienceDesc>
      </Grid>
    </>
  )
}
