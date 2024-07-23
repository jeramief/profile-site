// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

export const Banner = () => {
  const japaneseToggled = useSelector(
    (state) => state.languageState.japaneseToggled
  );

  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  // const [index, setIndex] = useState(1);
  // const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex((prevIndex) => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              {japaneseToggled ? (
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <span className="tagline">ポートフォリオにようこそ</span>
                      <h1>
                        {/* {`Hi! I'm Jeramie,`}{" "} */}
                        JERAMIE FORBES
                        {/* <span
                      className="txt-rotate"
                      // eslint-disable-next-line react/no-unknown-property
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span> */}
                      </h1>
                      <p>
                        私は技術者の役割から独学に移行しました
                        ソフトウェアエンジニアは、個人的な学習に着手します
                        ポジティブにしたいという私の願望に駆り立てられた旅
                        人と環境の両方への影響。
                      </p>

                      <HashLink to="#connect">
                        <button>
                          <span>
                            私を雇うてください！ <ArrowRightCircle size={25} />
                          </span>
                        </button>
                      </HashLink>
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
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1>
                        {/* {`Hi! I'm Jeramie,`}{" "} */}
                        JERAMIE FORBES
                        {/* <span
                  className="txt-rotate"
                  // eslint-disable-next-line react/no-unknown-property
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span> */}
                      </h1>
                      <p>
                        I transitioned from a technician role to a self-taught
                        software engineer by embarking on a personal learning
                        journey driven by my aspiration to make a positive
                        impact on both people and the environment. Through
                        dedicated self-study and hands-on projects, I acquired
                        proficiency in software development methodologies, and
                        the ability to create robust, scalable software
                        solutions.
                      </p>

                      <HashLink to="#connect">
                        <button>
                          <span>
                            HIRE ME! <ArrowRightCircle size={25} />
                          </span>
                        </button>
                      </HashLink>
                    </div>
                  )}
                </TrackVisibility>
              )}
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
