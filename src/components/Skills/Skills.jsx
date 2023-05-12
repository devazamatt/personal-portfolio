import { backs, fronts } from '../../constants'

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="section__text">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">My favourite skills</p>
      </div>

      <div className="container">
        <div className="skills__grid section__border">
          <div className="skills__content">
            <h3 className="skills__title">
              <i className="ri-braces-line"></i>
              Frontend Development
            </h3>
            <div className="skills__info">
              {fronts.map((front) => (
                <div className="skills__data" key={front.name}>
                  <div className="skills__blob">
                    <img
                      className="skills__blob-img"
                      src={front.icon}
                      alt={front.name}
                    />
                  </div>
                  <h3 className="skills__name">{front.name}</h3>
                  <p className="skills__level">{front.level}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__content">
            <h3 className="skills__title">
              <i className="ri-database-2-line"></i>
              Backend Development
            </h3>
            <div className="skills__info">
              {backs.map((back) => (
                <div className="skills__data" key={back.name}>
                  <div className="skills__blob">
                    <img
                      className="skills__blob-img"
                      src={back.icon}
                      alt={back.name}
                    />
                  </div>
                  <h3 className="skills__name">{back.name}</h3>
                  <p className="skills__level">{back.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
