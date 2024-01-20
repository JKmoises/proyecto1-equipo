import { NavBar } from "./NavBar.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header", "container");

  const $headerMain = document.createElement("section");
  $headerMain.classList.add("header__main");
  $headerMain.innerHTML = /*html*/`
    <section class="header__main">
      <div class="header__cart-icon icon">
        <i class="bi bi-cart-fill"></i>
      </div>

      <a class="header__title" href="index.html">
        Delicias Dafna
      </a>

      <div class="header__hamgurger-icon icon">
        <i class="bi bi-list"></i>
      </div>

      <div class="header__search">
        <input type="text" placeholder="Buscar...">

        <div class="header__search-icon icon">
          <i class="bi bi-search"></i>
        </div>
      </div>

      <div class="header__login none">
        <div class="header__login-icon icon">
          <i class="bi bi-person-circle"></i>
        </div>

        <p>Login</p>
      <div>
    </section>
  `;

  $header.appendChild($headerMain);
  $header.appendChild(NavBar());


  const openNav = $header.getElementsByClassName('header__hamgurger-icon')[0];
  const closeNav = $header.getElementsByClassName('header__close-icon')[0];
  const headerNav = $header.getElementsByClassName('header__nav')[0];


  openNav.addEventListener("click", function () {
    headerNav.classList.remove("fadeOut")
    headerNav.classList.add("fadeIn")
  })

  closeNav.addEventListener("click", function () {
    headerNav.classList.remove("fadeIn")
    headerNav.classList.add("fadeOut")
  })


  return $header;
}