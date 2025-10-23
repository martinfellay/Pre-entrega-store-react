import React, { createContext, useState } from "react";
// Crear el contexto
export const CarritoContext = createContext();

// Proveedor del contexto
export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
