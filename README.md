# ATV-Auto

Corporate website for **ATV-Auto Pulkovo** — an auto service center in Saint Petersburg. Covers all business verticals: car repair, spare parts search, tire fitting, car wash, motorsport boards, and partnership inquiries.

## Stack

- **React 18** · React Router DOM v6
- **CSS Modules** (home page) · Plain CSS (all other pages)
- **MUI v5** · Elastic EUI · Emotion
- **EmailJS** · Yup · React Helmet
- **Create React App** (react-scripts 5)

## Project Structure

```
src/
├── assets/            # Images, SVG icons, barrel export
├── components/        # Shared components (Nav, Footer, CursorGlow, ScrollReveal, SEO, Carousel…)
├── data/              # Static data files (carousels, contacts)
├── layouts/           # Reusable section blocks for service pages
├── pages/             # Route-level page components
│   ├── home-page/
│   ├── about-page/
│   ├── contacts/
│   ├── cooperation/
│   ├── shop-page/
│   ├── motoboard-page/
│   ├── carwash-page/
│   ├── tirefit-page/
│   └── service-page/
├── UI/                # Utility UI elements (scroll-to-top button)
├── routes.js          # Navigation link config
└── App.jsx            # Root component & routing
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contacts` | Contacts |
| `/cooperation` | Partnership |
| `/shop` | VIN Parts Search |
| `/motoboard` | Motorsport Boards |
| `/carwash` | Car Wash |
| `/tirefit` | Tire Fitting |
| `/prolamp` | Headlight Polishing |

## Getting Started

```bash
npm install
npm start      # http://localhost:3000
npm run build
npm test
```

## Notable Features

- Per-page SEO — unique title, description, canonical, Open Graph, Twitter Card
- Yandex reviews loaded from `/public/yandex-reviews.json` with static fallback
- EmailJS contact form — no backend required
- Scroll-triggered reveal animations and hero logo floating animation
- Fully responsive via CSS Media Queries
