import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "./store";
// css
import "./reset.css";
// component
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";
// route
import Main from "./routes/Main";
const Shop = lazy( () => import('./routes/Shop') );
const Detail = lazy( () => import('./routes/Detail') );
const Cart = lazy( () => import('./routes/Cart') );

function App() {
  const dispatch = useDispatch();
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
