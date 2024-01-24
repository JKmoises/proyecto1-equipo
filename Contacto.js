

export const Contacto = () => {
    let $contacto = document.createElement("section")
    $contacto.classList.add("contacto", "container")
    $contacto.id = "contacto"
    $contacto.alt = "contacto"

$contacto.innerHTML = /*html*/
`   
<article>
      <article> 
        <h1 class="contacto__title">/ENVÍAME TUS PREGUNTAS</h1>
        <p class="contacto__text">
          Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil.
          Haz clic en "Editar Texto" o doble clic aquí para agregar tu
          contenido y cambiar la fuente. Puedes arrastrar y soltar este texto
          donde quieras en tu página.
        </p>
      </article>

      <article>
        <form action="#" class="form">
          <section class="form__section--div--grid">

            <div class="form__div--grid-order-nombre">
              <!-- <label for="Nombre">Nombre</label><br> -->
              <input class="form__input form__section--input--nombre" type="text" placeholder="Nombre">
            </div>

            <div class="form__div--grid-order-correo">
              <!-- <label for="Correo">Correo</label><br> -->
              <input class="form__input form__section--input--correo" type="email" placeholder="Correo" />
            </div>


            <div class="form__div--grid-order-mensaje">
              <!-- <label for="Mensaje">Mensaje</label><br> -->
              <textarea class="form__input form__section--input--mensaje" placeholder="Mensaje"></textarea>
            </div>

            <div class="form__div--grid-order-enviar">
              <button class="form__btn form__section--input--enviar">Enviar</button>
            </div>
          </section>
        </form>
      </article>
</article>





<article>
      <article class="info">
        <h2 class="info__title">CONTACTO</h2>
        <ul class="info__lista">
          <li>Tel: <a href="" target="_blank">914-123-456</a></li>
          <li>Email: <a href="">info@misitio.com</a></li>
        </ul>
      </article>

      <article>
        <h2 class="info__title">HORARIO</h2>
        <ul class="info__lista">
          <li>Lun - Vie: 7:00 - 22:00</li>
          <li>Sábado: 8:00 - 22:00</li>
          <li>Domingo: 7:00 - 35:00</li>
        </ul>
      </article>

    <article>
      <h2 class="info__title">DIRECCIÓN</h2>
      <ul class="info__lista info__lista--paddingbottom">
        <li>Av. Los Rosales 122</li>
        <li>28021, Madrid</li>
      </ul>
    </article>
</article>

<article class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6083.118135503093!2d-3.6614027!3d40.3299424!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1705167236222!5m2!1ses!2sar" width="0" height="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</article>


`
return $contacto
}
