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
  // const [navItemColor, setNavItemColor] = useState(0);
  const [userMenuColor,setUserMenuColor] = useState("");
  const [unmount, setUnmount] = useState(false);
  const [navIndex, setNavIndex] = useState("");
  // 네비 : 유저메뉴컬러, 네비인덱스, 언마운트?
  return (
    <div className="App">
      <Nav userMenuColor={userMenuColor} setUnmount={setUnmount} unmount={unmount} navIndex={navIndex} setNavIndex={setNavIndex}/>
      <Routes>
        <Route path="/" element={<Main setUserMenuColor={setUserMenuColor} unmount={unmount} setUnmount={setUnmount} setNavIndex={setNavIndex}/>}></Route>
        {/* <Route path="/men" element={<Men setUserMenuColor={setUserMenuColor} setNavIndex={setNavIndex}/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
