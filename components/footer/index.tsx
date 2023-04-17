import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo />{" "}
            </h6>
            <p>
              En Ferretería Mesa ofrecemos herramientas de calidad para todo
              tipo de proyectos eléctricos y construcción, con diseños
              innovadores y resistentes.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Compras en línea</li>
              <li>
                <a href="#">Estado del pedido</a>
              </li>
              <li>
                <a href="#">Envío y entrega</a>
              </li>
              <li>
                <a href="#">Devoluciones</a>
              </li>
              <li>
                <a href="#">Opciones de pago</a>
              </li>
              <li>
                <a href="#">Contáctanos</a>
              </li>
            </ul>
            <ul>
              <li>Información</li>
              <li>
                <a href="#">Tarjetas de regalo</a>
              </li>
              <li>
                <a href="#">Encuentra una tienda</a>
              </li>
              <li>
                <a href="#">Boletín informativo</a>
              </li>
              <li>
                <a href="#">Conviértete en miembro</a>
              </li>
              <li>
                <a href="#">Comentarios del sitio</a>
              </li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li>
                <a href="#">ventas@ferreteriamesa.com</a>
              </li>
              <li>
                <a href="#">Línea de atención: +1 131 138 138</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2023. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
