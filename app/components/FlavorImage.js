export function FlavorImage(props) {
  const { pathImage="", altImage="" } = props;

  const $flavor = document.createElement("li");
  $flavor.classList.add("flavors-section__item");
  $flavor.innerHTML = /*html*/`
  <!-- modal-card xavier--> 
    <div class="modal-card flex-center">
      <p class="modal-card__paragraph">Lorem ipsum dolor sit amet consectetur</p>
    </div>
  <!-- modal-card xavier -->


    <img src="${pathImage}" alt="${altImage}">
  `;

  return $flavor;
}