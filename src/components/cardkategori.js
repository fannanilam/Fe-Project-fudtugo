import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardKategori({ name, img, idx }) {
  return (
    <>
      {" "}
      <Card style={{ width: "150px" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "216px", objectFit: "cover" }}
        />
        <Card.Body>
          <Row style={{ fontSize: "14px" }}>
            <Col style={{ textAlign: "left" }}>
              {" "}
              <Card.Text>
                {name}
                <br />
              </Card.Text>
            </Col>
            <Col style={{ textAlign: "left" }}>
              <Link to={`/menu/${idx}`}></Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
