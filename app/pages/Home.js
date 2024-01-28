import { FlavorImage } from "../components/FlavorImage.js";
import { HeroImage } from "../components/HeroImage.js";
import { SoldProductCard } from "../components/SoldProductCard.js";
import {SoldSubmitGift} from "../components/StartOtherServices.js";
 
export function Home() {
  const $homeContainer = document.createElement("section");

  //* Seccion de productos mas vendidos 
  const $productSection = document.createElement("section");
  $productSection.classList.add("product-section", "flex-col-center");
  
  const $productSectionTitle = document.createElement("h2");
  $productSectionTitle.classList.add("product-section__title", "text-uppercase");
  $productSectionTitle.textContent = "/ más vendidas";

  const $productSectionContent = document.createElement("div");
  $productSectionContent.classList.add("product-section__content");
  
  $productSectionContent.appendChild(SoldProductCard({
    name: "chocolate blanco",
    price: "$1,00",
    image: "./assets/chocolate-blanco.webp"
  }));

  $productSectionContent.appendChild(SoldProductCard({
    name: "copos avena",
    price: "$2,00",
    image: "./assets/copos-avena.webp"
    
  }));
  $productSectionContent.appendChild(SoldProductCard({
    name: "mermelada semillas amapola",
    price: "$1,00",
    image: "./assets/mermelada-semillas-amapola.webp"
  }));

  const $productSectionLink = document.createElement("div");
  $productSectionLink.classList.add("product-section__link");
  $productSectionLink.innerHTML = /*html*/`
    <hr class="link__first-line">
    <a class="link__square text-uppercase" href="#">Ver todos</a>
    <hr class="link__second-line">
  `;

  $productSection.appendChild($productSectionTitle);
  $productSection.appendChild($productSectionContent);
  $productSection.appendChild($productSectionLink);




  //* Seccion de sigue mis sabores 
  const $flavorsSection = document.createElement("section");
  $flavorsSection.classList.add("flavors-section", "flex-col-center");


  const $flavorsSectionMask = document.createElement("div");
  $flavorsSectionMask.classList.add("flavors-section__mask");

  const $flavorsSectionTitle = document.createElement("h2");
  $flavorsSectionTitle.classList.add("flavors-section__title", "text-uppercase");
  $flavorsSectionTitle.textContent = "/ sigue mis sabores";

  const $flavorsSectionList = document.createElement("ul");
  $flavorsSectionList.classList.add("flavors-section__list");
  $flavorsSectionList.appendChild(FlavorImage({
    pathImage: "./assets/sigue-mis-sabores1.jpg",
    altImage: "sigue-mis-sabores1",
  }));
  $flavorsSectionList.appendChild(FlavorImage({
    pathImage: "./assets/sigue-mis-sabores2.jpg",
    altImage: "sigue-mis-sabores2",
  }));
  $flavorsSectionList.appendChild(FlavorImage({
    pathImage: "./assets/sigue-mis-sabores3.jpg",
    altImage: "sigue-mis-sabores3",
  }));
  $flavorsSectionList.appendChild(FlavorImage({
    pathImage: "./assets/sigue-mis-sabores4.jpg",
    altImage: "sigue-mis-sabores4",
  }));
  $flavorsSectionList.appendChild(FlavorImage({
    pathImage: "./assets/sigue-mis-sabores5.jpg",
    altImage: "sigue-mis-sabores5",
  }));
  $flavorsSectionList.appendChild(FlavorImage({
    pathImage: "./assets/sigue-mis-sabores6.jpg",
    altImage: "sigue-mis-sabores6",
  }));

  const $loadMoreButton = document.createElement("a");
  $loadMoreButton.classList.add("flavors-section__load-more");
  $loadMoreButton.textContent = "Cargar más";

 
  
  
  
  $flavorsSection.appendChild($flavorsSectionMask);
  $flavorsSection.appendChild($flavorsSectionTitle);
  $flavorsSection.appendChild($flavorsSectionList);
  $flavorsSection.appendChild($loadMoreButton);
  
  
  
  $homeContainer.appendChild(HeroImage());
  $homeContainer.appendChild($productSection);
  $homeContainer.appendChild($flavorsSection);
  $homeContainer.appendChild(SoldSubmitGift())

  return $homeContainer;

}