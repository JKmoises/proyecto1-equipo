import { Router } from "./app/Router.js";
import { Footer } from "./app/components/Footer.js";
import { Header } from "./app/components/Header.js";
import { Main } from "./app/components/Main.js";
import showModalFlavors from "./app/functions/Home/showModalFlavors.js";
import { toggleMenuNavbar } from "./app/functions/components/toggleMenuNavbar.js";

export function App() {
  const $root = document.getElementById("root"); // <div>

  $root.innerHTML = "";

  //* Components
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Footer());

  //* Router 
  Router();


  //* Funciones de pagina 
  toggleMenuNavbar();
  showModalFlavors();
}