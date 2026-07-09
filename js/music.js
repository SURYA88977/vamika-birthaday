export const initMusic = () => {
  const audio = document.querySelector("#birthdayMusic");
  const toggle = document.querySelector("#musicToggle");
  if (!audio || !toggle) return;

  toggle.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        toggle.classList.add("is-playing");
        toggle.setAttribute("aria-label", "Pause music");
      } else {
        audio.pause();
        toggle.classList.remove("is-playing");
        toggle.setAttribute("aria-label", "Play music");
      }
    } catch {
      toggle.setAttribute("aria-label", "Music unavailable");
    }
  });
};
