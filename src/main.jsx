import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CarritoProvider } from "./context/CarritoContext.jsx";
import { AuthProvider } from "./context/AuthContext"
import { ProductoProvider } from "./context/ProductoContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductoProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </ProductoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
