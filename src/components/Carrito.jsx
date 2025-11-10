import { useContext , useState} from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import styles from './Productos.module.css'; 


const Carrito = () => {

  const [producto, setProducto] = useState(null);
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);
  
  return (
    <div>
      <h2>Carrito</h2>
      {carrito.map((producto, indice) => (
        <li key={indice} className={styles.productoItem}>
          <div className={styles.imgcontainer}>
            <Link to={`/productos/${producto.id}`} >
            <img className={styles.imagen} src={producto.imagen} alt={producto.title} height={80} width={80}/>
            </Link>
          </div>
          <h2>{producto.nombre}</h2>
          <h3>$ {producto.precio} </h3>
          <button onClick={() => eliminarDelCarrito(indice)}>Eliminar</button>
        </li>
      ))
      };
    </div>
  );
};

export default Carrito;
