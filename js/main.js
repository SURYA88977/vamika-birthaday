import { initAnimations, initDecor } from "./animations.js";
import { initCountdown } from "./countdown.js";
import { initGallery } from "./gallery.js";
import { initMusic } from "./music.js";
import { celebrate } from "./confetti.js";

const boot = () => {
  document.body.classList.add("is-locked");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  initMusic();
  initCountdown("2026-07-21T10:00:00+05:30");
  initGallery();
  initAnimations();
  initDecor();
  initSplash();
  initRipples();
};

const initSplash = () => {
  const splash = document.querySelector("#splash");
  const enterButton = document.querySelector("#enterInvitation");

  enterButton?.addEventListener("click", () => {
    const timeline = window.gsap?.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        splash?.remove();
        document.body.classList.remove("is-locked");
        celebrate();
      },
    });

    if (!timeline) {
      splash?.remove();
      document.body.classList.remove("is-locked");
      return;
    }

    timeline
      .to(splash, { opacity: 0, scale: 1.04, duration: 0.9 })
      .fromTo(
        ".hero .reveal",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.13 },
        "-=0.2"
      );
  });
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
