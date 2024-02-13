import { ModalSlider } from "../../components/ModalSlider.js";
import getData from "../../helpers/getData.js";
import dragAndDropFlavors from "./dragAndDropFlavors.js";

export const showModalFlavors = async () => {  
  const $modalSlider = document.querySelector("#modal-slider");
  const $modalCard = document.querySelectorAll(".modal-card");
  const dataFlavors = await getData("/app/data/dataFlavors.json");

  $modalCard.forEach(card => {
    card.addEventListener("click", ({target}) => {
      const $parentImg = target.parentElement.children[1].src;
      $modalCard.forEach(card => card.className = "none");

      const $slider = document.createElement("div");
      $slider.classList.add("slider")
      $modalSlider.appendChild($slider);

      const $arrowLeft = document.createElement('div');
      $arrowLeft.classList.add('arrow');
      $arrowLeft.id = "arrow";
      $arrowLeft.innerHTML = '<img class="arrow__left" src="./app/assets/flecha-izquierda.svg" alt="flecha izquierda" id="arrow__left">';

      const $arrowRight = document.createElement('div');
      $arrowRight.classList.add('arrow');
      $arrowRight.id = "arrow";
      $arrowRight.innerHTML = '<img class="arrow__right" src="./app/assets/flecha-derecha.svg" alt="flecha derecha" id="arrow__right">';
      
      $slider.insertAdjacentElement("beforebegin", $arrowLeft);
      
      dataFlavors.forEach(card => $slider.appendChild(ModalSlider(card.flavorUrl)));
 
      $modalSlider.appendChild($arrowRight);
      $modalSlider.style.display = "flex";

      let posFlavorImg = dataFlavors.findIndex(pos => $parentImg.includes(pos.flavorUrl));

      let firstCardWidth = $slider.querySelector(".card-flavor").offsetWidth;
      $slider.scrollLeft = firstCardWidth * posFlavorImg;

      const $arrowLeftCreated = document.querySelector(".arrow__left");

      (posFlavorImg == 0) && ($arrowLeftCreated.style.display = "none"); 

      setTimeout(() => {        
        dragAndDropFlavors(dataFlavors.length, firstCardWidth, posFlavorImg);
        $slider.style = "scroll-behavior: smooth";
      }, 1000)
    })

  })
  
  $modalSlider.addEventListener("click", ({target}) => {
    if (target.className.match(/modal-closed/)) {
      const $arrow = document.querySelectorAll(".arrow");
      const $slider = document.querySelector(".slider");

      $modalCard.forEach(card => card.className = "modal-card flex-center");
      $arrow.forEach(arrow => arrow.remove());
      $slider.remove();

      $modalSlider.style = "display: none";
    }
  })
  
}

export default showModalFlavors;


