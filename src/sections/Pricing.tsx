const TIERS = [
  {
    name: 'Starter',
    price: '0',
    period: '/ เดือน',
    tagline: 'ทดลองใช้ฟรี',
    features: [
      '1 ผู้ใช้งาน',
      'สินค้าไม่เกิน 200 รายการ',
      'รายงานพื้นฐาน',
      'Email support',
    ],
    cta: 'เริ่มใช้งานฟรี',
    highlighted: false,
  },
  {
    name: 'Business',
    price: '890',
    period: '/ เดือน',
    tagline: 'ยอดนิยม',
    features: [
      'ผู้ใช้งานไม่จำกัด',
      'สินค้าไม่จำกัด',
      'รายงานครบทุกฟอร์ม (รวม ข.ย.)',
      'เชื่อมต่อ API และ SSO',
      'Priority support',
    ],
    cta: 'เริ่ม 30 วันแรกฟรี',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'สำหรับองค์กรขนาดใหญ่',
    features: [
      'หลายสาขา / หลายบริษัท',
      'SLA และ DR site',
      'Custom integration',
      'Dedicated manager',
    ],
    cta: 'ติดต่อฝ่ายขาย',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-6 py-20 scroll-mt-16"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black">แพ็กเกจราคา</h2>
        <p className="mt-4 text-slate-300">
          เลือกแพ็กเกจที่เหมาะสมกับธุรกิจคุณ ยกเลิกได้ตลอดเวลา
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={[
              'rounded-2xl border p-6 flex flex-col',
              t.highlighted
                ? 'border-indigo-400/40 bg-gradient-to-b from-indigo-500/10 to-violet-500/5 ring-1 ring-indigo-400/30'
                : 'border-white/10 bg-white/5',
            ].join(' ')}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{t.name}</h3>
              {t.highlighted && (
                <span className="rounded-full bg-indigo-500 text-white text-xs font-semibold px-3 py-1">
                  {t.tagline}
                </span>
              )}
            </div>
            {!t.highlighted && (
              <p className="mt-1 text-sm text-slate-400">{t.tagline}</p>
            )}
            <div className="mt-6 flex items-baseline gap-2">
              {t.price !== 'Custom' && (
                <span className="text-slate-400">฿</span>
              )}
              <span className="text-4xl font-black text-white">{t.price}</span>
              <span className="text-slate-400 text-sm">{t.period}</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-200 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-none text-emerald-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m4 10 4 4 8-8" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={[
                'mt-8 inline-flex justify-center rounded-xl px-4 py-2.5 font-semibold transition-colors',
                t.highlighted
                  ? 'bg-white text-slate-900 hover:bg-slate-100'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10',
              ].join(' ')}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
