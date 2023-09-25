import { useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const DigitalAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_left", { x: -20, opacity: 0 });
        gsap.to(".fade_left", {
          scrollTrigger: {
            trigger: ".fade_left",
            start: "top center+=300",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Workflow</h2>
                <h3 className="sec-title title-anim">How we work</h3>
              </div>
            </div>

            <div className="col-xxl-12 workflow__slider">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={0}
                slidesPerView={1}
                freemode="true"
                loop={true}
                speed={2000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">Step 01</h4>
                      <h5 className="workflow__number">01</h5>
                      <h6 className="workflow__title">Discovery Session</h6>
                      <p>
                        Engaging with clients to understand their needs and
                        preferences.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">Step 02</h4>
                      <h5 className="workflow__number">02</h5>
                      <h6 className="workflow__title">Blueprint Creation</h6>
                      <p>
                        Designing a personalized roadmap to achieve th
                        clients&apos; goals.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">Step 03</h4>
                      <h5 className="workflow__number">03</h5>
                      <h6 className="workflow__title">Skill Mastery</h6>
                      <p>
                        Guiding clients through intensive sessions to develop
                        necessary skills.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">Step 04</h4>
                      <h5 className="workflow__number">04</h5>
                      <h6 className="workflow__title">Hands-on Project</h6>
                      <p>
                        Applying learned skills in real-world scenarios through
                        hands-on projects.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">Step 05</h4>
                      <h5 className="workflow__number">05</h5>
                      <h6 className="workflow__title">
                        Feedback and Refinement
                      </h6>
                      <p>
                        Gathering feedback and making adjustments to enhance
                        results.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">Step 06</h4>
                      <h5 className="workflow__number">06</h5>
                      <h6 className="workflow__title">Final Presentation</h6>
                      <p>
                        Showcasing the clients&apos achievements in a final
                        presentation.
                      </p>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyWorkflow;
