export function AboutMe() {
  //

  const $about = document.createElement("main")
  $about.classList.add("container", "about")

  $about.innerHTML = /*html*/ `  
  <img src="./assets/sobre-mi.webp" alt="imagen sombre mi" />

  <h1 class="title text-uppercase">/ sobre mi</h1>
  <div class="container__about__text">
    <p>
      Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz
      clic en "Editar Texto" o doble clic aquí para agregar tu contenido y
      cambiar la fuente. Puedes arrastrar y soltar este texto donde quieras
      en tu página. En este espacio puedes contar tu historia y permitir a
      tus usuarios saber más sobre ti.
    </p>
    <br />
    <p>
      Este es un buen espacio para extenderte sobre tu empresa y servicios.
      Puedes usar este espacio para incorporar más detalles sobre tu
      empresa. Escribe sobre tu personal y los servicios que ofreces.
      Cuéntales a los visitantes cómo se te ocurrió la idea de tu negocio y
      lo que te diferencia de tus competidores. Haz que tu empresa se
      destaque y muestra a tus visitantes quién eres.
    </p>
  </div>
  `

  return $about
}
