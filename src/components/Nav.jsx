import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'; 
import { useAuthContext } from '../context/AuthContext';

const Nav = () => {
    const { usuario } = useAuthContext();
    const esAdmin = usuario === 'admin';

    return(
        <nav>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link to="/" className={styles.link}>Inicio</Link>
                    <Link to="/contacto" className={styles.link}>Contacto</Link>
                    <Link to="/sale" className={styles.link}>SALE</Link>
                    {esAdmin && 
                        <Link to="/admin" className={styles.link}>Admin</Link>
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Nav; 


