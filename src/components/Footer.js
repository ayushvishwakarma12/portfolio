import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <div className="fluid-container footer">
        <footer className="text-center text-white">
          <div className="container">
            <section className="mt-5">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#home" className="text-white">
                      Home
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#skills" className="text-white">
                      Skills
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#projects" className="text-white">
                      Projects
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#connect" className="text-white">
                      Contact
                    </a>
                  </h6>
                </div>
              </div>
            </section>

            <hr className="my-5" />
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    As a determined and motivated Full Stack Development
                    fresher, I am eager to contribute my skills and creativity
                    to a dynamic team. The showcased projects and skills in this
                    portfolio are a testament to my dedication to crafting
                    seamless web experiences. Thank you for taking the time to
                    explore my journey, and I look forward to the opportunity to
                    contribute to exciting projects in the future.
                  </p>
                </div>
              </div>
            </section>
            <section className="text-center mb-5">
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 :{" "}
            <a className="text-white" href="https://mdbootstrap.com/">
              Ayush
            </a>
          </div>
        </footer>
      </div>
    </footer>
  );
};
