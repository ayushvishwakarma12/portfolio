import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
const projects = {
  projectTab1: [
    {
      title: "Movies App",
      description:
        "An immersive platform for exploring and discovering movies of various genres.",
      imgUrl:
        "https://res.cloudinary.com/ddkfpnw7u/image/upload/v1683723894/movie%20app/netfilx_1_rjr9ca.png",
      projectLink: "https://ayumovieapp.ccbp.tech/",
    },
    {
      title: "Nxt Watch",
      description:
        " A replication of the popular video-sharing platform for seamless content sharing.",
      imgUrl:
        "https://images.unsplash.com/photo-1603566234384-f5f5b59168cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      projectLink: "https://ayunxtwatch.ccbp.tech/",
    },
    {
      title: "Nxt Trendz",
      description:
        " A comprehensive online shopping solution offering a wide range of products.",
      imgUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      projectLink: "https://ayunxtwatch.ccbp.tech/",
    },
    {
      title: "Jobby App",
      description:
        "A streamlined platform connecting job seekers with suitable employment opportunities.",
      imgUrl:
        "https://assets.ccbp.in/frontend/react-js/projects-showcase/appointment-app-img.png",
      projectLink: "https://ayujobby.ccbp.tech/login",
    },
    {
      title: "React Weather App",
      description:
        "A real-time weather application delivering accurate forecasts and conditions.",
      imgUrl:
        "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      projectLink: "https://ayureactweatherapp.netlify.app/",
    },
    {
      title: "Nxt Slides",
      description: "Design & Development",
      imgUrl:
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      projectLink: "https://ayunxtslides.ccbp.tech/",
    },
  ],
  projectTab2: [
    {
      title: "Rock Paper Scissors",
      description:
        "Classic game of strategy and chance brought to your device for endless fun.",
      imgUrl:
        "https://img.freepik.com/free-vector/rock-paper-scissors-banner_107791-8387.jpg?w=996&t=st=1691759396~exp=1691759996~hmac=489522dddd1a089df591b7012b83003044e07bce2881fd55676ce02c3d06738d",
      projectLink: "https://ayurockpapersci.ccbp.tech",
    },
    {
      title: "Stop Watch",
      description:
        "A reliable time-tracking tool for precise measurement of intervals and activities.",
      imgUrl:
        "https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-18611.jpg?w=1060&t=st=1691759569~exp=1691760169~hmac=d864a45fa7ee46c003b2686ad12239a9202d32bf4e52cec1aa61eae96c1bec8e",
      projectLink: "https://stoppwwatch.ccbp.tech",
    },
    {
      title: "Match Game",
      description:
        "Test your memory and concentration with a captivating card matching experience.",
      imgUrl:
        "https://img.freepik.com/free-vector/match-game-kids_23-2148774051.jpg?w=740&t=st=1691759659~exp=1691760259~hmac=8d65e6454b789e7de8bd36f408d3fc3922b0fb957cc62ef1c6b37d95a32c3a86",
      projectLink: "https://matchgameayu.ccbp.tech",
    },
    {
      title: "Emoji Game",
      description:
        "Guess the words and phrases represented by emojis in this entertaining and challenging game.",
      imgUrl:
        "https://img.freepik.com/free-vector/colorful-emoji-set-theme_79603-1264.jpg?w=1060&t=st=1691763308~exp=1691763908~hmac=3acfae6a9f7886df4590f27334f10637bb494c7803eeaec012123ca550519dce",
      projectLink: "https://emojigameayu.ccbp.tech",
    },
    {
      title: "To-do App",
      description:
        "Organize your tasks efficiently and stay productive with a user-friendly task manager.",
      imgUrl:
        "https://img.freepik.com/free-vector/illustrated-appointment-booking-with-smartphone_52683-38829.jpg?w=740&t=st=1691760468~exp=1691761068~hmac=367506b57d285b630234365bb332f67259d4b37c2f1af9de16aa2e6e4017d427",
      projectLink: "https://ayutodo.ccbp.tech",
    },
    {
      title: "Gradient Color Generator",
      description:
        " Create stunning gradients effortlessly to enhance your design projects.",
      imgUrl:
        "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2430.jpg?w=1060&t=st=1691762952~exp=1691763552~hmac=de23ef1e016c1bc818b7c80fce85541d147f03b461b706b08727535e80301d94",
      projectLink: "https://ayucssgenerator.ccbp.tech",
    },
  ],
  projectTab3: [
    {
      title: "Food Munch",
      description:
        " Explore a world of culinary delights and discover a variety of delicious dishes with this interactive food app.",
      imgUrl:
        "https://img.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg?w=1060&t=st=1691763556~exp=1691764156~hmac=b519c03c49e4ae9fcc733cba04e8da8356efa533811beae69addc88933284530",
      projectLink: "",
    },
  ],
};

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>  
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Dive into a collection of my creative React projects, where
                    each line of code weaves a story of innovation. From
                    interactive user interfaces to seamless functionality, these
                    projects exemplify the dynamic capabilities of React in
                    delivering captivating web experiences.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          React Basic Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Current Working Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.projectTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.projectTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="d-flex justify-content-center">
                          {projects.projectTab3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          <p style={{ textAlign: "left" }}>
                            I am currently Working in a dynamic and engaging
                            Food Munch website project. Within this initiative,
                            I am leveraging the MERN (MongoDB, Express.js,
                            React, Node.js) technology stack to create a
                            seamless user experience. My responsibilities
                            encompass various aspects of the project, including
                            integrating the database to ensure efficient data
                            management and retrieval.
                            <br />
                            On the frontend, I am harnessing the power of React
                            to develop interactive and user-friendly interfaces
                            that provide an intuitive navigation experience.
                            Additionally, I am implementing Bootstrap, a popular
                            front-end framework, to enhance the website's
                            responsiveness across different devices and screen
                            sizes. This ensures that users can access and
                            interact with the website flawlessly, whether they
                            are on a desktop, tablet, or smartphone.
                          </p>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="" alt="image"></img>
    </section>
  );
};
