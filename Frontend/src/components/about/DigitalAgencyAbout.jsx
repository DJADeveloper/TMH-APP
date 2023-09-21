import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import About11 from "../../../public/assets/imgs/about/1/5.png";
import About12 from "../../../public/assets/imgs/about/1/4.png";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalAgencyAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__title-wrapper">
                <h3 className="sec-title ">
                  We unlock the fullest potential of your business through a
                  masterful blend of creativity and technology.
                </h3>
              </div>

              <div className="about__content-wrapper">
                <div className="about__img">
                  <div className="img-anim about__img_left">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={About11}
                      alt="A team of creative professionals brainstorming"
                      data-speed="0.3"
                    />
                  </div>

                  <div className="about__img-right">
                    <Image
                      priority
                      width={220}
                      style={{ height: "auto" }}
                      src={About12}
                      alt="A collage showcasing different milestones achieved by The Mastery House"
                      data-speed="0.5"
                    />
                    <div className="shape">
                      <div className="secondary" data-speed="0.9"></div>
                      <div className="primary"></div>
                    </div>
                  </div>
                </div>

                <div className="about__content ">
                  <p>
                    From seasoned strategies in PR and campaigns that echo
                    thought leadership, to storytelling that captivates and
                    social media management that engages — we are more than a
                    service, we are your partner in mastery. At The Mastery
                    House, we stand apart not as order-takers, but as
                    dream-makers, weaving expertise and innovation into every
                    project. It is our honor to be the trusted partner for a
                    variety of businesses, guiding them to realize their fullest
                    potential and to carve out a space in the digital landscape
                    that is uniquely their own.
                  </p>

                  <div className="cursor-btn btn_wrapper">
                    <Link
                      className="btn-item wc-btn-primary btn-hover"
                      href="/about-dark"
                    >
                      <span></span> Discover Our Story
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
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

export default DigitalAgencyAbout;
