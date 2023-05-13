import { useRef } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../../constants'
import { ShapeWavesSvg } from '../../assets'

export const Testimonials = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className="testimonials section" id="testimonials">
      <div className="section__text">
        <h2 className="section__title">Testimonials</h2>
        <p className="section__subtitle">My client saying</p>
      </div>

      <div className="container section__border">
        <div className="testimonials__box">
          <Swiper
            grabCursor={true}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current
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
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.key}>
                <div className="testimonials__content">
                  <p className="testimonials__description">
                    {testimonial.description}
                  </p>
                  <div>
                    <h3 className="testimonials__name">{testimonial.name}</h3>
                    <p className="testimonial__subtitle">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev" ref={navigationPrevRef}>
            <i className="ri-arrow-left-s-line"></i>
          </div>
          <div className="swiper-button-next" ref={navigationNextRef}>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>

      <img className="testimonials__img" src={ShapeWavesSvg} alt="Shape waves" />
    </section>
  )
}
