# BriseTech React website

A simpler React + Vite version of the BriseTech website. The original BriseTech logo is in `public/brisetech-logo.png`.

## Run it on a computer
1. Install Node.js (LTS) from https://nodejs.org
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local address Vite prints.

To create a production build, run `npm run build`.

## Add your team photos
Put JPG photos in `public/team-photos/` and name them `team-01.jpg`, `team-02.jpg`, ... `team-09.jpg`. Update the names and roles in the `team` array near the top of `src/main.jsx`.

## Customize
- Main website content and React components: `src/main.jsx`
- Colors, layout and responsive styling: `src/style.css`
- Contact email: search for `hello@brisetech.com` in `src/main.jsx` and replace it with your real email.
