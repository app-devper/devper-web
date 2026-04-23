const FEATURES = [
  {
    title: 'Multi-tenant architecture',
    body: 'แยกข้อมูลแต่ละลูกค้า (clientId) อย่างชัดเจน ปลอดภัย ขยายระดับได้',
  },
  {
    title: 'Single Sign-On',
    body: 'ล็อกอินครั้งเดียวใช้งานได้ทุกระบบในเครือ DevPer ด้วย JWT + Redis session',
  },
  {
    title: 'RBAC ครบวงจร',
    body: 'บริหารสิทธิ์ผู้ใช้ตามบทบาท SUPER / ADMIN / MANAGER / USER',
  },
  {
    title: 'Cloud native',
    body: 'รันบน Google Cloud Run พร้อม auto-scale และ uptime 99.9%',
  },
  {
    title: 'รองรับภาษาไทย 100%',
    body: 'UI ภาษาไทยครบทั้งระบบ พร้อมรองรับ time zone Asia/Bangkok',
  },
  {
    title: 'Offline-first',
    body: 'PWA ทำงานแม้อินเทอร์เน็ตหลุด มี queue ซิงก์กลับอัตโนมัติเมื่อกลับมาออนไลน์',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-white/5 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black">
            ทำไมต้อง DevPer?
          </h2>
          <p className="mt-4 text-slate-300">
            สร้างด้วยเทคโนโลยีที่ทันสมัย ออกแบบเพื่อรองรับธุรกิจไทยโดยเฉพาะ
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m4 10 4 4 8-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
