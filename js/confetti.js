export const celebrate = () => {
  if (!window.confetti) return;

  window.confetti({
    particleCount: 90,
    spread: 78,
    origin: { y: 0.66 },
    colors: ["#f0caa3", "#c060a1", "#ffffff", "#3b185f"],
  });
};

export const celebrateSoftly = () => {
  if (!window.confetti) return;

  window.confetti({
    particleCount: 28,
    spread: 48,
    scalar: 0.72,
    origin: { y: 0.72 },
    colors: ["#f0caa3", "#ffffff", "#c060a1"],
  });
};
