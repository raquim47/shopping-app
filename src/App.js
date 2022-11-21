import { Routes,Route,Link,useNavigate,Outlet } from 'react-router-dom';
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
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/shop/:gender" element={<Shop />} />
        <Route path="/detail/:gender/:cate/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
