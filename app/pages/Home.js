import { FlavorImage } from "../components/FlavorImage.js";
import { HeroImage } from "../components/HeroImage.js";
import { SoldProductCard } from "../components/SoldProductCard.js";
import { SoldSubmitGift } from "../components/SoldSubmitGift.js";
import { ajax } from "../helpers/ajaxHelper.js";

export function Home() {
  const $homeContainer = document.createElement("section");

  /** ****************************** MÉTODO ALTERNATIVO ***************************** */
  // const getProducts = () => {
  //   return ajax2({
  //     url: 'http://localhost:3000/products',
  //     cbSuccess: (data) => {
  //       return data
  //         .filter(product => product.category === 'best sellers')
  //         .slice(0, 3);
  //     }
  //   });
  // }
  /** ******************************************************************************* */

  //* Seccion de productos mas vendidos 
  const $productSection = document.createElement("section");
  $productSection.classList.add("product-section", "flex-col-center");

  const $productSectionTitle = document.createElement("h2");
  $productSectionTitle.classList.add("product-section__title", "text-uppercase");
  $productSectionTitle.textContent = "/ más vendidas";

  const $productSectionContent = document.createElement("div");
  $productSectionContent.classList.add("product-section__content");


  /** ******************************* MÉTODO ORIGINAL ******************************* */
  ajax({
    url: 'http://localhost:3000/products',
    cbSuccess: (data) => {
      const products = data
        .filter(product => product.category === 'best sellers')
        .slice(0, 3);

      products.map(product => {

        $productSectionContent.appendChild(SoldProductCard({
          name: product.name,
          price: `$${product.price}`,
          image: product.image[0]
        }));

      });

    }
  });
  /** ******************************************************************************* */

  /** ****************************** MÉTODO ALTERNATIVO ***************************** */
  // getProducts().then(products => {

  //   products.map(product => {

  //     $productSectionContent.appendChild(SoldProductCard({
  //       name: product.name,
  //       price: `$${product.price}`,
  //       image: product.image[0],
  //       url: "#/detalle-producto"
  //     }));

  //   });

  // }).catch(error => {

  //   console.error(error);

  //   const $errorSection = document.createElement("div");

  //   $errorSection.innerHTML = /*html*/ ` 
  //   <div class="error text-white text-xl">
  //   <p>Error ${error.status}: ${error.message}</p>
  //   </div>
  //   `;

  //   $productSectionContent.appendChild($errorSection);

  // });
  /** ******************************************************************************* */


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

  const $modal = document.createElement("div");
  $modal.classList.add("modal-slider");
  $modal.id = "modal-slider";

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
  $homeContainer.appendChild($modal);

  return $homeContainer;

}