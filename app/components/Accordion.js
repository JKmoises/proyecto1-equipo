export function Accordion() {
// Crear el contenedor del acordeón
const $accordion = document.createElement('div');
$accordion.className = 'accordionContainer';

// Crear los elementos del acordeón
const sections = ['Información del producto', 'Política de reembolso', 'Política de envíos'];
sections.forEach(section => {
  const $accordionTitle = document.createElement('h5');
  $accordionTitle.className = 'detail-info__subtitle';
  $accordionTitle.innerText = section;

  const content = document.createElement('div');
  content.className = 'accordion-content';
  content.innerHTML = '<p>Contenido de ' + section + '</p>';
  const $AccordionHr = document.createElement('hr');

      // Ocultar el contenido inicialmente
      content.style.display = 'none';

      // Agregar un evento de clic al título para mostrar/ocultar el contenido
      $accordionTitle.addEventListener('click', () => {
        const isContentVisible = content.style.display === 'block';
        content.style.display = isContentVisible ? 'none' : 'block';
      });

  $accordion.appendChild($accordionTitle);
  $accordion.appendChild(content);
  $accordion.appendChild($AccordionHr);
});

// Agregar el acordeón al DOM


return $accordion;


}