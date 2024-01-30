import { Home } from "./pages/Home.js";
import { ProductDetail } from "./pages/ProductDetail.js";

export async function Router() {
	const { hash } = location;

	const $main = document.querySelector('#main');
	$main.classList.remove('main');

  if (!hash || hash === "#/") {
    console.log("Inicio");

    $main.appendChild(Home())
  }else if (hash === "#/tienda") {
    console.log("Tienda");

    $main.appendChild(Store());
  }else if (hash === "#/sobre-mi") {
    console.log("Sobre mi");
    
    $main.appendChild(AboutMe());
  }else if (hash === "#/contacto") {
    console.log("Contacto");
    $main.appendChild(Contact());
  }else if (hash === "#/detalle-producto") {
    console.log("Detalle Producto");
    $main.appendChild(ProductDetail());
  } else {
    console.log("Error 404");
  }
}
