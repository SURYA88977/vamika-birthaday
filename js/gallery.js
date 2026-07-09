import { celebrateSoftly } from "./confetti.js";

export const initGallery = () => {
  const gallery = document.querySelector("#lightgallery");

  if (gallery && window.lightGallery) {
    window.lightGallery(gallery, {
      selector: ".gallery__item",
      plugins: [window.lgZoom].filter(Boolean),
      speed: 520,
      download: false,
      counter: false,
      mobileSettings: {
        controls: true,
        showCloseIcon: true,
      },
    });
  }

  document.querySelectorAll(".gallery__item").forEach((item) => {
    item.addEventListener("click", () => celebrateSoftly());
  });
};
