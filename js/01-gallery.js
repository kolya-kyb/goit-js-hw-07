import { galleryItems } from "./gallery-items.js";
// Change code below this line
const instance = basicLightbox.create(
  `
    <img src="">
`,
  {
    onShow: () => {
      document.addEventListener("keydown", closeModal);
    },

    onClose: () => {
      document.removeEventListener("keydown", closeModal);
    },
  }
);

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

function openModal(e) {
  refs.modalImg.src = e.target.dataset.source;
  instance.show();
}

function closeModal(e) {
  if (e.code !== "Escape") {
    return;
  }
  instance.close();
}
refs.gallery.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return;
  }
  e.preventDefault();
  openModal(e);
});
