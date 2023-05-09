import { useRef } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Project1, Project2, Project3, Project4 } from '../../assets'
import { Section } from '../Section'
import { SectionBorder } from '../Section/styled'
import { Container } from '@mui/material'

export const Projects = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <Section id="projects">
      <Container>
        <div className="section__text">
          <h2 className="section__title">Projects</h2>
          <p className="section__subtitle">Most recent works</p>
        </div>

        <div>
          <div className="projects__container">
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
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: -56
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: -56
                }
              }}
            >
              <SwiperSlide className="projects__content">
                <img className="projects__img" src={Project1} alt="" />

                <div>
                  <p className="projects__subtitle">Web</p>
                  <h1 className="projects__title">Modern Website</h1>
                  <a className="projects__link" href="">
                    View Demo <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="projects__content">
                <img className="projects__img" src={Project2} alt="" />

                <div>
                  <p className="projects__subtitle">Web</p>
                  <h1 className="projects__title">Modern Website</h1>
                  <a className="projects__link" href="">
                    View Demo <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="projects__content">
                <img className="projects__img" src={Project3} alt="" />

                <div>
                  <p className="projects__subtitle">Web</p>
                  <h1 className="projects__title">Modern Website</h1>
                  <a className="projects__link" href="">
                    View Demo <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="projects__content">
                <img className="projects__img" src={Project4} alt="" />

                <div>
                  <p className="projects__subtitle">Web</p>
                  <h1 className="projects__title">Modern Website</h1>
                  <a className="projects__link" href="">
                    View Demo <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </SwiperSlide>
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
        <SectionBorder />
      </Container>
    </Section>
  )
}
