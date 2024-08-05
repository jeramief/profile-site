import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import wendigo from "../assets/images/wendigo.png";
import fairshare from "../assets/images/fairshare.png";
import shaystyles from "../assets/images/shaystyles.png";
import dreamtowers from "../assets/images/dreamtowers.png";
import thegalli from "../assets/images/thegalli.png";
import mechnewton from "../assets/images/mechnewton.png";
import airquality from "../assets/images/airquality.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useSelector } from "react-redux";

export const Projects = () => {
  const japaneseToggled = useSelector(
    (state) => state.languageState.japaneseToggled
  );

  const projects1 = {
    english: [
      {
        link: "https://wendigo.onrender.com/",
        title: "Wendigo",
        description:
          "Online used car dealership, built with Python/Flask on the backend, React.js on the frontend and PostgreSQL for the database.",
        imgUrl: wendigo,
      },
      {
        link: "https://fairshare-f8a7.onrender.com/",
        title: "Fair$hare",
        description:
          "Expense Spliting web app, built with Python/Flask on the backend, React.js on the frontend and PostgreSQL for the database.",
        imgUrl: fairshare,
      },
    ],
    japanese: [
      {
        link: "https://mechnewton.netlify.app/",
        title: "Wendigo",
        description:
          "バックエンドにPython/Flask,フロントエンドにReact.js,データベースにPostgreSQLを使用して構築されたオンラインの中古車販売店。",
        imgUrl: wendigo,
      },
      {
        link: "https://fairshare-f8a7.onrender.com/",
        title: "Fair$hare",
        description:
          "バックエンドにPython/Flaskで構築されたExpense SplitingWebアプリ,フロントエンドにReact.js,データベースにPostgreSQL。",
        imgUrl: fairshare,
      },
    ],
  };
  const projects2 = {
    english: [
      {
        link: "https://mechnewton.netlify.app/",
        title: "MechNewton",
        description:
          "Responsive and Accessible Auto Mechanic Website. Built in HTML, CSS, JavaScript.",
        imgUrl: mechnewton,
      },
      {
        link: "https://thegalli.netlify.app/",
        title: "The Galli",
        description:
          "Responsive and Accessible Restaurant Website. Built in HTML, CSS, JavaScript.",
        imgUrl: thegalli,
      },
      {
        link: "https://jeramief.github.io/dreamtowers/",
        title: "Dream Towers",
        description:
          "Responsive and Accessible Construction Website. Built in HTML, CSS, JavaScript.",
        imgUrl: dreamtowers,
      },
    ],
    japanese: [
      {
        link: "https://mechnewton.netlify.app/",
        title: "MechNewton",
        description:
          "レスポンシブでアクセス可能な自動車整備士のWebサイト。HTML,CSS,JavaScriptで構築されています。",
        imgUrl: mechnewton,
      },
      {
        link: "https://thegalli.netlify.app/",
        title: "The Galli",
        description:
          "レスポンシブでアクセスしやすいレストランのウェブサイト。HTML,CSS,JavaScriptで構築されています。",
        imgUrl: thegalli,
      },
      {
        link: "https://jeramief.github.io/dreamtowers/",
        title: "Dream Towers",
        description:
          "レスポンシブでアクセスしやす建設のウェブサイト。HTML, CSS, JavaScriptで構築されています",
        imgUrl: dreamtowers,
      },
    ],
  };
  const projects3 = {
    english: [
      {
        link: "https://shaystyles.netlify.app/",
        title: "Shay Styles Hair Salon",
        description:
          "Responsive and Accessible Hair Salon Website. Built in HTML, CSS, JavaScript.",
        imgUrl: shaystyles,
      },
      {
        link: "https://checkairquality.netlify.app/",
        title: "Air Quality Checker",
        description:
          "A website to check the air quality in different areas of the world. Built in React.js",
        imgUrl: airquality,
      },
    ],
    japanese: [
      {
        link: "https://shaystyles.netlify.app/",
        title: "Shay Styles Hair Salon",
        description:
          "レスポンシブでアクセス可能なヘアサロンのウェブサイト。HTML、CSS、JavaScriptで構築されています。",
        imgUrl: shaystyles,
      },
      {
        link: "https://checkairquality.netlify.app/",
        title: "Air Quality Checker",
        description:
          "世界のさまざまな地域の空気の質をチェックするためのWebサイト。React.js内蔵",
        imgUrl: airquality,
      },
    ],
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {japaneseToggled ? (
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>プロジェクト</h2>

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">
                            プロジェクトたーぶ
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            プロジェクトたーぶ
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">
                            プロジェクトたーぶ
                          </Nav.Link>
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
                            {projects1.japanese.map((project, index) => {
                              return (
                                <ProjectCard key={index[0]} {...project} />
                              );
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          {/* <p>
                          These are some of the open source projects I&#39;ve
                          contributed to{" "}
                        </p> */}
                          <Row>
                            {projects2.japanese.map((project, index) => {
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
                            {projects3.japanese.map((project, index) => {
                              return (
                                <ProjectCard
                                  href="#"
                                  key={index}
                                  {...project}
                                />
                              );
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            ) : (
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
                          <Nav.Link eventKey="first">Project Tab</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Project Tab</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Project Tab</Nav.Link>
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
                            {projects1.english.map((project, index) => {
                              return (
                                <ProjectCard key={index[0]} {...project} />
                              );
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          {/* <p>
                          These are some of the open source projects I&#39;ve
                          contributed to{" "}
                        </p> */}
                          <Row>
                            {projects2.english.map((project, index) => {
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
                            {projects3.english.map((project, index) => {
                              return (
                                <ProjectCard
                                  href="#"
                                  key={index}
                                  {...project}
                                />
                              );
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            )}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
