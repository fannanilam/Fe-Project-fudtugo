// import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container
        style={{
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <Row>
          <Col lg={7} style={{ textAlign: "left" }}>
            <h1
              style={{
                fontFamily: "Playfair Display",
                textDecoration: "Bold",
                fontSize: "100px",
                fontWeight: "bolder",
              }}
            >
              Fastest{" "}
            </h1>
            <h1
              style={{
                fontFamily: "Playfair Display",
                color: "#F8B147",
                textDecoration: "Bold",
                fontSize: "100px",
                fontWeight: "bolder",
              }}
            >
              Delivery &{" "}
            </h1>
            <h1
              style={{
                fontFamily: "Playfair Display",
                extDecoration: "Bold",
                fontSize: "90px",
                ontWeight: "bolder",
              }}
            >
              Easy Pickup
            </h1>
            <h5
              style={{
                fontFamily: "Roboto Slab",
                fontSize: "30px",
                fontWeight: "lighter",
              }}
            >
              Best cooks and best delivery guys at all your service
            </h5>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Find your favorite menu here"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="warning">
                <Link
                  to="/menu"
                  style={{ textDecoration: "None", color: "black" }}
                >
                  Search
                </Link>
              </Button>
            </Form>
          </Col>
          <Col lg={5} style={{ marginTop: "30px", paddingLeft: "100px" }}>
            <img
              src="/assets/homeFoto.jpeg"
              alt="home"
              className="rounded"
              style={{ height: "400px", width: "410px" }}
            />
          </Col>
        </Row>
      </Container>
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
        <Row>
          <Col lg={6}>
            <img
              src="/assets/sopBuntut.png"
              alt="home2"
              className="rounded"
              style={{ height: "430px", width: "360px", paddingTop: "120px" }}
            />
          </Col>
          <Col lg={6} style={{ marginTop: "80px" }}>
            <h6
              style={{
                color: "white",
                backgroundColor: "#f8b147",
                textAlign: "center",
                width: "60px",
                height: "30px",
              }}
            >
              -30%
            </h6>
            <h1
              style={{
                fontFamily: "Playfair Display",
                color: "#f8b200",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Today Special Offer
            </h1>
            <h1
              style={{
                textAlign: "left",
                fontFamily: "Roboto Slab",
                fontWeight: "bold",
              }}
            >
              Sop Buntut
            </h1>
            <h4
              style={{
                textAlign: "left",
                fontFamily: "Roboto Slab",
                fontWeight: "bold",
              }}
            >
              Rp 21.000,-
            </h4>
            <p style={{ textDecoration: "line-through", textAlign: "left" }}>
              Rp 30.000,-
            </p>
            <Button variant="warning">
              <Link
                to="/cart"
                style={{ textDecoration: "None", color: "black" }}
              >
                Pesan Sekarang
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
