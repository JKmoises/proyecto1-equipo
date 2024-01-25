export const SoldSubmitGift = () => {
let $ServicesElement = document.createElement("section")
  $ServicesElement.classList.add("shopping-section")
  $ServicesElement.alt = "Services"

  $ServicesElement.innerHTML = /*html*/
  `
  <article class="shopping-section__item flex-col-center">
    <img src="./assets/icono-compras.svg" alt="icono-compras" class="shopping-section__icon">
    <h3 class="shopping-section__title text-uppercase">
      comprar y recoger
    </h3>
    <p class="shopping-section__description">
      Llévatelas recién hechas
    </p>
  </article>
  
  <article class="shopping-section__item flex-col-center">
    <img src="./assets/icono-envio.svg" alt="icono-envio" class="shopping-section__icon">
    <h3 class="shopping-section__title text-uppercase">
      envio gratis
    </h3>
    <p class="shopping-section__description">
      Entrega a domicilio
    </p>
  </article>
  
  <article class="shopping-section__item flex-col-center">
    <img src="./assets/icono-envolturas.svg" alt="icono-envolturas" class="shopping-section__icon">
    <h3 class="shopping-section__title text-uppercase">
      envolturas para regalo
    </h3>
    <p class="shopping-section__description">
      Envía una dulce sorpresa
    </p>
  </article>
  `
  


return $ServicesElement

}




