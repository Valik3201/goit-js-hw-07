import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Create Gallery
const galleryContainer = document.querySelector(".gallery");

const galleryImage = galleryItems.map((element) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("galery__link");
  galleryLink.href = element.oryginal;

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

galleryContainer.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Modal Window
});
