# Bilingual Food Price Dashboard 🇨🇦

An interactive English/French dashboard showing grocery price trends, built with React and Recharts for SEG 3125 (Analysis and Design of User Interfaces) at the University of Ottawa.

**Live demo:** https://food-price-dashboard.vercel.app/

> The dataset is **synthetic** and made for learning (Tomatoes, Apples, Broccoli, Carrots; January–June 2026). It is not real Statistics Canada data.

## Features
- **Language toggle (EN/FR):** switches every piece of UI text, including chart titles, insight cards, controls, product and month names, the footer, the browser tab title, and the HTML `lang` attribute
- **Line chart:** monthly price trend for the selected product
- **Bar chart:** product-by-product comparison for the selected month
- **Product and month selectors:** update both charts and the insight text instantly, with no page reload

## Design decisions
- **Chart choice:** a line chart for change over time; a bar chart for comparing categories, because bar heights are easier to compare than points on a line
- **"3Cs" framework:**
  - *Context:* every chart has a title, subtitle, unit badge (CAD/kg), and insight card
  - *Clutter-free:* minimal gridlines and a limited palette
  - *Contrast:* a dark hero section, distinct chart colours, and readable text
- **Localization challenge:** French strings run longer than English, so buttons and spacing were resized to stop headings and labels from wrapping or overflowing

## Tech stack
React · Vite · Recharts · JavaScript · CSS · deployed on Vercel

## Run locally
```bash
npm install
npm run dev
```
