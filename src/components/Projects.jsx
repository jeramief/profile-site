import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import shaystyles from "../assets/images/shaystyles.png";
import dreamtowers from "../assets/images/dreamtowers.png";
// import thegalli from "../assets/images/thegalli.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    // {
    //   link: "https://thegalli.netlify.app/",
    //   title: "The Galli",
    //   description: "Responsive and Accessible Restaurant Website",
    //   imgUrl: thegalli,
    // },
  ];
  const projects2 = [
    {
      link: "https://jeramief.github.io/dreamtowers/",
      title: "Dream Towers",
      description: "Responsive and Accessible Construction Website",
      imgUrl: dreamtowers,
    },
  ];
  const projects3 = [
    {
      link: "https://shaystyles.netlify.app/",
      title: "Shay Styles Hair Salon",
      description: "Responsive and Accessible Hair Salon Website",
      imgUrl: shaystyles,
    },
  ];

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

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                    // id="slideInUp"
                    // className={
                    //   isVisible ? "animate__animated animate__slideInUp" : ""
                    // }
                    >
                      <Tab.Pane eventKey="first">
                        {/* <p>
                          These are some of the open source projects I&#39;ve
                          contributed to{" "}
                        </p> */}
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index[0]} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* <p>
                          These are some of the open source projects I&#39;ve
                          contributed to{" "}
                        </p> */}
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {/* <p>
                          These are some of the open source projects I&#39;ve
                          contributed to{" "}
                        </p> */}
                        <Row>
                          {projects3.map((project, index) => {
                            return (
                              <ProjectCard href="#" key={index} {...project} />
                            );
                          })}
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
