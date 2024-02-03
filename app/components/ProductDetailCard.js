import { Accordion } from "./Accordion.js";


export function ProductDetailCard(product) {
  const { name, id, description, price, image } = product;

  const $productDetailCard = document.createElement("article");
  $productDetailCard.classList.add("product-details-card");

  $productDetailCard.innerHTML = /*html*/`
        <div class="contenedor-img">
            <img class="details-img" src="${image}">
            <figure class="contenedor-sec-img">
                <img class="details-img-secondary" src="./assets/mermelada-semillas-amapola.webp" alt="mermelada-semillas-amapola">
                <img class="details-img-secondary" src="./assets/mermelada-semillas-amapola.webp" alt="mermelada-semillas-amapola">
                <img class="details-img-secondary" src="./assets/mermelada-semillas-amapola.webp" alt="mermelada-semillas-amapola">
            </figure>
            <p>${description}</p>
        </div>

        <div class="card__info">
            <div class="buy-detail-container">
                <h2 class="product-card__title text-uppercase details-title-size">${name}</h2>
                <h3 class="sku text-uppercase">SKU: ${id}</h3>
                <p class="detail__price">$${price}</p>
                <b><p>Cantidad</p></b>
                <input type="number" value="1" min="1" max="30" class="details-cant">
                <button class="info__btn padding-detail__btn carrito-color-btn">Agregar al carrito</button>
                <button class="info__btn padding-detail__btn">Realizar compra</button>
            </div>
            <div class="accordion">
            </div>
        </div>
    `;
  const $accordionContainer = $productDetailCard.querySelector(".accordion");
  $accordionContainer.appendChild(Accordion());



  return $productDetailCard;
}