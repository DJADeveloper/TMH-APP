import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  const [statusMessage, setStatusMessage] = useState(""); // Create a state variable
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:5000/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }).toString(),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setStatusMessage("Email sent successfully!"); // Set success message
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatusMessage("Failed to send email."); // Set failure message
      });
  }

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let's Build Something Great
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  Your imagination. Our expertise. Let's collaborate to craft
                  solutions that are as unique and exceptional as your business.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"Your Success is Our Code"}
                </h3>
                <ul>
                  <li>
                    <a href="tel:8136702774">813-670-2774</a>
                  </li>
                  <li>
                    <a href="mailto:themasteryhouse@gmail.com">
                      themasteryhouse@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>Tampa, FL (USA)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                {statusMessage && (
                  <div className="status-message">{statusMessage}</div>
                )}{" "}
                {/* Conditionally render status message */}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="text" name="name" placeholder="Name *" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="email" name="email" placeholder="Email *" />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="tel" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Messages *"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button
                          type="submit"
                          className="wc-btn-primary btn-hover btn-item"
                        >
                          <span></span> Send <br />
                          Messages <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
