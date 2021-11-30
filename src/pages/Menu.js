import {
  Container,
  Col,
  Row,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { gql, useQuery, useMutation } from "@apollo/client";
import CardMenu from "../components/cardmenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSvg from "./LoadingSvg";
import { QUERY } from "./Cart.js";

const QUERY2 = gql`
  query menu {
    menu {
      id
      img
      nama
      harga
      rating
      kategoriMenu
      kategoriMenu {
        id
        namaKategori
      }
    }
  }
`;

const MutationAddCart = gql`
  mutation AddCart($cartMenu: Int!, $quantity: Int!) {
    insert_cart_one(object: { cartMenu: $cartMenu, quantity: $quantity }) {
      id
      quantity
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

const Menu = () => {
  const {
    data: datacart,
    loading: loadingcart,
    error: errorcart,
  } = useQuery(QUERY);
  const { data, loading, error } = useQuery(QUERY2);
  const [addCart, { loading: loadingadd, error: erroradd }] = useMutation(
    MutationAddCart,
    { refetchQueries: [QUERY] }
  );
  const [updateCart, { loading: loadingupdate, error: errorupdate }] =
    useMutation(MutationUpdateQuantity, { refetchQueries: [QUERY] });
  const [search, setSearch] = useState("");
  // const [cartMenu, setCartMenu] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
 
  const handleButton = (v) => {
    const exist = datacart?.cart.find((cart) => cart.cartMenu === v.id);
    if (exist) {
      // update
      updateCart({
        variables: { cartMenu: v.id },
      });
    } else {
      // create
      addCart({
        variables: { cartMenu: v.id, quantity: 1 },
      });
    }
    console.log(v);
  };

  if (loading || loadingadd || loadingupdate || loadingcart) return <LoadingSvg />;
  if (error || erroradd || errorupdate || errorcart) {
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
          Our Menu
        </h2>
      </Container>
      <Container style={{ width: "500px" }} handler={handleSearch}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Find your favorite menu here"
            className="me-2"
            aria-label="Search"
          />
          {/* {search?
            data?.Menu.filter((menu)=>{
              if(menu.nama.toLowerCase().includes(search.toLowerCase())){
                return true
              }else{
                return false
              }
            }).map((menu)=>{
              return <Menu id={menu.id} nama={menu.nama} harga={menu.harga} img={menu.img} rating={menu.rating} />
            })
            :
            data?.Menu.map((menu)=>{
              return <Menu id={menu.id} nama={menu.nama} harga={menu.harga} img={menu.img} rating={menu.rating}/>
            })} */}
          <Button variant="warning">
            <Link to="/menu" style={{ textDecoration: "None", color: "black" }}>
              Search
            </Link>
          </Button>
        </Form>
      </Container>
      <Container style={{ marginRight: "100px", marginTop: "30px" }}>
        <Row className="justify-content-center">
          {data.menu.map((v) => {
            return (
              <Col
                key={v.id}
                md="auto"
                xs={6}
                sm={4}
                lg={3}
                style={{ marginTop: "20px" }}
              >
                <CardMenu
                  handleButton={() => handleButton(v)}
                  idx={v.id}
                  img={v.img}
                  nama={v.nama}
                  harga={v.harga}
                  rating={v.rating}
                  menu={v.menu}
                  kategoriMenu={v.kategoriMenu.namaKategori}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Menu;
