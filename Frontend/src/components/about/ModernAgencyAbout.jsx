const ModernAgencyAbout = () => {
  return (
    <>
      <section className="award__area-8">
        <div>
          {/* <div
            className="award__text-8"
            style={{ display: window.innerWidth > 768 ? "block" : "none" }}
          >
            <a href="#">
              <h2 className="title">
                Strategy, Design, Solution <br /> Development{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </h2>
            </a>
          </div> */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              paddingTop: "56.25%",
              backgroundColor: "#000",
            }}
          >
            <video
              loop
              muted
              autoPlay
              playsInline
              style={{
                position: "absolute",
                top: 30,
                left: 0,
                width: "100%",
                height: "80%",
              }}
            >
              <source src="assets/video/logo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModernAgencyAbout;
