import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const DetalleProducto = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            setProducto(datos);
            setCargando(false);
        })
        .catch(error => {
            setError('Ha Ocurrido un error...');
            setCargando(false);
        })
    },[id]);

    if(cargando)
        return <p>Estan cargando los productos...</p>
    
    if(error)
        return <p>{error}</p>

    return(
        <>
        <ul>
            <li>
                <h3>Producto Numero: {id}</h3>
                <h3>| {producto.title}</h3>
                <img src={producto.image}/>
                <h2>$ {producto.price}</h2>
            </li>
        </ul>
        </>
    );
}

export default DetalleProducto;