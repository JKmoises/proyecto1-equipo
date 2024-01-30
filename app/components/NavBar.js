export function NavBar(){
  const $navBar = document.createElement("section");
  $navBar.classList.add("header__nav");

  $navBar.innerHTML = /*html*/`
    <div class="header__login">
      <div class="header__login-icon icon">
        <i class="bi bi-person-circle"></i>
      </div>

      <p>Login</p>
    </div>

    <div class="header__close-icon icon">
      <i class="bi bi-x-lg"></i>
    </div>

    <nav class="header__nav-main">
      <a href="#/">Inicio</a>
      <a href="#/tienda">Tienda</a>
      <a href="#/sobre-mi">Sobre mí</a>
      <a href="#/contacto">Contacto</a>
    </nav>

    <nav class="header__nav-social-media none">
      <a href="">Instagram</a>
      <a href="">Facebook</a>
      <a href="">Youtube</a>
    </nav>
  `;

  return $navBar;
}