
export function ContactForm() {
  const $formContainer = document.createElement("article");

  $formContainer.innerHTML = /*html*/`
    <article>
      <article class="article__contacto--texto">
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
  `;

  return $formContainer;
}
