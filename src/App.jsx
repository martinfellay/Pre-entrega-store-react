import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./routes/Inicio.jsx";
import Contacto from "./routes/Contacto.jsx";
import Sale from "./routes/Sale.jsx";
import DetalleProducto from "./components/DetalleProducto.jsx";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />
        <Route path={"/sale"} element={<Sale />} />
        <Route path={"/productos/:id"} element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
