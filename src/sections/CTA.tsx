export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-fuchsia-600/20 p-10 md:p-14">
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black">
            พร้อมยกระดับร้านของคุณแล้วหรือยัง?
          </h2>
          <p className="mt-4 text-slate-200 text-lg">
            เริ่มใช้งาน DevPer ฟรี 30 วัน ไม่ต้องใช้บัตรเครดิต
            ติดตั้งง่าย ใช้งานได้ทันที
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@devper.app?subject=สนใจทดลองใช้%20DevPer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
            >
              ส่งอีเมลหาทีมเรา
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              ดูผลิตภัณฑ์ทั้งหมด
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
