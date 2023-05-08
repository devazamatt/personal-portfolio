import { StyledMain } from './styled'
import { Home } from '../Home'
import { Skills } from '../Skills'
import { Qualification } from '../Qualification'
import { Services } from '../Services'
import { Projects } from '../Projects'
import { Testimonials } from '../Testimonials'
import { Contact } from '../Contact'

export const Main = () => {
  return (
    <StyledMain component="main">
      <Home />
      <Skills />
      <Qualification />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </StyledMain>
  )
}
