# Field Report — Portfolio

A one-page portfolio styled like a naturalist's field log: deep ink background,
warm paper insets for each section, and a dotted rail on the left that tracks
your scroll position.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for deployment:

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify,
GitHub Pages, etc).

## Make it yours

**Everything you need to edit lives in `src/data.js`.** You should not need to
touch any component file to update your content:

- `profile` — your name, role, tagline, bio, and photo
- `socials` — your contact links
- `experience` — your work history
- `projects` — projects you want to show off
- `skills` — grouped skill tags
- `availability` — the status pill on your hero and the line in the contact section

### Adding your photo

1. Drop your photo file into `src/assets/` — e.g. `src/assets/photo.jpg`
2. In `src/data.js`, set:
   ```js
   photo: "/src/assets/photo.jpg",
   ```
   (After running `npm run build`, Vite will handle bundling the image correctly.)

Until you add a photo, a simple placeholder silhouette shows in the badge frame.

## Structure

```
src/
  data.js            ← edit this for your content
  App.jsx            ← page layout, assembles sections
  index.css          ← all styling / design tokens
  components/
    Rail.jsx         ← left-hand scroll-tracking nav
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
```

## Notes

- Fonts used: Space Grotesk (headlines), Inter (body), IBM Plex Mono (labels/data) — loaded via Google Fonts in `index.html`.
- Fully responsive; the side rail collapses on narrow screens.
- Respects `prefers-reduced-motion`.
