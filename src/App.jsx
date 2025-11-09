import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Inicio from "./routes/Inicio.jsx";
import Contacto from "./routes/Contacto.jsx";
import Sale from "./routes/Sale.jsx";
import Login from "./routes/Login";
import Admin from "./components/Admin";
import Carrito from "./components/Carrito";

import DetalleProducto from "./routes/DetalleProducto.jsx";
import RutaProtegida from "./components/RutaProtegida";
import Privacity from "./components/Politicies.jsx";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />
        <Route path={"/sale"} element={<Sale />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/privacity"} element={<Privacity />} />
        <Route path={"/productos/:id"} element={<DetalleProducto />} />
          {/* No se pide para la pre-entrega */}
          <Route
            path="/carrito"
            element={
              <RutaProtegida >
                <Carrito />
              </RutaProtegida>
            }
          />
          {/* No se pide para la pre-entrega */}
          <Route
            path="/admin"
            element={
              <RutaProtegida >
                <Admin />
              </RutaProtegida>
            }
          />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
