import { ShapeCircleSVG } from '../../assets'

export const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <div className="section__text">
        <h2 className="section__title">Qualification</h2>
        <p className="section__subtitle">Experience & Education</p>
      </div>

      <div className="container">
        <div className="qualification__grid section__border">
          <div className="qualification__content">
            <h3 className="qualification__title">
              <i className="ri-pencil-ruler-2-line"></i> Education
            </h3>
            <div className="qualification__info">
              <div>
                <h3 className="qualification__name">
                  Radio Communication & Broadcasting
                </h3>
                <p className="qualification__country">
                  Tashkent - Aloqa Collage
                </p>
                <p className="qualification__year">2011 - 2014</p>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <h3 className="qualification__title">
              <i className="ri-building-line"></i> Work
            </h3>
            <div className="qualification__info">
              <div>
                <h3 className="qualification__name">Frontend Developer</h3>
                <p className="qualification__country">Davr Mobile - Tashkent</p>
                <p className="qualification__year">2022 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="qualification__img"
        src={ShapeCircleSVG}
        alt="Shape circle"
      />
    </section>
  )
}
