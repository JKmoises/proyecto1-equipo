export function Store(products = []) {
	const $products = products
		.map((product) => {
			return /*html*/`
			<article class='products__card flex-col-center' data-id=${product.id}>
				<div class="contenedor-img">
					<p class="card__category">${product.category}</p>
					<img 
						class="card__img" 
						src="${product.image[0]}" 
						alt="${product.name}">
					<img 
						class="card-img-hover" 
						src="${product.image[1]}" 
						alt="${product.name}">

					<div class="card__modal">
						<span>Vista rápida</span>
					</div>
				</div>
				<footer class="card__info flex-col-center">
					<h3 class="info__name text-uppercase">${product.name}</h3>
					<p class="info__price">$${product.price}</p>
					<button class="info__btn">Agregar al carrito</button>
				</footer>
			</article>
		`;
		})
		.join('');

	const $section = document.createElement('section');
	$section.classList.add('products');
	$section.innerHTML = $products;

	return $section;
}
