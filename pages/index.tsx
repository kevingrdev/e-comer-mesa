import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />
      <section className="featured">
        <div className="container">
          <article
            style={{
              backgroundImage:
                "url(https://solucionestorrecilla.com/port-2.jfif)",
            }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>¿Necesitas servicios eléctricos profesionales?</h3>
              <a href="#" className="btn btn--rounded">
                Ver servicios
              </a>
            </div>
          </article>

          <article
            style={{
              backgroundImage:
                "url(https://solucionestorrecilla.com/port-4.jfif)",
            }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Instalaciones eléctricas para hogares y negocios</h3>
            </div>
          </article>

          <article
            style={{
              backgroundImage:
                "url(https://solucionestorrecilla.com/port-3.jfif)",
            }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>
                Mantenimiento preventivo y reparación de fallas eléctricas
              </h3>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>¿Por qué elegirnos?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envío gratuito</h4>
                <p>
                  Todos los pedidos superiores a $199 son elegibles para envío
                  gratuito a través de USPS First Class Mail.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pagos sencillos</h4>
                <p>
                  Todos los pagos se procesan instantáneamente a través de un
                  protocolo de pago seguro.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantía de devolución de dinero</h4>
                <p>
                  Si un artículo llegó dañado o has cambiado de opinión, puedes
                  devolverlo para obtener un reembolso completo.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Calidad excepcional</h4>
                <p>
                  Diseñados para durar, cada uno de nuestros productos ha sido
                  fabricado con los mejores materiales.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
