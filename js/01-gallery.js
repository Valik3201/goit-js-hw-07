import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryImage = galleryItems.map((element) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = element.preview;
  image.alt = element.description;

  galleryItem.appendChild(image);

  return galleryItem;
});

galleryContainer.append(...galleryImage);
