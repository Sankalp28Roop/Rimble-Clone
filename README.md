# Rimble Clone

<img width="1918" height="1025" alt="WebGl" src="https://github.com/user-attachments/assets/1cf2dbb8-03dd-4ac9-acb8-aef77cf873df" />
<img width="1920" height="1025" alt="dashbaord " src="https://github.com/user-attachments/assets/82186e9d-ace7-4442-9743-eb024463f5a8" />


Immersive 3D-scrolling landing page built with **Next.js**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| 3D Engine | React Three Fiber + Drei |
| Post-processing | `@react-three/postprocessing` (Bloom + Vignette) |
| Scroll Animation | Framer Motion `useScroll` / `useTransform` |
| Styling | Tailwind CSS v4 |

## Features

- **Scroll-Driven 3D Camera** — Smooth plunge above/below a custom water surface, synced to page scroll
- **Custom Water Shader** — Double-sided GLSL with Fresnel, shimmer, and color interpolation (teal above → deep navy below)
- **3D Lotus** — Loaded from `lotus.glb` with emissive material overrides; falls back to procedural geometry if the model is absent
- **Mouse Parallax** — Lotus subtly tracks cursor with lerp-based easing in `useFrame`
- **Bloom Effects** — Cinematic glow on emissive surfaces via `@react-three/postprocessing`
- **Dynamic Typography** — "BUILT WITH RIMBLE.APP" crossfades to "SINCE 2026" on scroll
- **Glassmorphism Card** — Fixed-bottom UI with backdrop blur, testimonial carousel, magnetic "Build" button
- **Particle Systems** — Floating glow particles around the lotus + atmospheric ambient particles

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and scroll.

### Optional: 3D Model

Place a `lotus.glb` file in `public/` to replace the procedural fallback. A generator script is also available:

```bash
node scripts/generate-lotus.mjs
```

## Project Structure

```
src/
├── app/             # Next.js App Router (layout, page)
├── components/
│   ├── 3d/          # R3F scene: Water, Lotus, Particles, Camera, Effects
│   └── ui/          # DOM overlays: GlassCard, PixelatedText, MagneticButton
├── hooks/           # useMousePosition, useScrollProgress
├── shaders/         # Custom GLSL (water vertex/fragment)
scripts/             # GLB generation utility
```
