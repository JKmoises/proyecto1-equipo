import { ContactForm } from "../components/ContactForm.js";
import { ContactInfo } from "../components/ContactInfo.js";
import { ContactMap } from "../components/ContactMap.js";

export function Contact() {
  const $sectionContainer = document.createElement("section");
  $sectionContainer.classList.add("contacto", "container");


  $sectionContainer.appendChild(ContactForm());
  $sectionContainer.appendChild(ContactInfo());
  $sectionContainer.appendChild(ContactMap());


  return $sectionContainer;
}