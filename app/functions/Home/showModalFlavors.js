import { ModalSlider } from "../../components/ModalSlider.js";

const showModalFlavors = () => {
  
  const $modal = document.querySelector("#modal-slider");

  document.addEventListener("click", ({target}) => {
    
    if (target.matches(".modal-card") || target.matches(".modal-card__paragraph")) {
      let image;
      if (target.matches(".modal-card")) image = target.nextElementSibling.src;
      if (target.matches(".modal-card__paragraph")) image = target.parentElement.nextElementSibling.src;
      

      $modal.appendChild(ModalSlider(image));

      setTimeout(() => {
        $modal.style.display = "flex";
      }, 1000)
    }
    
    if (target.className.includes("modal-close")) {
      const $slider = $modal.lastElementChild;
      console.log($slider);

      $modal.removeChild($slider);
      $modal.style.display = "none";
    }
  })
}

const $arrowLeft = document.querySelector("arrow__left");

$arrowLeft?.addEventListener("click", () => {
  console.log("here");
})

export default showModalFlavors;


