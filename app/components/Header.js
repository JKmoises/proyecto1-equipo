import { NavBar } from "./NavBar.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header", "container");

  const $headerMain = document.createElement("section");
  $headerMain.classList.add("header__main");
  $headerMain.innerHTML = /*html*/`
    <div class="header__cart-icon icon">
      <i class="bi bi-cart-fill"></i>
    </div>

    <a class="header__title" href="index.html">
      Delicias Dafna
    </a>

    <div class="header__hamgurger-icon icon" id="hamgurger-icon">
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
  `;

  $header.appendChild($headerMain);
  $header.appendChild(NavBar());

  return $header;
}