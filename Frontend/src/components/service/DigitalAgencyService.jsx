import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1/1.png";
import Service12 from "../../../public/assets/imgs/service/1/2.png";
import Service13 from "../../../public/assets/imgs/service/1/3.png";
import Service14 from "../../../public/assets/imgs/service/1/4.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyService = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.timeline({
        scrollTrigger: {
          trigger: ".service__area",
          start: "top center+=300",
          end: "bottom bottom",
          markers: false,
        },
      });

      tHero.from(".title-anim, .text-anim", {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
      });

      tHero.from(".animation_home1_service", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
      });
    }
  }, []);

  return (
    <>
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">service</h2>
                <h3 className="sec-title title-anim">
                  Solutions we <br />
                  provide
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  With every single one of our clients we bring forth a deep
                  passion for{" "}
                  <span>
                    creative problem-solving and forward-thinking brands that
                    push boundaries
                  </span>
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__top-btn">
                <div className="btn_wrapper">
                  <Link
                    href="/service-v6-dark"
                    className="btn-item wc-btn-secondary btn-hover"
                  >
                    <span></span> View <br />
                    all services <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service11}
                    alt="Service Image"
                    className={
                      activeImg == 1
                        ? "service__img img-1 active"
                        : "service__img img-1"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service12}
                    alt="Service Image"
                    className={
                      activeImg == 2
                        ? "service__img img-2 active"
                        : "service__img img-2"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service13}
                    alt="Service Image"
                    className={
                      activeImg == 3
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />
                  <Image
                    priority
                    width={280}
                    style={{ height: "auto" }}
                    src={Service14}
                    alt="Service Image"
                    className={
                      activeImg == 4
                        ? "service__img img-4 active"
                        : "service__img img-4"
                    }
                  />
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list text-anim">
                  <div
                    ref={serviceList}
                    className={
                      activeList == 1
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="1"
                  >
                    <h4 style={{ color: "#00ffd0" }}>
                      Web & Mobile Development
                    </h4>
                    <p>
                      Elevate your online presence with our cutting-edge web and
                      mobile development services. We specialize in crafting
                      high-performance websites and mobile apps that offer
                      seamless user experiences on any device. Let us turn your
                      vision into a digital reality that stands out in the
                      competitive market.
                    </p>
                  </div>

                  <div
                    ref={serviceList}
                    className={
                      activeList == 2
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="2"
                  >
                    <h4 style={{ color: "#00ffd0" }}>Interaction Design</h4>
                    <p>
                      Transform user experiences with our interaction design
                      services. We focus on creating intuitive user interfaces
                      that foster engagement and satisfaction. By prioritizing
                      usability and functionality, we design interactions that
                      not only look great but also work flawlessly, enhancing
                      user satisfaction and boosting conversion rates.
                    </p>
                  </div>

                  <div
                    ref={serviceList}
                    className={
                      activeList == 3
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="3"
                  >
                    <h4 style={{ color: "#00ffd0" }}>Digital Marketing</h4>
                    <p>
                      Expand your reach and drive business growth with our
                      comprehensive digital marketing services. From SEO
                      optimization to content creation and social media
                      management, we craft bespoke marketing strategies that
                      resonate with your target audience, foster engagement, and
                      drive measurable results.
                    </p>
                  </div>

                  <div
                    ref={serviceList}
                    className={
                      activeList == 4
                        ? "service__list-item active"
                        : "service__list-item"
                    }
                    data-service="4"
                  >
                    <h4 style={{ color: "#00ffd0" }}>Branding and Strategy</h4>
                    <p>
                      Build a recognizable and trusted brand with our branding
                      and strategy services. We work closely with you to
                      understand your vision, define your unique selling points,
                      and craft a brand identity that resonates with your target
                      audience. Our strategies are data-driven, ensuring a
                      roadmap to success that aligns with your business goals.
                    </p>
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

export default DigitalAgencyService;
