import { Routes,Route,Link,useNavigate,Outlet } from 'react-router-dom';
import { useState } from 'react';
// css
import "./reset.css";
// route
import Main from "./routes/Main";
import Men from "./routes/Men";
import Women from "./routes/Women";
import Detail from "./routes/Detail";
// component
import Nav from "./components/Nav";

function App() {
  const [navIndex, setNavIndex] = useState("");
  console.log(navIndex)
  return (
    <div className="App">
      <Nav navIndex={navIndex} setNavIndex={setNavIndex}/>
      <Routes>
        <Route path="/" element={<Main navIndex={navIndex}/>}></Route>
        <Route path="/men" element={<Men navIndex={navIndex} setNavIndex={setNavIndex} />}></Route>
        <Route path="/women" element={<Women navIndex={navIndex} setNavIndex={setNavIndex} />}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
