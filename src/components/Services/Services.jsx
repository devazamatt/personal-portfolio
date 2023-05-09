import { Container } from '@mui/material'
import { SectionBorder } from '../Section/styled'
import { Section } from '../Section'

export const Services = () => {
  return (
    <Section id="services">
      <Container>
        <div className="section__text">
          <h2 className="section__title">Services</h2>
          <p className="section__subtitle">What I offer</p>
        </div>

        <div className="services__container grid">
          <div className="services__card">
            <i className="ri-braces-line"></i>

            <h2 className="services__title">
              Frontend <br /> Development
            </h2>

            <p className="services__description">
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>

            <div className="services__border"></div>
          </div>

          <div className="services__card">
            <i className="ri-database-2-line"></i>

            <h2 className="services__title">
              Backend <br /> Development
            </h2>

            <p className="services__description">
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>

            <div className="services__border"></div>
          </div>

          <div className="services__card">
            <i className="ri-smartphone-line"></i>

            <h2 className="services__title">
              Mobile <br /> Development
            </h2>

            <p className="services__description">
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>

            <div className="services__border"></div>
          </div>
        </div>
        <SectionBorder />
      </Container>
    </Section>
  )
}
