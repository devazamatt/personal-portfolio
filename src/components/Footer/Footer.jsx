import { UZBFlag } from '../../assets'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__text">
          <h1 className="footer__title">Azamat.</h1>
          <p>Frontend Developer</p>
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

        <ul className="footer__socials">
          <li className="footer__socials-item">
            <a
              className="footer__socials-link"
              href="https://github.com/devazamatt"
              target="_blank"
            >
              <i className="ri-github-fill"></i>
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              className="footer__socials-link"
              href="https://t.me/azamatkhabibullaev"
              target="_blank"
            >
              <i className="ri-telegram-fill"></i>
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              className="footer__socials-link"
              href="https://www.instagram.com/devazamat"
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
            title="Uzbekistan"
            width={24}
            height={24}
          />
          by Azamat Khabibullaev
        </span>
      </div>
    </footer>
  )
}
