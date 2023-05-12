import { UZBFlag } from '../../assets'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__text">
            <h1 className="footer__title">Azamat.</h1>
            <p className="footer__subtitle">Frontend Developer</p>
          </div>

          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#home">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#skills">
                Skills
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#projects">
                Projects
              </a>
            </li>
          </ul>

          <ul className="footer__social">
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://github.com/azamatjohnson"
                target="_blank"
              >
                <i className="ri-github-fill"></i>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://t.me/azamatjohnson"
                target="_blank"
              >
                <i className="ri-telegram-fill"></i>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://www.instagram.com/azamatjohnson"
                target="_blank"
              >
                <i className="ri-instagram-fill"></i>
              </a>
            </li>
          </ul>

          <span className="footer__copy">
            Proudly made in
            <img
              className="footer__copy-img"
              src={UZBFlag}
              alt="Uzbekistan flag"
            />
            by Azamat Khabibullaev
          </span>
        </div>
      </div>
    </footer>
  )
}
