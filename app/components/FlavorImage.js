export function FlavorImage(props) {
  const { pathImage="", altImage="" } = props;

  const $flavor = document.createElement("li");
  $flavor.classList.add("flavors-section__item");
  $flavor.innerHTML = /*html*/`
    <img src="${pathImage}" alt="${altImage}">
  `;

  return $flavor;
}