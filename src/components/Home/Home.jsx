import ProfileImg from '../../assets/images/profile.png'
import { ShapeCircleSVG, ShapeWavesSvg } from '../../assets'

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="home__grid section__border">
          <div className="home__data grid">
            <h1 className="home__title">
              Hi, I'm Azamat <br /> Frontend Developer <br /> Based in Tashkent
            </h1>

            <div className="home__blob grid">
              <div className="home__perfil">
                <img src={ProfileImg} alt="" />
              </div>

              <img
                className="home__shape-waves"
                src={ShapeWavesSvg}
                alt="Shape waves image"
              />
              <img
                className="home__shape-circle"
                src={ShapeCircleSVG}
                alt="Shape circle image"
              />
            </div>

            <ul className="home__social">
              <a
                className="home__social-link"
                href="https://github.com/azamatjohnson"
                target="_blank"
              >
                <i className="ri-github-line"></i>
              </a>
              <a
                className="home__social-link"
                href="https://t.me/azamatjohnson"
                target="_blank"
              >
                <i className="ri-telegram-line"></i>
              </a>
              <a
                className="home__social-link"
                href="https://www.instagram.com/azamatjohnson"
                target="_blank"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </ul>
          </div>

          <div className="home__info">
            <div>
              <h3 className="home__info-title">BIOGRAPHY</h3>
              <p className="home__info-description">
                Hi, I'm Azamat, Frontend Developer. Passionate about designing
                beautiful web interfaces. Based in Tashkent.
              </p>
            </div>
            <div>
              <h3 className="home__info-title">CONTACT</h3>
              <p className="home__info-description">
                Uzbekistan, Tashkent <br />
                azamatjohnson@gmail.com <br />
                +998 (95) 004-40-48 <br />
              </p>
            </div>
            <div>
              <h3 className="home__info-title">SERVICES</h3>
              <p className="home__info-description">
                Frontend Development <br />
                Backend Development <br />
                Mobile Development <br />
              </p>
            </div>
          </div>

          <div className="home__info">
            <div>
              <h3 className="home__info-title">YEARS OF EXPERIENCE</h3>
              <p className="home__info-number">01+</p>
            </div>
            <div>
              <h3 className="home__info-title">COMPLETED PROJECTS</h3>
              <p className="home__info-number">02+</p>
            </div>
            <div>
              <h3 className="home__info-title">COMPANIES WORKED</h3>
              <p className="home__info-number">01+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
