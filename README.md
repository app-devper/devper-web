# devper-web

Marketing / portal site สำหรับโดเมน [devper.app](https://devper.app) — landing page แนะนำผลิตภัณฑ์ในตระกูล DevPer (Pharmacy POS, Gold Shop, Snook POS, Retail POS)

## Tech stack

- **Vite 8** + **React 19** + **TypeScript 6**
- **Tailwind CSS 4** (ผ่าน `@tailwindcss/vite`)
- **React Router 7**
- Deploy บน **Cloudflare Pages** (project `devper-web`, production branch `main`, โดเมน devper.app)

## Requirements

- Node.js 20+
- npm 10+
- (สำหรับดูผล deploy) สิทธิ์เข้า Cloudflare dashboard ของบัญชีที่ถือ devper.app

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

Cloudflare Pages ต่อกับ GitHub repo นี้โดยตรง ไม่มีคำสั่ง deploy ด้วยมือ

- push เข้า `main` → Pages รัน `npm run build` แล้วเผยแพร่ `dist/` เป็น production ที่ https://devper.app
- branch อื่นและ PR → ได้ preview ที่ `https://<id>.devper-web.pages.dev`

ดูผลได้จาก check "Cloudflare Pages" บน commit นั้นใน GitHub:

```bash
gh api "repos/app-devper/devper-web/commits/$(git rev-parse origin/main)/check-runs" \
  --jq '.check_runs[] | select(.name=="Cloudflare Pages") | "\(.conclusion) \(.details_url)"'
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
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── package.json
```

## หมายเหตุ

- เว็บนี้เป็น **static export (SPA)** ไม่มี backend — Cloudflare Pages ส่งทุก path ที่ไม่ตรงกับไฟล์กลับไปที่ `/index.html` เอง (SPA mode เพราะไม่มี `404.html`) จึงใช้ client-side routing ได้
- แบรนด์: DevPer — ระบบ POS และการจัดการร้านค้าครบวงจร
- เชื่อมโยงกับ [devper-api](../devper-api/) (reverse proxy Cloud Run) สำหรับบริการ backend จริง

## Agent skills

The generic Claude Code / Codex skills (`coding-standards`, `tdd-workflow`,
`grilling`, …) and the `ecc` rules are not in this repo. Every app-devper
repo shares them from [app-devper/agent-skills](https://github.com/app-devper/agent-skills):
clone it and run its `install.sh` once per machine. Only the skills about this
repo live in `.agents/skills/`: `dev-flow`, `git-flow`, `pr`.
