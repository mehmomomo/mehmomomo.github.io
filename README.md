# Momo's Portfolio — mehmet.dev

> *Built to the beat. Deployed to the world.*

A personal portfolio website built from scratch with pure HTML, CSS, and JavaScript. Dark editorial aesthetic, bold typography, custom cursor, and smooth animations — no frameworks, no fluff.

**🔗 Live:** [mehmetmomo.netlify.app](https://mehmetmomo.netlify.app)  
**👤 GitHub:** [@mehmomo](https://github.com/mehmomo)

---

## Preview

```
┌─────────────────────────────────────┐
│  MOMO          About  Work  Contact │
│                                     │
│                                     │
│  // Developer — Builder             │
│                                     │
│  Hi, I'm                            │
│  MOMO.                              │
│                                     │
│  — A passionate developer           │
│    building in public.              │
└─────────────────────────────────────┘
```

---

## Features

- **Custom Cursor** — red dot with a smooth-following ring, scales on hover
- **Hero Animation** — staggered fade-up entrance on page load
- **Scroll Reveal** — sections animate into view as you scroll down
- **Active Nav Highlighting** — nav links highlight based on current section
- **Project Row Hover** — background fills in from left on hover
- **Noise Texture Overlay** — subtle grain for depth
- **Live Music Player** — Jay-Z loops from 2:41–4:42 on first interaction, with animated equalizer bars
- **Fully Responsive** — works clean on mobile, tablet, and desktop

---

## Tech Stack

| Layer | Tech |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, grid, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Bebas Neue · Space Mono · DM Sans |
| Hosting | Netlify / GitHub Pages |

No frameworks. No build tools. Just the fundamentals — done right.

---

## File Structure

```
portfolio/
├── index.html      # Markup and structure
├── style.css       # All styles, animations, and responsive rules
├── script.js       # Cursor, scroll reveal, nav highlighting, music player
├── music.m4a       # Jay-Z — Blueprint 2 (loops 2:41 → 4:42)
└── README.md       # You're here
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/mehmomo/your-repo-name.git

# Open in browser — no build step needed
open index.html
```

Or just drag `index.html` into your browser. That's it.

---

## Swapping the Music

To use a different track, replace `music.m4a` in your repo with your own audio file. Then in `script.js`, update the timestamps:

```js
const START_TIME = 161; // change to your start time in seconds
const END_TIME = 282;   // change to your end time in seconds
```

And in `index.html`, update the source if the file format changes:

```html
<source src="your-track.mp3" type="audio/mpeg">
```

---

## Adding a New Project

In `index.html`, find the `#projects` section and duplicate this block:

```html
<div class="project-item reveal">
    <div class="project-num">002</div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Short description of what it does.</p>
    </div>
    <div class="project-links">
        <a href="YOUR_LIVE_URL" target="_blank" class="live">Live Demo</a>
        <a href="YOUR_GITHUB_URL" target="_blank">GitHub</a>
    </div>
</div>
```

Bump the number, swap the links, you're live.

---

## Customization

All colors are CSS variables at the top of `style.css` — easy to swap out:

```css
:root {
    --black:   #0a0a0a;   /* page background */
    --white:   #f0ece4;   /* text color */
    --accent:  #ff3c1f;   /* red highlights */
    --accent2: #ffd700;   /* gold stats */
    --mid:     #1a1a1a;   /* card backgrounds */
    --grey:    #888;      /* muted text */
}
```

---

## Deployment

Push to GitHub and connect to **Netlify** or enable **GitHub Pages** in your repo settings — both work with zero config since this is a static site.

---

## License

© 2026 Mehmet. All rights reserved.

---

*Made with 🎧 and old-school rap.*
