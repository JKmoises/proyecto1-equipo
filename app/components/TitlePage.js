export function TitlePage(title) {
	const $h1 = document.createElement('h1');
	$h1.classList.add('title', 'text-uppercase');
	$h1.textContent = title;

	return $h1;
}
