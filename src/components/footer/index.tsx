import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <div>
          <h3>Nombre de la Compañía</h3>
          <p>Dirección de la Compañía</p>
          <p>Teléfono de la Compañía</p>
        </div>
        <div>
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Redes Sociales</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
