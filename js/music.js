export const initMusic = () => {
  const audio = document.querySelector("#birthdayMusic");
  const toggle = document.querySelector("#musicToggle");
  if (!audio || !toggle) return;

  const setPlayingUI = () => {
    toggle.classList.add("is-playing");
    toggle.setAttribute("aria-label", "Pause music");
  };

  const setPausedUI = () => {
    toggle.classList.remove("is-playing");
    toggle.setAttribute("aria-label", "Play music");
  };

  // Browsers block audio-with-sound from autoplaying until the
  // visitor interacts with the page — there's no way around that.
  // The standard workaround: start playback muted (browsers always
  // allow this), then unmute the instant the visitor taps, scrolls,
  // or presses any key anywhere on the page. That first interaction
  // usually happens within a second of the page loading, so it reads
  // as "the music just started" rather than requiring them to find
  // and press the music button.
  const unmuteOnFirstInteraction = () => {
    const unmute = () => {
      audio.muted = false;
      setPlayingUI();
      document.removeEventListener("pointerdown", unmute);
      document.removeEventListener("keydown", unmute);
      document.removeEventListener("scroll", unmute);
      document.removeEventListener("touchstart", unmute);
    };
    document.addEventListener("pointerdown", unmute, { once: true });
    document.addEventListener("keydown", unmute, { once: true });
    document.addEventListener("scroll", unmute, { once: true, passive: true });
    document.addEventListener("touchstart", unmute, { once: true, passive: true });
  };

  const startMusic = async () => {
    try {
      // Try with sound first (works if the browser has already
      // granted autoplay permission, e.g. after a previous visit).
      audio.muted = false;
      await audio.play();
      setPlayingUI();
    } catch {
      try {
        // Fall back to the guaranteed-to-work muted autoplay, then
        // unmute as soon as the visitor touches the page at all.
        audio.muted = true;
        await audio.play();
        unmuteOnFirstInteraction();
      } catch {
        setPausedUI();
      }
    }
  };

  startMusic();

  toggle.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        audio.muted = false;
        await audio.play();
        setPlayingUI();
      } else {
        audio.pause();
        setPausedUI();
      }
    } catch {
      toggle.setAttribute("aria-label", "Music unavailable");
    }
  });
};
