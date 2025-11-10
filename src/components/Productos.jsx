
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

import styles from './Productos.module.css'; 
import AddToCart from '../assets/AddToCart';

import Loading from "../assets/Loading"


const Productos = () => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Usar el contexto 
  const { agregarAlCarrito } = useContext(CarritoContext);

  const URL = 'https://690d56a0a6d92d83e8512618.mockapi.io/Productos';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      .catch((error) => setError('Error al cargar productos'))
      .finally(() => setCargando(false))
  },[]);

  if (cargando) return <div className={styles.ripleDiv}><Loading/></div>;
  if (error) return error;

  return(
    <div className={styles.container}>
        <h3>Temporada 2025</h3>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id} className={styles.productoItem}>
            <div className={styles.imgcontainer}>
              <Link to={`/productos/${producto.id}`} >
                <img className={styles.imagen} src={producto.imagen}/>
              </Link>
              <button className={styles.botonAgregarProducto}  onClick={() => agregarAlCarrito(producto)}><AddToCart/></button>
            </div>
            <h2>{producto.nombre}</h2>
            <h3>$ {producto.precio} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;