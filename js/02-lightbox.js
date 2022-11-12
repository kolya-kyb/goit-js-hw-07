import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};
const getElementGallery = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const render = () => {
  const list = galleryItems.map(getElementGallery);
  refs.gallery.innerHTML = "";
  refs.gallery.insertAdjacentHTML("beforeend", list.join(""));
};
render();

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
