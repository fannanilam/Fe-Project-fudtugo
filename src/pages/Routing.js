import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Home from "./Home";
import Menu from "./Menu";
import Aboutus from "./Aboutus";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import { CartProvider } from "react-use-cart";

export default function Routing() {
  let path = useLocation();
  return (
    <>
      {path.pathname === "/login" || path.pathname === "/signup" ? null : (
        <Navbar />
      )}
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </CartProvider>
      {path.pathname === "/login" || path.pathname === "/signup" ? null : (
        <Footer />
      )}
    </>
  );
}
