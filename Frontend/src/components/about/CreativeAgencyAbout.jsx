import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from "@/plugins";
import A1 from "../../../public/assets/imgs/home-7/a1.jpg";
import Video from "../../../public/assets/imgs/home-7/video.jpg";
// import LogoVid from "../../../public/assets/video/Logo.mp4";
import Shape4 from "../../../public/assets/imgs/home-7/shape-4.png";
import Shape5 from "../../../public/assets/imgs/home-7/shape-5.png";
import A2 from "../../../public/assets/imgs/home-7/a2.jpg";
import A3 from "../../../public/assets/imgs/home-7/a3.jpg";
import M from "../../../public/assets/imgs/home-7/m.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const CreativeAgencyAbout = () => {
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
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <div className="video__area about__img-2">
        {/* <Image
          priority
          style={{ width: "100%", height: "auto" }}
          src={Video}
          alt="Video Image"
          data-speed="0.2"
        /> */}
        {/* <video autoPlay muted loop>
          <source src={LogoVid} type="video/mp4" />
        </video> */}
      </div>
      <section className="about__area-7">
        <div className="container pt-130 pb-110">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  The Mastery House <br /> Story
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="about__left-3">
                <Image
                  priority
                  style={{ width: " 350px", height: "auto" }}
                  src={M}
                  alt="Image"
                  data-speed="auto"
                />
              </div>
            </div> */}
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="about__mid-7 text-anim  d-flex justify-content-between">
                <p>
                  At The Mastery House, our journey began with a singular
                  vision: to empower businesses by unlocking their digital
                  potential. Rooted in innovation and creativity, we set out to
                  craft digital solutions that not only address the unique needs
                  of our clients but also redefine the boundaries of what is
                  possible in the digital realm. Our commitment to excellence
                  and our passion for technology have fueled our pursuit of
                  crafting bespoke strategies and cutting-edge designs, ensuring
                  that every client experiences digital transformation in its
                  finest form.
                </p>
                <p>
                  Our story is one of relentless determination and a pursuit of
                  excellence, underpinned by our core belief that "Your Success
                  is Our Code." At The Mastery House, we don’t just build
                  digital experiences; we build connections, fostering
                  relationships with our clients that are based on trust and
                  mutual growth. Every project we undertake is a reflection of
                  our commitment to innovation and our dedication to creating
                  value. By seamlessly integrating technology and creativity, we
                  continue to sculpt digital landscapes, pushing the boundaries
                  and elevating businesses to new heights.
                </p>

                {/* <Image
                  priority
                  width={155}
                  height={57}
                  src={Shape5}
                  alt="Shape"
                  className="signature"
                />
                <Image
                  priority
                  width={140}
                  height={160}
                  src={A2}
                  alt="Image"
                  className="image-1"
                /> */}
              </div>
            </div>
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="about__right-7">
                <Image
                  priority
                  width={220}
                  style={{ height: "auto" }}
                  src={A3}
                  alt="Image"
                  data-speed="0.7"
                />
              </div>
            </div> */}
          </div>
        </div>

        <Image
          priority
          width={76}
          height={119}
          src={Shape4}
          alt="Shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default CreativeAgencyAbout;
