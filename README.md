# Indian Hindu Wedding Invitation

A responsive bilingual (English/Telugu) React invitation with a live countdown, event cards, Google Maps search link, animated petals, twinkling lights and a Rama–Sita wedding-inspired background.

## Event details included

- Groom: Chi. Naga Raju
- Bride: Chi. La. Sow. Monika Kiranmai
- Wedding: 15 November 2026, 9:15 PM
- Dinner & reception: 15 November 2026, 7:30 PM
- Venue: M.R. Function Hall, Inakuduru Police Station Beside Road, Machilipatnam

The Telugu invitation begins with the required sacred phrase: **శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు**.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Customization

- Edit event text and language strings in `src/WeddingInvitation.jsx`.
- Update `WEDDING_DATE` if the wedding date or time changes. It currently targets 15 November 2026 at 9:15 PM, India Standard Time (+05:30).
- Replace `MAPS_URL` with a verified Google Maps pin if you have one. The included URL opens a Google Maps search for the supplied venue address.
- Replace `public/rama-sita-mandap.jpg` with a licensed image or your own artwork if desired.

## Background note

The four wedding-ritual illustrations are embedded directly inside the invitation card as subtle translucent watermarks: Jeelakarra Bellam and Talambralu on the left side, Mangalasutra and Panigrahanam on the right side. Their opacity and blend mode keep the invitation text readable on desktop and mobile. Falling petals and twinkling fairy lights add motion. The illustrations are static image assets, not video.


## Ritual artwork assets

- `public/ritual-jeelakarra-bellam.jpg`
- `public/ritual-talambralu.jpg`
- `public/ritual-mangalasutra.jpg`
- `public/ritual-panigrahanam.jpg`


## Animation details

- Invitation card gently rises into view with a staged reveal of the invitation text.
- The four translucent ritual illustrations have a very subtle breathing motion.
- A slow silk-like light sheen passes over the card artwork.
- Countdown tiles enter in sequence and lift slightly on hover.
- Event cards and location buttons have restrained hover feedback.
- Background petals and fairy lights continue their ambient motion.
- The celebration state and footer ornaments have subtle celebratory motion.
- `prefers-reduced-motion` is respected so visitors who disable motion see a stable layout.


## Opening cover

The website now starts with a full-screen wedding cover featuring the couple's names and wedding date over the Rama–Sita mandap artwork. Visitors click **Open Wedding Invitation** to reveal the existing detailed invitation card. The language selector is available on the cover and the selected language carries into the invitation.


## Circular opening screen

The initial screen is a circular, clickable medallion containing only the couple's names. Tap or click anywhere on the circle to open the detailed invitation card. The language selector remains separate from the circular banner.
