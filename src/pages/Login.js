import { React, useState } from "react";
import "./Login.css";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import { gql, useLazyQuery } from "@apollo/client";
import Swal from "sweetalert2";
import LoadingSvg from "./LoadingSvg";

const QueryLogin = gql`
  query Login($email: String!, $password: String!) {
    user(
      where: { _and: {}, email: { _eq: $email }, password: { _eq: $password } }
    ) {
      id
      email
    }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doLogin, { data: dataGet, loading: loadingGet, error: errorGet }] =
    useLazyQuery(QueryLogin, {
      onCompleted: (data) => {
        if (data.user?.length > 0) {
          setCookie(null, "userId", data.user[0].id);
          Swal.fire("Sign In Success!", "success");
          navigate("/", { replace: true });
        }
        if (data.user?.length === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or  Password is wrong!",
          });
        }
      },
    });
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin({
      variables: {
        email,
        password,
      },
    });
  };
  if (loadingGet) return <LoadingSvg />;
  if (errorGet) {
    console.log(errorGet);
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "#F8B147",
          marginTop: "30px",
          fontFamily: "PlayfairDisplay",
          fontWeight: "bolder",
          fontSize: "50px",
          marginBottom: "20px",
        }}
      >
        fudtugo
      </div>
      <Container
        style={{
          backgroundColor: "white",
          width: "400px",
          height: "450px",
          marginTop: "40px",
          borderRadius: "20px",
        }}
      >
        <FloatingLabel>
          <Form onSubmit={handleSubmit}>
            <h3 style={{ textAlign: "center" }}>Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                onChange={handleChangeEmail}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={handleChangePassword}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <Button
                type="submit"
                className="btn btn-primary btn-block"
                variant="warning"
                tyle={{ fontFamily: "Roboto Slab", fontWeight: "bold" }}
              >
                Submit
              </Button>
              <hr />
            </div>
            <p
              className="forgot-password text-right"
              style={{ textAlign: "center" }}
            >
              Didn't have any account?
              <br />
              <Button className="btn btn-warning btn-block">
                <a
                  href="/signup"
                  style={{
                    textDecoration: "None",
                    color: "black",
                    fontFamily: "Roboto Slab",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </a>
              </Button>
            </p>
          </Form>
        </FloatingLabel>
      </Container>
    </>
  );
}
