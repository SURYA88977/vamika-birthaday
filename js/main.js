import { initAnimations, initDecor } from "./animations.js";
import { initCountdown } from "./countdown.js";
import { initGallery } from "./gallery.js";
import { initMusic } from "./music.js";
import { celebrate } from "./confetti.js";

const boot = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initMusic();
  initCountdown("2026-07-21T10:00:00+05:30");
  initGallery();
  initAnimations();
  initDecor();
  initHeroReveal();
  initRipples();
};

// Previously this reveal animation only ran after the user tapped
// "Open Invitation" on the splash screen. Now that the splash is
// gone, it plays automatically as soon as the page loads.
const initHeroReveal = () => {
  const timeline = window.gsap?.timeline({
    defaults: { ease: "power3.inOut" },
    onComplete: () => celebrate(),
  });

  if (!timeline) return;

  timeline.fromTo(
    ".hero .reveal",
    { y: 36, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.13 }
  );
};

const initRipples = () => {
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.remove("is-rippling");
      void button.offsetWidth;
      button.classList.add("is-rippling");
    });
  });
};

window.addEventListener("DOMContentLoaded", boot);
