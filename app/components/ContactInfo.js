export function ContactInfo(){
  const $contactInfo = document.createElement("article");

  $contactInfo.innerHTML = /*html*/`
    <article>
      <article class="info">
        <h2 class="info__title">CONTACTO</h2>
        <ul class="info__lista">
          <li>Tel: <a href="" target="_blank">914-123-456</a></li>
          <li>Email: <a href="">info@misitio.com</a></li>
        </ul>
      </article>
      <article>
        <h2 class="info__title">HORARIO</h2>
        <ul class="info__lista">
          <li>Lun - Vie: 7:00 - 22:00</li>
          <li>Sábado: 8:00 - 22:00</li>
          <li>Domingo: 7:00 - 35:00</li>
        </ul>
      </article>
      <article>
        <h2 class="info__title">DIRECCIÓN</h2>
        <ul class="info__lista info__lista--paddingbottom">
          <li>Av. Los Rosales 122</li>
          <li>28021, Madrid</li>
        </ul>
      </article>
    </article>
  `;

  return $contactInfo;
}