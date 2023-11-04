import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Create Gallery
const galleryContainer = document.querySelector(".gallery");

const galleryImage = galleryItems.map((element) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("galery__link");
  galleryLink.href = element.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = element.preview;
  image.alt = element.description;
  image.dataset.source = element.original;

  galleryLink.appendChild(image);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
});

galleryContainer.append(...galleryImage);

// Event Delegation
let activeModal = null;

galleryContainer.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    event.target.nodeName === "IMG" &&
    event.target.classList.contains("gallery__image")
  ) {
    const largeImageUrl = event.target.dataset.source;

    // Modal Window BasicLightBox
    const instance = basicLightbox.create(
      `
    <img src="${largeImageUrl}" width="800" height="600">`,
      {
        onShow: (instance) => {
          console.log("Modal is about to show");
        },
        onClose: (instance) => {
          console.log("Modal is about to close");
        },
      }
    );
    instance.show();
    activeModal = instance;
  } else {
    return;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && activeModal) {
    activeModal.close();
  }
});
