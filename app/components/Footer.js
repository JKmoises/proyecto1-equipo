export function Footer(){
  const $footer = document.createElement("footer");
  $footer.classList.add("footer");
  $footer.innerHTML = /*html*/`
  <div class="footer__section-container">
    <section class="footer__section">
      <h4>Tienda:</h4>

      <div class="footer__section-info">
        <a href="sobre-mi.html">Sobre mí</a>
        <a href="">Preguntas Frecuentes</a>
        <a href="">Envíos / Recogidas</a>
        <a href="">Políticas de la tienda</a>
        <a href="contacto.html">Contacto</a>
      </div>
    </section>

    <section class="footer__section">
      <h4>Horario:</h4>

      <div class="footer__section-info">
        <p>Lun -Vie: 7:00 - 22:00​​</p>
        <p>Sábado: 8:00 - 22:00</p>
        <p>Domingo: 8:00 - 35:00</p>
      </div>
    </section>

    <section class="footer__newsletter">
      <h4>suscríbete a mi newsletter</h4>

      <form class="footer__form">
        <input type="email" placeholder="Ingresa tu email aquí" />
        <button type="submit">Unirse</button>
      </form>
    </section>

    <section class="footer__section">
      <h4>Dirección:</h4>

      <div class="footer__section-info">
        <p>Av. Los Rosales 122</p>
        <p>28021, Madrid</p>
        <p>Tel: 914-123-456</p>
      </div>
    </section>
  </div>

  <div class="footer__info-container">
    <section class="footer__social-media">
      <a class="social-media__icon">
        <i class="bi bi-facebook"></i>
      </a>
      <a class="social-media__icon">
        <i class="bi bi-instagram"></i>
      </a>
      <a class="social-media__icon">
        <i class="bi bi-youtube"></i>
      </a>
    </section>

    <section class="footer__info">
      <p>
        &copy; 2035 Creado por Delicias Dafna con
        <a href="https://es.wix.com/?utm_campaign=vir_created_with"
          >Wix.com</a
        >
      </p>
    </section>
  </div>
  `;

  return $footer;
}