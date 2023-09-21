import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/thumb/9.svg";
import FooterLogoWhite from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Image from "next/image";

export default function Footer3() {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{ width: "180px", height: "180px" }}
                      className="footer__logo"
                      src={FooterLogoWhite}
                      alt="Footer Logo"
                    />
                    <p>
                      Embracing innovation, fostering creativity. At Mastery
                      House, we redefine boundaries and build the digital
                      future, one masterpiece at a time. Discover a haven where
                      technology meets artistry, and dreams transform into
                      tangible realities.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="https://www.facebook.com/themasteryhouse">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/themasteryh">
                          <span>
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/themasteryh/">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Information</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/about-dark">About Company</Link>
                      </li>
                      {/* <li>
                        <Link href="/portfolio-dark">Case Study</Link>
                      </li> */}

                      {/* <li>
                        <Link href="/blog-dark">blog</Link>
                      </li> */}
                      <li>
                        <Link href="/contact-dark">contact</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact Us</h2>
                    <ul className="footer__contact">
                      <li>Tampa, Florida</li>
                      <li>
                        <a href="tel:813-670-2774" className="phone">
                          813-670-2774
                        </a>
                      </li>
                      <li>
                        <a href="mailto:themasteryhouse@gmail.com">
                          themasteryhouse@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Have a project in your mind?
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact-dark"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> contact us{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h3 className="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                    <h4 className="contact-day">Saturday - Thursday</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © 2022 - 2025 | Alrights reserved by{" "}
                      <a href="https://themasteryhouse.co/" target="_blank">
                        The Mastery House
                      </a>
                    </p>
                  </div>

                  <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
