import { Container, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import LoadingSvg from "./LoadingSvg";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const QUERY = gql`
  query cart {
    cart {
      id
      cartMenu
      quantity
      menuCart {
        nama
        harga
      }
    }
  }
`;

const MutationDelete = gql`
  mutation delete($id: Int!) {
    delete_cart_by_pk(id: $id) {
      id
    }
  }
`;

const MutationDeleteAllCart = gql`
  mutation DeleteAllCart($ids: [Int!]!) {
    delete_cart(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`;

const MutationUpdateQuantity = gql`
  mutation MyMutation2($cartMenu: Int!) {
    update_cart(
      where: { cartMenu: { _eq: $cartMenu } }
      _inc: { quantity: 1 }
    ) {
      returning {
        id
        quantity
      }
    }
  }
`;

function Cart() {
  const { data, loading, error } = useQuery(QUERY);
  const [
    deleteCart,
    { loading: loadingDelete, error: errorDelete },
  ] = useMutation(MutationDelete, { refetchQueries: [QUERY] });
  const [
    deleteAllCart,
    { loading: loadingDeleteAll, error: errorDeleteAll },
  ] = useMutation(MutationDeleteAllCart, { refetchQueries: [QUERY] });
  const [updateCart, { loading: loadingupdate, error: errorupdate }] =
    useMutation(MutationUpdateQuantity, { refetchQueries: [QUERY] });
  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    const total = data?.cart.reduce((prev, current) => {
      const totaltmp = current.quantity * current.menuCart.harga;
      return prev + totaltmp;
    }, 0);
    setTotalHarga(total);
  }, [data]);

  const hapusCart = (id) => {
    deleteCart({
      variables: { id },
    });
  };
  const deleteallCart = () => {
    const ids = data?.cart.map((v) => {
      return v.id;
    });
    deleteAllCart({
      variables: { ids },
    });
    Swal.fire({
      icon: "success",
      title: "Order Success!",
      text: "Sit tight, we're placing your order :)",
    });
  };
  const tambahItem = (id) => {
    updateCart({
      variables: { id },
    });
  };

  if (loading || loadingDelete || loadingupdate || loadingDeleteAll)
    return <LoadingSvg />;

  if (error || errorDelete || errorupdate || errorDeleteAll) {
    console.log(error);
  }
  return (
    <>
      <Container fluid>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Playfair Display",
            marginTop: "30px",
          }}
        >
          Your cart
        </h2>
        <Row>
          <Col lg={8}>
            <table className="table table-warning table-hover">
              <tbody>
                {data.cart.map((v) => {
                  console.log(v);
                  return (
                    <tr key={v.id}>
                      <td>{v.menuCart.nama}</td>
                      <td>@Rp.{v.menuCart.harga}</td>
                      <td>
                        Quantity:
                        <br />
                        {v.quantity}
                      </td>
                      <td>
                        <Button
                          variant="outline-warning"
                          style={{ marginRight: "30px" }}
                          onClick={() => (v.id)}
                        >
                          -
                        </Button>

                        <Button
                          variant="warning"
                          onClick={() => tambahItem(v.id)}
                        >
                          +
                        </Button>
                        <Button
                          className="btn btn-danger ms-2"
                          onClick={() => hapusCart(v.id)}
                        >
                          delete
                        </Button>
                      </td>
                      <td>
                        Subtotal:
                        <br />
                        Rp. {v.menuCart.harga * v.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
          <Col
            lg={4}
            style={{
              backgroundColor: "#FDCC83",
              height: "400px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ fontFamily: "Roboto Slab", marginTop: "20px" }}>
              Total Price: Rp. {totalHarga}
            </h3>
          </Col>
          <Col>
            <Button variant="outline-warning" style={{ marginRight: "950px" }}>
              <Link
                to="/menu"
                style={{ textDecoration: "None", color: "black" }}
              >
                Continue Order
              </Link>
            </Button>
            <Button className="btn btn-warning m-2" onClick={deleteallCart}>
              Check Out Now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
