import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => { 
    return (  
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><Link to="/" style={{textDecoration:"none", color:"white"}}> Inicio </Link></li>
                <li><Link to="contacto" style={{textDecoration:"none", color:"white"}}> Contacto </Link></li>
                <li><Link to="sale" style={{textDecoration:"none", color:"white"}}> SALE </Link></li>
            </ul>  
        </nav>  
    );  
}

export default Nav; 


