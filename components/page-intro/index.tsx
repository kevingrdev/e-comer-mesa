import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import Link from "next/link";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Todo lo que necesitas para tus proyectos</h2>
                <Link href="/products">
                  <a href="#" className="btn-shop">
                    <i className="icon-right"></i>Ver productos
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envío gratis</h4>
                <p>En compras superiores a $199</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Clientes satisfechos al 99%</h4>
                <p>Las opiniones de nuestros clientes hablan por sí mismas</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantía de originalidad</h4>
                <p>
                  Ofrecemos una garantía de 30 días para cada herramienta que
                  vendemos
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
