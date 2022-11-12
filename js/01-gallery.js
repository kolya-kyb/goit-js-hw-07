import { galleryItems } from "./gallery-items.js";
// Change code below this line
const instance = basicLightbox.create(`
    <img src="">
`);

const getElementGallery = ({ preview, original, description }) =>
  `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
const refs = {
  gallery: document.querySelector(".gallery"),
  modalImg: instance.element().querySelector("img"),
};
const render = () => {
  const list = galleryItems.map(getElementGallery);
  refs.gallery.innerHTML = "";
  refs.gallery.insertAdjacentHTML("beforeend", list.join(""));
};
render();

const openModal = (e) => {
  refs.modalImg.src = e.target.dataset.source;
  instance.show();
};

const closeModal = (e) => {
  if (e.code !== "Escape") {
    return;
  }
  instance.close();
  document.removeEventListener("keydown", closeModal);
};
refs.gallery.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return;
  }
  e.preventDefault();
  openModal(e);
  document.addEventListener("keydown", closeModal);
});
