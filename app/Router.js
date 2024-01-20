import { TitlePage } from './components/TitlePage.js';
import { ajax } from './helpers/ajaxHelper.js';
import { Store } from './pages/Store.js';

export async function Router() {
	const { hash } = location;

	const $main = document.querySelector('#main');
	$main.classList.remove('main');

	if (!hash || hash === '#/') {
		console.log('Inicio');
	} else if (hash === '#/tienda') {
		$main.classList.add('main');

		$main.append(TitlePage('/ elige tus galletas'));

		//Obtener Datos del JSON
		await ajax({
			url: 'http://localhost:3000/products',
			cbSuccess: (products) => {
				$main.append(Store(products));
			},
		});
	} else if (hash === '#/sobre-mi') {
		console.log('Sobre mi');
	} else if (hash === '#/contacto') {
		console.log('Contacto');
	} else if (hash === '#/detalle-producto') {
		console.log('Detalle Producto');
	} else {
		console.log('Error 404');
	}
}
