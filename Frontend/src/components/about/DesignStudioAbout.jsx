import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import One from "../../../public/assets/imgs/about/2/1.jpg";
import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DesignStudioAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.to(".about__img-2 img", {
          scale: 1.15,
          duration: 1,
          scrollTrigger: {
            trigger: ".about__img-2",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
          },
        });
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
      <section className="about__area-2">
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Our Mission <br /> and Vision.
                </h2>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p>
                    At The Mastery House, we are fueled by a mission to drive
                    transformative digital change, seamlessly blending
                    creativity and technology to empower businesses of all
                    sizes. We envision a future where every enterprise,
                    regardless of its scale, can access innovative strategies
                    and tools, unlocking unparalleled growth and success in the
                    digital realm and beyond.
                  </p>
                  <br />
                  <p>
                    Upholding values of Innovation, Integrity, Client Success,
                    and Social Responsibility, we craft a symbiotic relationship
                    between your aspirations and our expertise. Our commitment
                    to these principles reflects in our actions, as we
                    constantly strive to uphold transparency, pioneer solutions,
                    ensure client growth, and contribute to a compassionate and
                    inclusive world by supporting autism organizations.
                  </p>
                </div>
                <div className="sec-btn btn_wrapper">
                  <Link
                    className="wc-btn-pink btn-hover btn-item"
                    href="/contact-dark"
                  >
                    <span></span> Explore Us{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="about__img-2 pb-130">
          <Image
            priority
            width={1720}
            style={{ height: "auto" }}
            src={One}
            alt="About Image"
            data-speed="0.2"
          />
        </div> */}

        {/* <div className="container pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-2 title-anim">
                We worked with global largest brands
              </h2>
              <div className="brand__list-2">
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={67}
                    src={Brand1}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={85}
                    height={67}
                    src={Brand2}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={Brand3}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={82}
                    height={70}
                    src={Brand4}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={115}
                    height={67}
                    src={Brand5}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={121}
                    height={63}
                    src={Brand6}
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default DesignStudioAbout;
