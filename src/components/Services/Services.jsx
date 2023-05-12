export const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="section__text">
        <h2 className="section__title">Services</h2>
        <p className="section__subtitle">What I offer</p>
      </div>

      <div className="container">
        <div className="services__grid section__border">
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
      </div>
    </section>
  )
}
