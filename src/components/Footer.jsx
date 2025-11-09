import styles from './Footer.module.css';


const Footer = () => {
    const actualYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
        {/* Seccion de enlaces */}
        <ul className={styles.footerNav}>
            <li>
                <a href="/contacto" className={styles.footerLink}>Acerca de Nosotros</a>
            </li>
            <li>
            <a href="/" className={styles.footerLink}>Política de Privacidad</a>
            </li>
        </ul>
        {/* Seccion de Copyright */}
      <p className={styles.copyright}>
        © {actualYear}. SILICON Store Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;  