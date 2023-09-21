import { useEffect, useRef } from "react";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import TmhHouseBanner from "../../../public/assets/imgs/about/tmh-house-dark.svg"; // Consider replacing with a Mastery House specific award or recognition
import Image from "next/image.js";
import animationWordCome from "@/lib/utils/animationWordCome";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come " ref={wordAnim}>
                  We are Mastery House, your partners in holistic personal and
                  professional development.
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service-v6-dark"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Discover Latest <br />
                        Trends & Technologies
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      Established in 2019, Mastery House has been at the
                      forefront of personal and professional development,
                      offering tailored experiences that foster growth and
                      innovation.
                    </p>
                  </div>
                  {/* <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award} // Consider replacing with a Mastery House specific award or recognition
                      alt="Mastery House Recognition"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <div style={{ position: "relative", height: "500px" }}>
                  <Image
                    fill="responsive"
                    src={TmhHouseBanner}
                    alt="hero-banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          h1.hero-title {
            font-size: 2.5rem; // Default size
            line-height: 1.2; // Default line height
            word-spacing: normal; // Default word spacing
          }
          @media screen and (min-width: 1400px) {
            h1.hero-title {
              font-size: 3rem; // Slightly larger font size for very wide screens
            }
          }
          @media screen and (min-width: 1200px) and (max-width: 1399px) {
            h1.hero-title {
              font-size: 2.7rem; // Medium screens
            }
          }
          @media screen and (max-width: 991px) {
            h1.hero-title {
              font-size: 2.2rem; // Tablets and small screens
            }
          }
          @media screen and (max-width: 767px) {
            h1.hero-title {
              font-size: 1.8rem; // Mobile devices
              line-height: 1.3; // Increased line height for readability
            }
          }
          @media screen and (max-width: 480px) {
            h1.hero-title {
              font-size: 1.5rem; // Small mobile devices
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutHero;
