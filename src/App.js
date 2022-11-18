import { Routes,Route,Link,useNavigate,Outlet } from 'react-router-dom';
// css
import "./reset.css";
// route
import Main from "./routes/Main";
import Shop from "./routes/Shop";
import Detail from "./routes/Detail";
// component
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/shop/:gender" element={<Shop />}></Route>
        <Route path="/detail/:gender/:cate/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
