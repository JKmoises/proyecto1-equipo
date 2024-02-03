export function HeroImage(){
  const $heroImage = document.createElement("section");
  $heroImage.classList.add("hero");
  $heroImage.innerHTML = /*html*/`
    <section class="hero">
      <ul class="hero__sliders">
        <li class="hero__slider">
          <img class="hero__image" src="./assets/hero-image.webp" alt="hero-image">
        </li>

        <li class="hero__slider">
          <img class="hero__image" src="./assets/hero-image2.webp" alt="hero-image2">
        </li>

        <li class="hero__slider">
          <img class="hero__image" src="./assets/hero-image3.webp" alt="hero-image3">
        </li>
      </ul>
      <article class="hero__content">
        <h1 class="hero__title text-uppercase">100% naturales</h1>
        <p class="hero__description flex-col text-uppercase">
          <span class="hero__description--first-line">
            Galletas caseras
          </span>
          <span class="hero__description--second-line">
            y recién hechas
          </span>
        </p>
        <a class="hero__button text-uppercase" href="#">
          comprar online
        </a>
      </article>
    </section>
  `;

  return $heroImage;
}