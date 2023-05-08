import {
  BioDescription,
  BioTitle,
  ContactLink,
  ContactList,
  ServiceDescription
} from './styled'

import { ListItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export const HomeBio = () => {
  return (
    <>
      <Grid xs={12}>
        <BioTitle component="h3">BIOGRAPHY</BioTitle>
        <BioDescription>
          Hi, I'm Azamat, Frontend Developer. Passionate about designing
          beautiful web interfaces. Based in Tashkent.
        </BioDescription>
      </Grid>

      <Grid xs={12}>
        <BioTitle component="h3">CONTACT</BioTitle>
        <ContactList disablePadding>
          <ListItem disablePadding>
            <ContactLink
              href="https://goo.gl/maps/GHR3EqwSebhxwZmL7"
              target="_blank"
            >
              Uzbekistan, Tashkent
            </ContactLink>
          </ListItem>

          <ListItem disablePadding>
            <ContactLink href="mailto:devazamatkhabibullaev@gmail.com">
              devazamatkhabibullaev@gmail.com
            </ContactLink>
          </ListItem>

          <ListItem disablePadding>
            <ContactLink href="tel:998950044048">
              +998 (95) 004-40-48
            </ContactLink>
          </ListItem>
        </ContactList>
      </Grid>

      <Grid xs={12}>
        <BioTitle component="h3">SERVICES</BioTitle>
        <ServiceDescription>Frontend Development</ServiceDescription>
        <ServiceDescription>Backend Development</ServiceDescription>
        <ServiceDescription>Mobile Development</ServiceDescription>
      </Grid>
    </>
  )
}
