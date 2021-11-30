import { useState, useEffect } from "react";
import "./Login.css";
import { Form, Button, Container } from "react-bootstrap";
import { gql, useMutation } from "@apollo/client";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSvg from "./LoadingSvg";

const MutationSignup = gql`
  mutation signup($email: String!, $password: String!) {
    insert_user_one(object: { email: $email, password: $password }) {
      id
    }
  }
`;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    doSignup,
    { error: signupError, loading: signupLoading, data: signupData },
  ] = useMutation(MutationSignup, {
    onError: () => {},
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (
      signupError?.message?.includes(
        'duplicate key value violates unique constraint "user_email_key"'
      )
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email already exist!",
      });
    }
  }, [signupError]);

  useEffect(() => {
    if (signupData) {
      Swal.fire("Sign Up Success!", "success");
      setCookie(null, "userId", signupData.id);
      navigate("/", { replace: true });
    }
  }, [signupData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    doSignup({
      variables: {
        email,
        password,
      },
    });
  };

  if (signupLoading) return <LoadingSvg />;
  
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
          marginBottom: "30px",
        }}
      >
        fudtugo
      </div>
      <Container
        style={{
          backgroundColor: "white",
          width: "400px",
          height: "450px",
          borderRadius: "20px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <br />
          <h3 style={{ textAlign: "center" }}>Sign Up</h3>
          <br />
          <div className="form-group">
            <label>Email address</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              controlId="formBasicEmail"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              controlId="formBasicPassword"
              placeholder="Enter password"
            />
          </div>
          <br />
          <div class="col-md-12 text-center">
            <Button
              type="submit"
              className="btn btn-warning btn-block"
              style={{ fontFamily: "Roboto Slab", fontWeight: "bold" }}
            >
              Sign Up
            </Button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </Form>
      </Container>
    </>
  );
}
