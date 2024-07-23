import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";
import { useSelector } from "react-redux";

export const Skills = () => {
  const japaneseToggled = useSelector(
    (state) => state.languageState.japaneseToggled
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {japaneseToggled ? (
              <div className="skill-bx wow zoomIn">
                <h2>スキル</h2>
                <p>これは私は少しプログラミング言語とツールを働いていました</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <h4>Front-end</h4>
                    <hr />
                    <h6>HTML</h6>
                    <h6>CSS</h6>
                    <h6>JavaScript</h6>
                    <h6>React</h6>
                  </div>
                  <div className="item">
                    <h4>Back-end</h4>
                    <hr />
                    <h6>Python</h6>
                    <h6>Flask</h6>
                    <h6>Node</h6>
                    <h6>Express</h6>
                  </div>
                  <div className="item">
                    <h4>Database</h4>
                    <hr />
                    <h6>SQL</h6>
                    <h6>SQLAchemy</h6>
                    <h6>Sequelize</h6>
                    <h6>PostgreSQL</h6>
                    <h6>MongoDB</h6>
                  </div>
                  <div className="item">
                    <h4>Tools</h4>
                    <hr />
                    <h6>VS Code</h6>
                    <h6>Github</h6>
                    <h6>Bash</h6>
                  </div>
                  <div className="item">
                    <h4>Soft skills</h4>
                    <hr />
                    <h6>Problem Solving</h6>
                    <h6>Communication</h6>
                  </div>
                </Carousel>
              </div>
            ) : (
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  Here are a few of the languages and tools I&#39;ve worked
                  with.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <h4>Front-end</h4>
                    <hr />
                    <h6>HTML</h6>
                    <h6>CSS</h6>
                    <h6>JavaScript</h6>
                    <h6>React</h6>
                  </div>
                  <div className="item">
                    <h4>Back-end</h4>
                    <hr />
                    <h6>Python</h6>
                    <h6>Flask</h6>
                    <h6>Node</h6>
                    <h6>Express</h6>
                  </div>
                  <div className="item">
                    <h4>Database</h4>
                    <hr />
                    <h6>SQL</h6>
                    <h6>SQLAchemy</h6>
                    <h6>Sequelize</h6>
                    <h6>PostgreSQL</h6>
                    <h6>MongoDB</h6>
                  </div>
                  <div className="item">
                    <h4>Tools</h4>
                    <hr />
                    <h6>VS Code</h6>
                    <h6>Github</h6>
                    <h6>Bash</h6>
                  </div>
                  <div className="item">
                    <h4>Soft skills</h4>
                    <hr />
                    <h6>Problem Solving</h6>
                    <h6>Communication</h6>
                  </div>
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
