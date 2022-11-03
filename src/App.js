import { Routes,Route,Link,useNavigate,Outlet } from 'react-router-dom';
import { useState } from 'react';
// css
import "./reset.css";
// route
import Main from "./router/Main";
import Men from "./router/Men";
// component
import Nav from "./components/Nav";

function App() {
  const [userMenuColor,setUserMenuColor] = useState("");
  const [navIndex, setNavIndex] = useState("");
  return (
    <div className="App">
      <Nav navIndex={navIndex} setNavIndex={setNavIndex}/>
      <Routes>
        <Route path="/" element={<Main navIndex={navIndex}/>}></Route>
        <Route path="/men" element={<Men navIndex={navIndex}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
