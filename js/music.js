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

  // Try to start playback the moment the page loads, with no click
  // required. Most mobile/desktop browsers block audio with sound
  // from autoplaying until the visitor has interacted with the page
  // at least once, so if the first attempt is rejected we fall back
  // to starting playback silently on the very first tap/keypress
  // anywhere on the page — the visitor never has to touch the music
  // button itself.
  const tryAutoplay = async () => {
    try {
      await audio.play();
      setPlayingUI();
    } catch {
      const startOnFirstInteraction = async () => {
        document.removeEventListener("pointerdown", startOnFirstInteraction);
        document.removeEventListener("keydown", startOnFirstInteraction);
        try {
          await audio.play();
          setPlayingUI();
        } catch {
          setPausedUI();
        }
      };
      document.addEventListener("pointerdown", startOnFirstInteraction, { once: true });
      document.addEventListener("keydown", startOnFirstInteraction, { once: true });
    }
  };

  tryAutoplay();

  toggle.addEventListener("click", async () => {
    try {
      if (audio.paused) {
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
