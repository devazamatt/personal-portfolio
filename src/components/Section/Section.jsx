import { StyledSection } from './styled'

export const Section = ({ children, id }) => {
  return (
    <StyledSection component="section" id={id}>
      {children}
    </StyledSection>
  )
}
