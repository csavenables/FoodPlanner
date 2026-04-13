# FoodPlanner

FoodPlanner is a private, lightweight web app for Kamilla and Christian that shows the right meal ingredients based on the current day and time, with quick user switching and a full-week food plan view.

## Features

- Time-aware `Now + Next` meal panel driven by device local date/time.
- User toggle for `K` (Kamilla) and `C` (Christian) with persisted preference.
- Hardcoded weekly plan model with PDF baseline and `PDF_Plan_Updates.txt` overrides.
- Christian `Snack 3` included daily after `Meal 3`.
- Minimal UI with no auth, no hamburger menu, and no logo.
- Full-week expandable day view.
- Global shopping list modal aggregating all ingredients for both users across the week.
- GitHub Pages deployment workflow (prepared; deploys on push to `main`).

## Getting Started

1. Install dependencies:
   `npm install`
2. Start the app:
   `npm run dev`
3. Build production output:
   `npm run build`
4. Preview production build:
   `npm run preview`

## Controls

- `K` / `C` buttons (top-left): switch active user plan.
- `Shopping List` (top-right): open full combined weekly shopping list.
- `Full Week`: toggle expandable weekly day-by-day meal view.