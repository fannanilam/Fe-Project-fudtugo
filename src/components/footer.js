import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./navbar.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      className="font-small pt-4 mt-4"
      style={{
        backgroundColor: "#FFDDAB",
        position: "relative",
        bottom: " 0",
        width: "100%",
      }}
    >
      <Container fluid className="footer">
        <Row>
          <Col md="5">
            <h5
              className="logo"
              style={{
                color: "#f8b147",
                textAlign: "left",
                paddingLeft: "32px",
              }}
            >
              fudtugo
            </h5>
            <p style={{ textAlign: "center" }}>
              Best cooks and best delivery guys at all your services.
            </p>
            <BsFacebook style={{ marginLeft: "30px", marginRight: "10px" }} />
            <BsTwitter style={{ marginRight: "10px" }} />
            <BsInstagram />
          </Col>
          <Col md="4">
            <h5 style={{ fontFamily: "Roboto Slab", textAlign: "left" }}>
              Company
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  Career
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  About Us
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  Features
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  Privacy
                </a>
              </li>
            </ul>
          </Col>
          <Col md="3">
            <h5 style={{ fontFamily: "Roboto Slab" }}>Fudtugo</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  Why fudtugo
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  How it works
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  Client Stories
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "black" }}>
                  Securities
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: "#f8b147", height: "50px" }}>
        <p style={{ marginLeft: "500px",  }}> Copyright 2021 Fanna Nilam </p>
      </Container>
    </footer>
  );
}
