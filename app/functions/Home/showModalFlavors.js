import { ModalSlider } from "../../components/ModalSlider.js";

const showModalFlavors = () => {
  
  const $modal = document.querySelector("#modal-slider");

  document.addEventListener("click", ({target}) => {
    const $parent = target.parentNode;
    const $grandParent = target.parentNode.parentNode;
    if (target.className == "modal-card__paragraph") {
      const $image = $grandParent.children[1].src;
      $modal.appendChild(ModalSlider($image));
      setTimeout(() => {
        $modal.style = "display: flex";
      }, 1000)
    }
    else if (target.className.includes("modal-card")) {
      const $image = $parent.children[1].src;
      $modal.appendChild(ModalSlider($image));
      setTimeout(() => {
        $modal.style = "display: flex";
      }, 1000)
    }  
    else if (target.className.includes("arrow__left")) {
      
    }
    else if (target.className.includes("modal-close")) {
      const $slider = $modal.lastChild;
      $modal.removeChild($slider);
      $modal.style = "display: none";
    }
  })
}

const $arrowLeft = document.querySelector("arrow__left");

$arrowLeft?.addEventListener("click", () => {
  console.log("here");
  })

export default showModalFlavors;


