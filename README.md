# Vamika Bhavani's First Birthday Invitation

Premium mobile-first digital invitation built with HTML5, CSS3, vanilla JavaScript, GSAP, ScrollTrigger, Canvas Confetti, LightGallery, Lottie Web, Lucide Icons, Google Fonts, HTML5 Audio, and Google Maps Embed.

## Project Architecture

- `index.html` contains semantic invitation content and section order.
- `css/style.css` contains design tokens, base layout, and components.
- `css/animations.css` contains decorative motion, keyframes, and reduced-motion handling.
- `css/responsive.css` contains mobile-first breakpoint refinements.
- `js/main.js` coordinates app startup.
- `js/animations.js` owns GSAP, ScrollTrigger, particles, hearts, and balloons.
- `js/countdown.js` owns the live birthday countdown.
- `js/gallery.js` owns LightGallery setup.
- `js/music.js` owns HTML5 audio behavior.
- `js/confetti.js` owns celebration effects.

## Asset Replacement

- Hero photo: `assets/images/hero-main.jpeg`
- Gallery photo 1: `assets/images/gallery-1.jpeg`
- Gallery photo 2: `assets/images/gallery-2.jpeg`
- Background music: `assets/music/birthday-music.mp3`

Replace any of these files with the same name to update the invitation without changing code.

## Component Flow

1. Splash screen
2. Hero section
3. Parents' invitation
4. Live countdown
5. About the little princess
6. Memory gallery
7. Family blessings
8. Event details
9. Venue and map
10. Contact
11. Thank you
12. Footer

## Animation Timeline

- Splash fades into the invitation and triggers a soft confetti moment.
- Hero copy and portrait reveal in sequence.
- Hero photo receives slow scroll-based parallax.
- Each section reveals one focal group at a time with ScrollTrigger.
- Cards and glass panels drift subtly on scroll.
- Gallery taps trigger lightbox and soft confetti.
- Ambient particles, hearts, stars, and balloons remain low-opacity for a premium feel.
