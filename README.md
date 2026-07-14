# Gibango Elevator — Website

Modern, luxury one-page website for **Gibango Company Limited** with a scroll-synced elevator-shaft background.

## How to view
**Double-click `index.html`** to open it in your browser. No installation, no build step.
Keep the **`frames/`** folder next to `index.html` (the background reads its images from it).

## Files
- `index.html` — the whole site (HTML + CSS + JavaScript).
- `intro.mp4` — 5-second cinematic opening: the elevator drops down the shaft and stops. Its final frame exactly matches the first frame of the scroll background, so the hand-off is seamless. Plays once per session, has a Skip button, and is skipped entirely for reduced-motion visitors or if the file fails to load.
- `frames/` — 81 JPG frames (`f_001.jpg … f_081.jpg`) of a cinematic elevator-shaft descent, generated with **Higgsfield AI (Kling 3.0)** and extracted into a frame sequence.
- `cabins/` — 5 cabin photos used by the horizontal cabin slider.

## How the background works
- The frames are **preloaded**, then the displayed frame is mapped **directly to your scroll position**: top of the page = first frame, bottom of the page = last frame (the elevator settling at the misty shaft floor).
- Because the frames are preloaded images (not a streamed video), scrolling is **smooth with no seek lag**, and the motion stays **locked to your scroll speed**. Neighbouring frames are cross-faded for extra smoothness.
- If the visitor prefers reduced motion, the first frame is shown statically. A dark fallback colour shows until the frames load.

## Sections
Hero · About (Mission/Vision) · Services · Why Us · Stats · Cabin Gallery · Projects · Team · Contact.
Brand: warm near-black + champagne gold `#c8a96a`; serif **Playfair Display** + **Jost**. Fully responsive with an animated mobile menu. The contact form opens the visitor's email app pre-filled to `office@gibango.com`, plus Call + WhatsApp shortcuts.

## Things you may want to tweak
- **Scroll feel** — the ease factor (`0.18`) and frame count control how tightly the descent tracks scrolling. Search the background script in `index.html`.
- **Stats numbers** and **team roles** — illustrative placeholders; update in `index.html`.
- **Contact form backend** — uses `mailto:`. For automatic delivery, connect a form service (e.g. Formspree).

## Publishing
Upload **`index.html`**, **`intro.mp4`**, and the **`frames/`** and **`cabins/`** folders to any web host (your gibango.co.tz hosting, Netlify, Cloudflare Pages, etc.). Internet is needed only for the Google Fonts; everything else is local. Total weight is ~8 MB and loads in parallel in a second or two on real hosting.
