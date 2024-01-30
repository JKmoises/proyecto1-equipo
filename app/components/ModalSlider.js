export function ModalSlider(image) {
  const $modalSlider = document.createElement("div");
  $modalSlider.classList.add("slider")

  $modalSlider.innerHTML = /*html*/`
    <img class="modal-close" src="app/assets/modal-close.svg" alt="image modal close">
    <div class="arrow">
      <img class="arrow__left" src="./app/assets/flecha-izquierda.svg" alt="arrow letf">
    </div>

    <div class="card-flavor">
      <img class="card-flavor__image" src="${image}" alt="image mis sabores">

      <div class="slider-info">
        <div class="info-card flex-between">
          <div class="icon-info">
            <p class="icon-info_profile flex-center">N</p>
            <div class="date-info">
              <h3 class="date-info__title">cookies2522</h3>
              <p class="date-info__day">enero 10, 2024</p>
            </div>
          </div>
          <img class="info-card__inst" src="./app/assets/icon-inst.svg" alt="icon istagram">
        </div>

        <p class="slider-info__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vitae consequuntur harum est ad cum, beatae eaque molestias labore perferendis delectus
        </p>

        <div class="slider-info__last"></div>
      </div> 

    </div>

    <div class="arrow">
      <img class="arrow__right" src="./app/assets/flecha-izquierda.svg" alt="arrow right">
    </div>
  ` 

  return $modalSlider;
}