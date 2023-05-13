import { useRef } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from '../../constants'

export const Projects = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className="projects section" id="projects">
      <div className="section__text">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">Most recent works</p>
      </div>

      <div className="container section__border">
        <div className="projects__box">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current
            }}
            pagination={{
              clickable: true
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            breakpoints={{
              600: {
                slidesPerView: 1
              },
              900: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.key}>
                <div className="projects__content">
                  <img className="projects__img" src={project.imageUrl} alt={project.title} />

                  <div>
                    <p className="projects__subtitle">{project.subtitle}</p>
                    <h1 className="projects__title">{project.title}</h1>
                    <a className="projects__link" href={project.url}>
                      View Demo <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next" ref={navigationNextRef}>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="swiper-button-prev" ref={navigationPrevRef}>
            <i className="ri-arrow-left-s-line"></i>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}
