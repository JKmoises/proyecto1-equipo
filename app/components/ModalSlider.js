export function ModalSlider(image) {
  const $cardFlavor = document.createElement("div");
  $cardFlavor.classList.add("card-flavor")

  $cardFlavor.innerHTML = /*html*/`
  
    <div class="flavor-img">
      <img class="flavor-img__image" src="${image}" alt="image mis sabores" draggable="false">
    </div>

    <div class="info-card">
      <div class="icon-info">
        <p class="icon-info__profile flex-center">N</p>
        <div class="date-info">
          <h3 class="date-info__title">cookies2522</h3>
          <p class="date-info__day">enero 10, 2024</p>
        </div>
      </div>
      <img class="info-card__inst" src="./app/assets/icon-inst.svg" alt="icon istagram">
      <img class="modal-closed" id="modal-closed" src="app/assets/modal-closed.svg" alt="image modal closed">
    </div>

    <div class="info-text">
      <p class="info-text__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vitae consequuntur harum est ad cum, beatae eaque molestias labore perferendis delectus
      </p>
    </div>
    
    <div class="slider-info__last"></div>
  ` 

  return $cardFlavor;
}