# ntuthukomdunge.com

Personal engineering portfolio for **Ntuthuko Mdunge** — Electrical & Computer Engineering,
Durban University of Technology.

Built with **Next.js 15 (App Router)**, TypeScript and hand-written CSS. No UI framework, no
webfonts, no runtime dependencies beyond React. The build is a **fully static export**, so it
hosts anywhere.

---

## Run it locally

```powershell
cd ntuthukomdunge
npm install        # first time only
npm run dev        # http://localhost:3000
```

## Build the static site

```powershell
npm run build      # writes ./out
```

Preview the real export (no dev server):

```powershell
python -m http.server 4321 --directory out
# http://localhost:4321
```

---

## Before you publish: things only you can confirm

These are real gaps, not styling details. Search the codebase for each.

| What | Where | Current value |
| --- | --- | --- |
| Email address | `src/lib/site.ts` → `email` | `hello@ntuthukomdunge.com` (placeholder — the mailbox must exist) |
| Social links | GitHub profile is wired from `src/lib/site.ts` (`github`, `githubHandle`) into the footer, contact page, about CTA and Person schema. LinkedIn is not added. | https://github.com/Shylockmyth |
| CV download | No CV file was in the project folder. Drop a PDF into `public/files/` and add a link next to the hero buttons in `src/app/page.tsx`. | none |
| Rover role | `src/lib/projects.ts` → Cars4Mars `role` | "Power and electronics, team contributor" — confirm or correct |
| Studying year | `src/lib/site.ts` / about page | Deliberately says "student", not "final year" |
| Cars4Mars photos | `public/images/cars4mars/` | 5 photos imported from `cars4mars_slides/images`. Check they are the ones you want public, and add captions if useful |

The contact form does **not** use a backend. It opens the visitor's mail client with the message
prefilled (`mailto:`). If you want real form submissions, the simplest upgrade is Formspree or a
Next.js route handler on a host that supports server code.

---

## How to add a project

Everything content-related lives in one typed file: `src/lib/projects.ts`.

1. Add images to `public/images/<slug>/` (max 1600 px wide is plenty).
2. Add an object to the `projects` array:

```ts
{
  slug: "my-project",            // becomes /work/my-project/
  index: "07",
  title: "My project",
  shortTitle: "My project",
  year: "2026",
  domains: ["Hardware"],         // Hardware | Software | Robotics | Energy | Security | Vision
  lede: "One or two sentences under the card title.",
  role: "What you personally did",
  status: "Where it is now",
  stack: ["STM32", "KiCad", "C"],
  featured: false,               // true puts it on the home page
  cover: "cyberdeck",            // reuse an existing cover id (see CoverId type)
  coverCaption: "What the diagram shows.",
  metrics: [{ value: "6", unit: "layers", label: "What it means" }],
  sections: [{ heading: "Why", body: ["Paragraph"], bullets: ["Point"] }],
  specs: [{ label: "MCU", value: "STM32H743" }],
  gallery: [{ src: "/images/my-project/shot.jpg", alt: "...", caption: "...", width: 1600, height: 900 }],
  links: [{ label: "Report (PDF)", href: "/files/report.pdf" }],
}
```

3. Nothing else is needed. The home page, work index, filters, sitemap, breadcrumbs and
   previous/next navigation all read from that array.

**New cover art:** the blueprint covers are React SVG components in
`src/components/ProjectCover.tsx`. Add a new function, register it in the `covers` map, and add
its id to `CoverId` in `src/lib/projects.ts`. They inherit the site colour tokens, so they work
in both themes automatically.

**New page:** create `src/app/<route>/page.tsx`, export `metadata`, and add the link to
`nav` in `src/lib/site.ts`.

---

## Design system

- **Palette:** near-black `#07090b` with a mint signal colour `#4fe3b0`; full light theme via
  `data-theme="light"`.
- **Type:** Segoe UI / system sans for prose, Cascadia Mono / Consolas for all metadata and
  numbers. Nothing is downloaded from a font CDN.
- **Grid:** 76 px background grid, sharp 1 px borders, corner brackets, indexed sections.
- **Signature UX:**
  - `Ctrl/⌘ + K` command palette with keyboard navigation
  - fixed status bar with live SAST clock and availability
  - scroll progress rule, reduced-motion aware reveals
  - work filters that announce results to screen readers
  - theme toggle persisted in `localStorage`

All text/background pairs were measured against WCAG AA at their real font sizes, including the
light theme and the 9 px mono labels (`--dim` was darkened specifically to pass 4.5:1).

Lighthouse on the exported build (`out/`, served over HTTP):

| Page | Accessibility | Best practices | SEO |
| --- | --- | --- | --- |
| Home | 100 | 100 | 100 |
| Case study (`/work/hybrid-energy/`) | 100 | 100 | 100 |

Note: running Lighthouse against `npm run dev` reports a missing meta description. That is a
Next.js dev-server streaming artefact — metadata is streamed into the body during development.
The static export puts it in `<head>`, which is why the scores above are from `out/`.

---

## Deploy

Live on GitHub Pages from this repository:

| What | Value |
| --- | --- |
| Source branch | `main` |
| Workflow | `.github/workflows/deploy.yml` (`npm ci` → `next build` → upload `out/`) |
| Pages URL | https://shylockmyth.github.io/ |
| Custom domain | https://ntuthukomdunge.is-a.dev (`CNAME` → `shylockmyth.github.io`) |

`NEXT_PUBLIC_SITE_URL` sets the canonical origin (footer domain, sitemap, robots, Open Graph).
It defaults to `https://ntuthukomdunge.com`; the Pages workflow builds with
`https://ntuthukomdunge.is-a.dev`.

**Other hosts**
- Build command: `npm run build`
- Output directory: `out` (plain static bundle; upload anywhere)

**Custom domain**
- Add the domain under Settings → Pages, then point a `CNAME` record at `shylockmyth.github.io`.
- For an apex domain, add the four GitHub Pages `A` records plus a `CNAME` record for `www`.

---

## Structure

```
src/
  app/
    layout.tsx          metadata, theme boot script, chrome
    page.tsx            home
    globals.css         the entire design system
    work/page.tsx       work index + filters
    work/[slug]/page.tsx  project template (static params)
    about/ contact/     profile and contact
    not-found.tsx       404
    sitemap.ts robots.ts
  components/
    SiteHeader.tsx      nav + command palette + theme toggle
    ProjectCard.tsx  ProjectCover.tsx  WorkGrid.tsx
    HeroDiagram.tsx  StatusBar.tsx  ScrollProgress.tsx  RevealOnScroll.tsx
    CopyEmail.tsx  ContactForm.tsx  SiteFooter.tsx  icons.tsx
  lib/
    site.ts             name, email, nav, capabilities, timeline, toolchain
    projects.ts         all project content
public/
  images/  files/  og.png  favicon.svg  CNAME
```

## Content provenance

Case-study figures and claims come from the source work in the parent directory:

- `RENE301_Feasibility_Study/` — results JSON, figures and the generated report
- `cyberdeck-pcb/` — design notes, BOM and layout constraints
- `esp32-cam-detector/` — server README and detection settings
- `tracker_server.py` + `index.html` — SkyTracker sample grid and refresh intervals
- `scanner.py`, `malware_db.py`, `app.py` — detection layers and counts
- `Cars4Mars_Space_Science_Symposium_Slides.pptx` — rover platform and mission scoring

If a number changes in the source work, update it in `src/lib/projects.ts`.
