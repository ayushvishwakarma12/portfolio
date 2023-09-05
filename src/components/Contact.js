import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [formValidation, setFormValidation] = useState({
    name: false,
    lastname: false,
    user_email: false,
    phone: false,
    message: false,
  });

  const checkForm = (event) => {
    console.log(event.target.name);
    if (event.target.value === "") {
      setFormValidation({ ...formValidation, [event.target.name]: true });
    } else {
      setFormValidation({ ...formValidation, [event.target.name]: false });
    }
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  let isButtonDisable = false;
  for (let i in formDetails) {
    if (formDetails[i] === "") {
      isButtonDisable = true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_ieq6qdy",
        "template_trlyqn6",
        e.target,
        "RPo_D_xDrFgNKYNaX"
      )
      .then((response) => {
        setButtonText("Message Sent");
      })
      .catch((error) => {
        setButtonText("Error...");
        console.log(error);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        {console.log(formValidation.name)}
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          name="name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                          onBlur={checkForm}
                        />
                        {formValidation.name && (
                          <p
                            style={{
                              fontWeight: "bold",
                              paddingLeft: "5px",
                              color: "#EF1E1E",
                            }}
                          >
                            *Please Enter Your Name
                          </p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lasttName}
                          placeholder="Last Name"
                          name="lastname"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                          onBlur={checkForm}
                        />
                        {formValidation.lastname && (
                          <p
                            style={{
                              fontWeight: "bold",
                              paddingLeft: "5px",
                              color: "#EF1E1E",
                            }}
                          >
                            *Please Enter Your Last Name
                          </p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.user_email}
                          placeholder="Email Address"
                          name="user_email"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          onBlur={checkForm}
                        />
                        {formValidation.user_email && (
                          <p
                            style={{
                              fontWeight: "bold",
                              paddingLeft: "5px",
                              color: "#EF1E1E",
                            }}
                          >
                            *Please Enter Your Email
                          </p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          name="phone"
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                          onBlur={checkForm}
                        />
                        {formValidation.phone && (
                          <p
                            style={{
                              fontWeight: "bold",
                              paddingLeft: "5px",
                              color: "#EF1E1E",
                            }}
                          >
                            *Please Enter Your Phone Number
                          </p>
                        )}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          name="message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          onBlur={checkForm}
                        ></textarea>
                        {formValidation.message && (
                          <p
                            style={{
                              fontWeight: "bold",
                              paddingLeft: "5px",
                              color: "#EF1E1E",
                            }}
                          >
                            *Please Enter Your Message
                          </p>
                        )}
                        <button type="submit" disabled={isButtonDisable}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
