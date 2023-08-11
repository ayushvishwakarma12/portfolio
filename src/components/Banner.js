import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import background from "../assets/background.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designing", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Ayush...`}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Enthusiastic and highly motivated Web Developer with a passion for
              creating visually appealing and user-friendly websites. Proficient
              in front-end technologies like HTML, CSS, JavaScript, and React
              JS, with a strong foundation in responsive web design. A quick
              learner and a team player, committed to staying up-to-date with
              the latest industry trends and best practices.
            </p>
            {/* <button onClick={() => console.log("connected")}>
              Let's Connect <AiOutlineArrowLeft />
            </button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
