import { HeroImage } from "../components/HeroImage.js";
import { SoldProductCard } from "../components/SoldProductCard.js";

export function Home() {
  const $homeContainer = document.createElement("section");

  
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
  

  
  //* Renderiza el <h2> 
  $productSection.appendChild($productSectionTitle);
  //* Renderiza el <div> 
  $productSection.appendChild($productSectionContent);


  $homeContainer.appendChild(HeroImage());
  $homeContainer.appendChild($productSection);

  return $homeContainer;

}