import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./navbar.css";

function navbar() {
  return (
    <>
      <Navbar className="nav-bg" expand="lg">
        <Container fluid>
          <Navbar.Brand
            className="logo"
            style={{ marginRight: "400px", color: "#F8B147" }}
          >
            fudtugo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "None", color: "black" }}>
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title="Menu" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link
                    to="/menu"
                    style={{ textDecoration: "None", color: "black" }}
                  >
                    Indonesian Food
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/menu"
                    style={{ textDecoration: "None", color: "black" }}
                  >
                    Japanese Food
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/menu"
                    style={{ textDecoration: "None", color: "black" }}
                  >
                    Western Food
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/menu"
                    style={{ textDecoration: "None", color: "black" }}
                  >
                    Korean Food
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/menu"
                    style={{ textDecoration: "None", color: "black" }}
                  >
                    Italian Food
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link
                  to="/aboutUs"
                  style={{ textDecoration: "None", color: "black" }}
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/cart"
                  style={{ textDecoration: "None", color: "black" }}
                >
                  Cart
                </Link>
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form> */}
            <Button variant="outline-warning" style={{ marginRight: "20px" }}>
              <Link
                to="/login"
                style={{ textDecoration: "None", color: "black" }}
              >
                Sign In
              </Link>
            </Button>
            <Button variant="warning">
              <Link
                to="/signup"
                style={{ textDecoration: "None", color: "black" }}
              >
                Sign Up
              </Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default navbar;
