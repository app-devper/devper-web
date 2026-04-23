type Product = {
  id: string
  name: string
  tagline: string
  description: string
  accent: string
  icon: React.ReactNode
  href?: string
}

const PRODUCTS: Product[] = [
  {
    id: 'pharmacy',
    name: 'Pharmacy POS',
    tagline: 'ระบบจัดการร้านยา',
    description:
      'จัดการสต็อกแบบ FEFO, แจ้งเตือนยาใกล้หมดอายุ, รายงาน ข.ย. 9–13 และรองรับใช้งานแบบออฟไลน์ (PWA)',
    accent: 'from-emerald-500/60 to-teal-500/60',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 2h3a2 2 0 0 1 2 2v2h-7V4a2 2 0 0 1 2-2Z" />
        <rect x="4" y="6" width="16" height="16" rx="3" />
        <path d="M12 11v6M9 14h6" />
      </svg>
    ),
  },
  {
    id: 'gold',
    name: 'Gold Shop',
    tagline: 'ระบบร้านทอง',
    description:
      'รองรับ POS, รับจำนำ, ออมทอง, สต็อก และราคาทอง real-time ครบจบในระบบเดียว',
    accent: 'from-amber-500/70 to-yellow-500/60',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 7l8 4 8-4-8-5Z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    id: 'snook',
    name: 'Snook POS',
    tagline: 'ระบบสนุกเกอร์',
    description:
      'จับเวลาโต๊ะ, คิดค่าเกม, ขายเครื่องดื่มและอาหาร พร้อมรายงานรายวันครบถ้วน',
    accent: 'from-sky-500/60 to-indigo-500/60',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M6 12a6 6 0 0 1 12 0M18 12a6 6 0 0 1-12 0" />
      </svg>
    ),
  },
  {
    id: 'pos',
    name: 'Retail POS',
    tagline: 'ระบบค้าปลีกทั่วไป',
    description:
      'ระบบขายหน้าร้านหลายสาขา, ลูกค้าสมาชิก, โปรโมชั่น และรายงานแบบเรียลไทม์',
    accent: 'from-fuchsia-500/60 to-pink-500/60',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18l-2 12H5L3 7Z" />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="mx-auto max-w-6xl px-6 py-20 scroll-mt-16"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black">
          ผลิตภัณฑ์ของเรา
        </h2>
        <p className="mt-4 text-slate-300">
          ครอบคลุมทุกประเภทธุรกิจที่ต้องการระบบ POS และการจัดการร้านค้าที่ทำงานได้จริง
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white`}
              aria-hidden="true"
            >
              {p.icon}
            </div>
            <h3 className="mt-5 text-lg font-bold">{p.name}</h3>
            <p className="text-sm text-slate-400 mt-1">{p.tagline}</p>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {p.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
