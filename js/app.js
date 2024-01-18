const openNav = document.getElementById("open-nav")
const headerNav = document.getElementById("header-nav")
const closeNav = document.getElementById("close-nav")

window.onload = function () {
  //
  openNav.addEventListener("click", function () {
    headerNav.classList.remove("fadeOut")
    headerNav.classList.add("fadeIn")
    headerNav.style.visibility = "visible"
  })

  closeNav.addEventListener("click", function () {
    /** NO FUNCIONA el fadeOut; visibility = hidden se ejecuta inmediatamente */
    headerNav.classList.remove("fadeIn")
    headerNav.classList.add("fadeOut")
    headerNav.style.visibility = "hidden"
  })
}
