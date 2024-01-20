import { ajax } from "./helpers/ajaxHelper.js";
import { Store } from "./pages/Store.js";
import { AboutMe } from "./pages/AboutMe.js";

export async function Router() {
  const { hash } = location;

  const $main = document.querySelector("#main");

  if (!hash || hash === "#/") {
    console.log("Inicio");
  }else if (hash === "#/tienda") {
    console.log("Tienda");

  }else if (hash === "#/sobre-mi") {
    $main.appendChild(AboutMe());
  }else if (hash === "#/contacto") {
    console.log("Contacto");
  }else if (hash === "#/detalle-producto") {
    console.log("Detalle Producto");
  } else {
    console.log("Error 404");
  }
}