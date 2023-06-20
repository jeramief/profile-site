import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import GitHub from "../assets/images/github.svg";
import Twitter from "../assets/images/twitter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jeramieforbes/">
                <img src={LinkedIn} alt="Icon" />
              </a>
              <a href="https://github.com/jeramief">
                <img src={GitHub} alt="Icon" />
              </a>
              <a href="https://twitter.com/forbes_jeramie">
                <img src={Twitter} alt="Icon" />
              </a>
            </div>
            <small>Copyright 2023. All Rights Reserved</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
