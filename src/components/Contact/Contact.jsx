import { Section } from '../Section'
import { SectionBorder } from '../Section/styled'
import { Container } from '@mui/material'

export const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <div className="section__text">
          <h2 className="section__title">Contact Me</h2>
          <p className="section__subtitle">Get in touch</p>
        </div>

        <div className="contact__container grid">
          <div className="contact__content">
            <h3 className="contact__title">
              <i className="ri-chat-3-line"></i> Talk to me
            </h3>

            <div className="contact__info">
              <div className="contact__data">
                <span className="contact__data-title">Email</span>
                <span className="contact__data-info">
                  devazamatkhabibullaev@gmail.com
                </span>

                <a
                  className="contact__link"
                  href="mailto:devazamatkhabibullaev@gmail.com"
                  target="_blank"
                >
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              <div className="contact__data">
                <span className="contact__data-title">Telegram</span>
                <span className="contact__data-info">+998 (95) 004-40-48</span>

                <a
                  className="contact__link"
                  href="https://t.me/azamatkhabibullaev"
                  target="_blank"
                >
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              <div className="contact__data">
                <span className="contact__data-title">Instagram</span>
                <span className="contact__data-info">@devazamat</span>

                <a
                  className="contact__link"
                  href="https://www.instagram.com/devazamat/"
                >
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">
              <i className="ri-send-plane-line"></i> Write me your project
            </h3>

            <form className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  className="contact__form-input"
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Write your full name"
                  autoComplete="off"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="email">
                  Email
                </label>
                <input
                  className="contact__form-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Write your email"
                  autoComplete="off"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag" htmlFor="project">
                  Project
                </label>
                <textarea
                  className="contact__form-input"
                  name="project"
                  id="project"
                  placeholder="Write your project"
                  autoComplete="off"
                ></textarea>
              </div>

              <button className="contact__submit" type="submit">
                Submit <i className="ri-arrow-right-up-line"></i>
              </button>
            </form>
          </div>
        </div>
        <SectionBorder />
      </Container>
    </Section>
  )
}
