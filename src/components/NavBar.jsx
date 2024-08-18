import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import GitHub from "../assets/images/github.svg";
// import Twitter from "../assets/images/twitter.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchLanguage from "./SwitchLanguage";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const japaneseToggled = useSelector(
    (state) => state.languageState.japaneseToggled
  );

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
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
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        {japaneseToggled ? (
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} className="logo" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            {/* <div className="nav-links"> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  ホーム
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  スキル
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  プロジェクト
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/jeramieforbes/">
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/jeramief">
                    <img src={GitHub} alt="" />
                  </a>
                  {/* <a href="https://twitter.com/forbes_jeramie">
                  <img src={Twitter} alt="" />
                </a> */}
                </div>
                <HashLink to="#connect">
                  <button className="vvd">
                    <span>接続しましょう</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
            {/* <input type="checkbox" onChange={() => setJapaneseToggled(false)} /> */}
            {/* </div> */}
          </Container>
        ) : (
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} className="logo" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            {/* <div className="nav-links"> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/jeramieforbes/">
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/jeramief">
                    <img src={GitHub} alt="" />
                  </a>
                  {/* <a href="https://twitter.com/forbes_jeramie">
                  <img src={Twitter} alt="" />
                </a> */}
                </div>
                <HashLink to="#connect">
                  <button className="vvd">
                    <span>Let&lsquo;s Connect</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
            {/* <input type="checkbox" onChange={() => setJapaneseToggled(true)} /> */}
            {/* </div> */}
          </Container>
        )}
        <SwitchLanguage />
      </Navbar>
    </Router>
  );
};
