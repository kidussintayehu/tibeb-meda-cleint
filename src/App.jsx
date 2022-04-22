import Home from "./pages/Home"
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Cart from "./pages/Carts";

import Login from "./pages/Login";
import Success from "./pages/Success"
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

import Register from "./pages/Register";
import { useSelector } from "react-redux";

const App = () => {
  const  user = useSelector((state) => state.user.currentUser);
  console.log("user",user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Home />} />
        <Route path="/products/:category"
          element={<ProductList />}
        />
        <Route path="/products/"
          element={<ProductList />}
        />
        <Route path="/product/:id"
          element={
            <Product />
          }
        />
        <Route path="/cart"
          element={<Cart />}
        />
        <Route path="/success"
          element={<Success />}
        />
        <Route path="/login" element={
          user ? <Home />
            : <Login />
        }>
        </Route>
        <Route path="/register" element={
          user ? <Home />
            : <Register />
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App