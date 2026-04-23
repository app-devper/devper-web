# devper-web

Marketing / portal site สำหรับโดเมน [devper.app](https://devper.app) — landing page แนะนำผลิตภัณฑ์ในตระกูล DevPer (Pharmacy POS, Gold Shop, Snook POS, Retail POS)

## Tech stack

- **Vite 8** + **React 19** + **TypeScript 6**
- **Tailwind CSS 4** (ผ่าน `@tailwindcss/vite`)
- **React Router 7**
- Deploy บน **Firebase Hosting** (site target `devper-web`)

## Requirements

- Node.js 20+
- npm 10+
- (สำหรับ deploy) Firebase CLI + access ไปยัง project `devperpos`

## Development

```bash
npm install
npm run dev       # เปิด http://localhost:5173
```

## Build

```bash
npm run build     # → dist/
npm run preview   # serve dist/ ที่ :4173
```

## Lint

```bash
npm run lint
```

## Deploy

```bash
npm run build
firebase deploy --only hosting:devper-web
```

## โครงสร้าง

```
devper-web/
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Navbar, Footer, reusable components
│   ├── sections/         # Hero, Products, Features, Pricing, CTA
│   ├── pages/            # Home
│   ├── App.tsx           # Router setup
│   ├── main.tsx          # Entry point
│   ├── index.css         # Tailwind + global styles
│   └── vite-env.d.ts
├── firebase.json
├── .firebaserc
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── package.json
```

## หมายเหตุ

- เว็บนี้เป็น **static export (SPA)** ไม่มี backend — ใช้ `rewrite` ใน `firebase.json` ส่งทุก path กลับไปที่ `/index.html` (client-side routing)
- แบรนด์: DevPer — ระบบ POS และการจัดการร้านค้าครบวงจร
- เชื่อมโยงกับ [devper-api](../devper-api/) (reverse proxy Cloud Run) สำหรับบริการ backend จริง
