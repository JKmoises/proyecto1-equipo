export function toggleMenuNavbar(header) {
  const openNav = header.getElementsByClassName("header__hamgurger-icon")[0]
  const closeNav = header.getElementsByClassName("header__close-icon")[0]
  const headerNav = header.getElementsByClassName("header__nav")[0]

  openNav.addEventListener("click", function () {
    headerNav.classList.remove("fadeOut")
    headerNav.classList.add("fadeIn")
  })

  closeNav.addEventListener("click", function () {
    headerNav.classList.remove("fadeIn")
    headerNav.classList.add("fadeOut")
  })
}
