import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "./store";
// import { useSelector } from 'react-redux';
// css
import "./reset.css";
// route
import Main from "./routes/Main";
import Shop from "./routes/Shop";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
// component
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";

function App() {
  const dispatch = useDispatch();
  // const cartData = useSelector((state) => state.cartData);
  useEffect(() => {
    const parsedLocalCart = JSON.parse(localStorage.getItem("cart"));
    dispatch(resetCart(parsedLocalCart));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop/:gender" element={<Shop />} />
        <Route path="/detail/:gender/:cate/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
