export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-transparent blur-3xl" />
        <div className="absolute top-40 -left-40 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-80 -right-40 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          เปิดให้ทดลองใช้งานฟรีแล้ววันนี้
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-tight">
          ระบบ POS ที่ทำให้การบริหารร้าน
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            ง่าย รวดเร็ว และแม่นยำ
          </span>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
          DevPer คือแพลตฟอร์มจัดการร้านค้าครบวงจร
          รองรับร้านยา ร้านทอง และธุรกิจค้าปลีก
          พร้อมระบบขาย สต็อก ใบเสร็จ รายงาน และผู้ใช้งานในที่เดียว
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
          >
            เริ่มทดลองใช้ฟรี
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            ดูผลิตภัณฑ์
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm max-w-3xl mx-auto">
          {[
            { v: '99.9%', l: 'Uptime SLA' },
            { v: '4', l: 'โดเมนธุรกิจ' },
            { v: '24/7', l: 'Cloud hosted' },
            { v: '100%', l: 'Thai language' },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
            >
              <div className="text-2xl font-black text-white">{s.v}</div>
              <div className="mt-1 text-slate-400 text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
