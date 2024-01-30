import { ProductDetailCard } from "../components/ProductDetailCard.js";

export function ProductDetail( ) {
    // obj extraer del backend en un futuro?
    
    const $productDetailSection = document.createElement("section");
    $productDetailSection.classList.add("container", "main");

    
    const $productDetailSectionTitle = document.createElement("div");
    $productDetailSectionTitle.classList.add("product-details-title");
    const $productDetailTitle = document.createElement("h5");
    $productDetailTitle.classList.add("product-details-title__h5");
    const $productDetailSectionTitleText1 = document.createTextNode("Inicio / ");
    const $productDetailSectionTitleSpan = document.createElement("span");
    $productDetailSectionTitleSpan.classList.add("product-details-title__span");
    $productDetailSectionTitleSpan.textContent ="Copos de avena";


    

    const $productDetailCard = document.createElement("div");
    $productDetailCard.appendChild(ProductDetailCard({
        name: "copos avena",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendiLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, perferendiss.",
        price: "2,00",
        id: "1",
        image: "./assets/copos-avena.webp"
    }));


    $productDetailSectionTitle.appendChild($productDetailTitle);
    $productDetailTitle.appendChild($productDetailSectionTitleText1);
    $productDetailTitle.appendChild($productDetailSectionTitleSpan);

    $productDetailSection.appendChild($productDetailSectionTitle);

    $productDetailSection.appendChild($productDetailCard);
  

  return $productDetailSection;
}