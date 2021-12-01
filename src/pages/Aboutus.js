import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Aboutus() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#FDCC83",
          paddingTop: "40px",
          marginBottom: "40px",
          textAlign: "center",
          height: "600px",
        }}
      >
        <h1 style={{ fontFamily: "Playfair Display", color: "black" }}>
          Your Favorite Food Delivery Partner
        </h1>{" "}
        <br />
        <img
          src="/assets/homeFoto.jpeg"
          alt="description"
          class="rounded"
          style={{ height: "360px", width: "365px" }}
        />
      </Container>
      <Container
        style={{
          backgroundColor: "white",
          paddingTop: "40px",
          marginBottom: "40px",
          textAlign: "center",
          height: "500px",
          borderRadius: "20px",
        }}
      >
        <Row>
          <Col lg={3}>
            <h2
              style={{
                color: "#F8B147",
                fontFamily: "Playfair Display",
                fontWeight: "bolder",
                fontSize: "45px",
                paddingTop: "60px",
                paddingBottom: "83px",
              }}
            >
              fudtugo
            </h2>
            <hr />
          </Col>
          <Col lg={9}>
            <h4
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "lighter",
                textAlign: "left",
              }}
            >
              About Us
            </h4>
            <br />
            <h6
              style={{
                fontFamily: "Open Sans",
                fontWeight: "lighter",
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h6>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <h2
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "lighter",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              {" "}
              Since <br /> 2021
            </h2>
          </Col>
          <Col lg={4}>
            <h2
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "lighter",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              {" "}
              +3000 <br /> orders
            </h2>
          </Col>
          <Col lg={4}>
            <h2
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "lighter",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              {" "}
              +2.5k reviews
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Aboutus;
