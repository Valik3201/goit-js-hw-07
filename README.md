# Event Delegation, Throttle/Debounce, and Lazy Loading

This repository explores various web development techniques, including event delegation, throttle and debounce functions, and lazy loading of images. The repository includes two main tasks:

## Task 1 - Image Gallery with basicLightbox

### What's Included

- **01-gallery.html**: This HTML file serves as the main page for the image gallery. It contains the necessary structure and placeholders for the gallery.

- **01-gallery.js**: This JavaScript file contains the code for creating and rendering the image gallery, implementing event delegation, and integrating the basicLightbox library. It also handles opening the modal window and replacing the image source. Additionally, it prevents the default link behavior that would redirect users to another page when clicking on gallery items.

- **basicLightbox CDN**: The repository links to the basicLightbox library via the jsdelivr CDN service. This allows you to access the library's minified (.min) JavaScript and CSS files.

- **Demo Video**: A demo video of the gallery in action is available for reference.

### Optional Feature

- **Modal Window Closing with Escape Key**: There's an optional feature to close the modal window by pressing the Escape key. This feature enhances the user experience when interacting with the gallery.

## Task 2 - Image Gallery with SimpleLightbox

### What's Included

- **02-lightbox.html**: This HTML file serves as the main page for the image gallery using the SimpleLightbox library. It contains the structure and placeholders for the gallery.

- **02-lightbox.js**: This JavaScript file contains the code for creating and rendering the image gallery, integrating the SimpleLightbox library, and displaying image captions. It reuses the gallery markup from Task 1 and enhances it with the library's features.

- **SimpleLightbox CDN**: The repository links to the SimpleLightbox library via the cdnjs CDN service. It includes the minified JavaScript and CSS files for the library.

### Optional Feature

- **Image Caption Display**: An optional feature is implemented to display image captions. The captions are sourced from the `alt` attribute and appear at the bottom of the image. They are delayed by 250 milliseconds after opening an image for a smoother user experience.
