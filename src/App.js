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
  const [page, setPage] = useState("");
  console.log(page)
  return (
    <div className="App">
      <Nav page={page} setPage={setPage}/>
      <Routes>
        <Route path="/" element={<Main page={page}/>}></Route>
        <Route path="/men" element={<Men page={page} setPage={setPage} />}></Route>
        <Route path="/women" element={<Women page={page} setPage={setPage} />}></Route>
        <Route path="/detail" element={<Detail setPage={setPage}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
