const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const initAnimations = () => {
  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) return;

  window.gsap.registerPlugin(window.ScrollTrigger);

  window.gsap.set(".hero .reveal", { opacity: 0, y: 28 });

  window.gsap.to(".hero__photo", {
    scale: 1.1,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  document.querySelectorAll(".section:not(.hero)").forEach((section) => {
    const elements = section.querySelectorAll(".eyebrow, h2, p, article, .gallery__item, .map-frame, .button");
    window.gsap.from(elements, {
      y: 46,
      opacity: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
        once: true,
      },
    });
  });

  window.gsap.utils.toArray(".glass-panel").forEach((panel) => {
    window.gsap.to(panel, {
      y: -18,
      ease: "none",
      scrollTrigger: {
        trigger: panel,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  });
};

export const initDecor = () => {
  if (prefersReducedMotion) return;
  initParticles();
  window.setInterval(createHeart, 1600);
  window.setInterval(createBalloon, 5200);
};

const initParticles = () => {
  const canvas = document.querySelector("#particleCanvas");
  const context = canvas?.getContext("2d");
  if (!canvas || !context) return;

  const particles = Array.from({ length: 42 }, () => createParticle());

  const resize = () => {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  };

  const draw = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += Math.sin(Date.now() * 0.001 + particle.seed) * 0.08;

      if (particle.y < -20) {
        Object.assign(particle, createParticle(window.innerHeight + 20));
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.globalAlpha = particle.opacity;
      context.fill();
    });
    context.globalAlpha = 1;
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
};

const createParticle = (forcedY) => ({
  x: Math.random() * window.innerWidth,
  y: forcedY ?? Math.random() * window.innerHeight,
  size: Math.random() * 2.2 + 0.7,
  speed: Math.random() * 0.28 + 0.08,
  seed: Math.random() * 8,
  opacity: Math.random() * 0.46 + 0.16,
  color: Math.random() > 0.5 ? "#f0caa3" : "#ffffff",
});

const createHeart = () => {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.bottom = "-24px";
  heart.style.animationDuration = `${10 + Math.random() * 8}s`;
  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), 18000);
};

const createBalloon = () => {
  const balloon = document.createElement("span");
  balloon.className = "float-balloon";
  balloon.style.left = `${Math.random() * 92}vw`;
  balloon.style.bottom = "-80px";
  balloon.style.animationDuration = `${14 + Math.random() * 6}s`;
  document.body.appendChild(balloon);
  window.setTimeout(() => balloon.remove(), 22000);
};
