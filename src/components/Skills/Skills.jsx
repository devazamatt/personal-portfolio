import { technologies } from './constants'
import { Section } from '../Section'
import { Container } from '@mui/material'
import { SectionBorder } from '../Section/styled'

export const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <div className="section__text">
          <h2 className="section__title">Skills</h2>
          <p className="section__subtitle">My favourite skills</p>
        </div>

        <div className="skills__container grid">
          {technologies.map((technology) => (
            <div className="skills__content" key={technology.key}>
              <h3 className="skills__title">
                <i className={technology.icon}></i> {technology.title}
              </h3>

              <div className="skills__info">
                {technology.skills.map((skill) => (
                  <div className="skills__data" key={skill.name}>
                    <div className="skills__blob">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <p className="skills__level">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <SectionBorder />
      </Container>
    </Section>
  )
}
