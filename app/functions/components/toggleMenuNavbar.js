export function toggleMenuNavbar() {

  const $openNav = document.getElementById('hamgurger-icon');
  const $closeNav = document.getElementById("close-icon");
  const $headerNav = document.getElementById("header-nav");

  $openNav.addEventListener("click", function () {
    $headerNav.classList.remove("fadeOut")
    $headerNav.classList.add("fadeIn")
  });

  $closeNav.addEventListener("click", function () {
    $headerNav.classList.remove("fadeIn")
    $headerNav.classList.add("fadeOut")
  });
}
