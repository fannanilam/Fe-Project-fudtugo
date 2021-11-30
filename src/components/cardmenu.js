import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardMenu({
  nama,
  harga,
  img,
  menuKategori,
  rating,
  handleButton,
}) {
  const formatRupiah = () => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(harga);
  };

  return (
    <>
      {" "}
      <Card style={{ width: "12rem", marginRight: "60px" }}>
        <Card.Img
          roundedCircle
          variant="top"
          src={img}
          style={{ height: "216px" }}
        />
        <Card.Body>
          <Row style={{ fontSize: "14px" }}>
            <Col style={{ textAlign: "left" }}>
              {" "}
              <Card.Text>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontFamily: "Roboto Slab",
                    fontWeight: "bolder",
                  }}
                >
                  {nama}
                </p>
                <p> {menuKategori}</p>
                <strong style={{ fontFamily: "Roboto Slab", fontSize: "20px" }}>
                  {formatRupiah()}{" "}
                </strong>
              </Card.Text>
              <Link to={"/cart"}>
                <Button
                  onClick={handleButton}
                  variant="warning"
                  style={{ marginLeft: "50px", fontSize: "15px" }}
                >
                  Add to Cart
                </Button>{" "}
              </Link>
              <p>⭐{rating} </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
