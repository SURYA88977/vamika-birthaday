export const initCountdown = (targetDate) => {
  const target = new Date(targetDate).getTime();
  const nodes = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
  };

  const update = () => {
    const distance = Math.max(0, target - Date.now());
    const days = Math.floor(distance / 86_400_000);
    const hours = Math.floor((distance % 86_400_000) / 3_600_000);
    const minutes = Math.floor((distance % 3_600_000) / 60_000);
    const seconds = Math.floor((distance % 60_000) / 1000);

    setText(nodes.days, days);
    setText(nodes.hours, hours);
    setText(nodes.minutes, minutes);
    setText(nodes.seconds, seconds);
  };

  update();
  window.setInterval(update, 1000);
};

const setText = (node, value) => {
  if (!node) return;
  node.textContent = String(value).padStart(2, "0");
};
