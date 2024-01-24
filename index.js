import { App } from "./App.js";

//* Este evento se ejecuta cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga. 
document.addEventListener('DOMContentLoaded', App);

//* Este evento se ejecuta cuando se ha detectado un cambio en el ancla o hash de la URL. 
window.addEventListener('hashchange', App);
