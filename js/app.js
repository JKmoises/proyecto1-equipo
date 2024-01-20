const openNav = document.getElementById("open-nav")
const headerNav = document.getElementById("header-nav")
const closeNav = document.getElementById("close-nav")

window.onload = function () {
  //
  openNav.addEventListener("click", function () {
    headerNav.classList.remove("fadeOut")
    headerNav.classList.add("fadeIn")
  })

  closeNav.addEventListener("click", function () {
    headerNav.classList.remove("fadeIn")
    headerNav.classList.add("fadeOut")
  })
}
