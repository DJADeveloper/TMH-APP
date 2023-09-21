import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import testimonial from "../../../public/assets/imgs/testimonial/testimonial.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div>
                <Image
                  priority
                  fill="responsive"
                  src={testimonial}
                  alt="testimonial"
                />
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2 mt-5">
                <div className="testimonial__slider ">
                  <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      nextEl: ".next-button",
                      prevEl: ".prev-button",
                    }}
                  >
                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Unmatched Expertise
                          </h2>
                          <p className="testimonial__text-2">
                            Mastery House is the epitome of professionalism and
                            innovation. They have reshaped our digital presence
                            with a keen understanding of our vision and the
                            market dynamics. They not just deliver services but
                            build relationships grounded in trust and mutual
                            growth. Exceptional service every step of the way.
                          </p>
                          <h3 className="testimonial__author">Shereve Smith</h3>
                          <h4 className="testimonial__role">
                            Northwood Manor Assisted Living
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide ">
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Above and Beyond
                          </h2>
                          <p className="testimonial__text-2">
                            Our journey with Mastery House has been nothing
                            short of spectacular. Their detail-oriented approach
                            and relentless pursuit of perfection have provided
                            us with solutions that are not only visually
                            stunning but highly functional, setting a new
                            benchmark in digital excellence. I cannot recommend
                            them enough.
                          </p>
                          <h3 className="testimonial__author">Lydell</h3>
                          <h4 className="testimonial__role">
                            Founder - Touch of Excellence{" "}
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__slide">
                        <div className="testimonial__inner-2">
                          <h2 className="testimonial__title-2">
                            Masters of Digital Craft
                          </h2>
                          <p className="testimonial__text-2">
                            Mastery House has been a cornerstone in our
                            brand&apos;s development. Their team is filled with
                            master craftsmen who poured creativity and expertise
                            into our projects, crafting a digital space that
                            speaks our brand language fluently. It&apos;s more
                            than a service, it&apos;s a partnership for success.
                          </p>
                          <h3 className="testimonial__author">Mario</h3>
                          <h4 className="testimonial__role">
                            Founder - A+ Roofing Excellence
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
