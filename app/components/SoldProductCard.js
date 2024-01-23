export function SoldProductCard(props){
  const { name = "", price = "", image = "" } = props;

  const $soldProductCard = document.createElement("article");
  $soldProductCard.classList.add("product-card", "flex-col-center");
  
  $soldProductCard.innerHTML = /*html*/`
    <img src="${image}" alt="${name}" class="product-card__image">
    <footer class="product-card__footer">
      <h3 class="product-card__title text-uppercase">${name}</h3>
      <p class="product-card__price">${price}</p>
      <a class="product-card__link" href="#">Ver detalles</a>
    </footer>
  `

  return $soldProductCard;
}