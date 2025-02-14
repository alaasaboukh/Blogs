import "./app.scss";
import Content from "./layout/Content";
import Navbar from "./layout/Navbar";
import data from "./data/data";
import { useState } from "react";
import { MyContext } from "./context/Context";
import Footer from "./layout/Footer";
import Login from "./nested/Login";
import Menu from "./nested/Menu";

function App() {
  const [product, setProduct] = useState(data);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <MyContext.Provider value={{ product, setProduct }}>
      <div className="app">
        <Login show={show} setShow={setShow} />
        <Navbar
          setShow={setShow}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <Menu setShow={setShow} showMenu={showMenu} setShowMenu={setShowMenu} />
        <Content />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
