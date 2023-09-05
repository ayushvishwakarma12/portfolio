import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar
      expand="md"
      className={`${scrolled ? "scrolled navbar-dark" : ""} mobile-navbar`}
    >
      <Container>
        <Navbar.Brand className="logo" href="#home">
          Ayush
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : ""}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : ""}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : ""}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayush-vishwakarmaa/">
                <span>
                  <TiSocialLinkedin className="text-white icon" />
                </span>
              </a>
              <a href="https://github.com/ayushvishwakarma12">
                <span>
                  <TiSocialGithub className="text-white icon" />
                </span>
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>
                <a href="#connect" className="lets-connect-button">
                  Let's Connect"
                </a>
              </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
