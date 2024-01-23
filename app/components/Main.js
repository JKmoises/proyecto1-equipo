export function Main(){
  const $main = document.createElement("main"); // <main>
  $main.id = "main"; // <main id="main">
  $main.classList.add("container"); // <main id="main" class="container">

  return $main;
}