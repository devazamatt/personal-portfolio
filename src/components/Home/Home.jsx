import { Section } from '../Section'

import { SectionBorder } from '../Section/styled'
import {
  HomeTitle,
  HomeBlob,
  HomeProfile,
  HomeImage,
  ShapeCircle,
  ShapeWaves,
  Socials,
  SocialsItem,
  SocialsLink,
  BioDescription,
  BioTitle,
  ContactLink,
  ContactList,
  ServiceDescription,
  ExperienceDesc,
  ExperienceTitle
} from './styled'

import ProfileImg from '../../assets/images/profile.png'
import ShapeWavesImg from '../../assets/images/shape-waves.svg'
import ShapeCircleImg from '../../assets/images/shape-circle.svg'

import { Container, ListItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

export const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Grid container spacing={2}>
          <Grid container xs={12}>
            <Grid xs={12}>
              <HomeTitle variant="h1" component="h1">
                Hi, I'm Azamat <br /> Frontend Developer <br /> Based in
                Tashkent
              </HomeTitle>
            </Grid>

            <Grid xs={12}>
              <HomeBlob>
                <HomeProfile>
                  <HomeImage
                    component="img"
                    src={ProfileImg}
                    alt="Profile image"
                  />
                </HomeProfile>

                <ShapeWaves
                  component="img"
                  src={ShapeWavesImg}
                  alt="Shape waves image"
                />
                <ShapeCircle
                  component="img"
                  src={ShapeCircleImg}
                  alt="Shape circle image"
                />
              </HomeBlob>
            </Grid>

            <Grid xs={12}>
              <Socials>
                <SocialsItem disablePadding>
                  <SocialsLink
                    href="https://github.com/devazamatt"
                    target="_blank"
                  >
                    <GitHubIcon fontSize="small" />
                  </SocialsLink>
                </SocialsItem>

                <SocialsItem>
                  <SocialsLink href="https://t.me/devazamat" target="_blank">
                    <TelegramIcon fontSize="small" />
                  </SocialsLink>
                </SocialsItem>

                <SocialsItem disablePadding>
                  <SocialsLink
                    href="https://www.instagram.com/devazamat/"
                    target="_blank"
                  >
                    <InstagramIcon fontSize="small" />
                  </SocialsLink>
                </SocialsItem>
              </Socials>
            </Grid>
          </Grid>

          <Grid container xs={12}>
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
          </Grid>

          <Grid container xs={12}>
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
          </Grid>
        </Grid>

        <SectionBorder />
      </Container>
    </Section>
  )
}
