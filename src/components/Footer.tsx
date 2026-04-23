export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-slate-950 mt-16"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-black">
              dp
            </span>
            <span>DevPer</span>
          </div>
          <p className="mt-4 text-slate-400 max-w-md leading-relaxed">
            ระบบ POS และการจัดการร้านค้าครบวงจร — ออกแบบมาสำหรับร้านยา ร้านทอง
            และธุรกิจค้าปลีกขนาดกลางถึงใหญ่
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">ผลิตภัณฑ์</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#products" className="hover:text-white">Pharmacy POS</a>
            </li>
            <li>
              <a href="#products" className="hover:text-white">Gold Shop</a>
            </li>
            <li>
              <a href="#products" className="hover:text-white">Snook POS</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">ติดต่อเรา</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="mailto:hello@devper.app" className="hover:text-white">
                hello@devper.app
              </a>
            </li>
            <li>
              <a
                href="https://devper.app"
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                devper.app
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {year} DevPer. All rights reserved.</span>
          <span>Made with ♥ in Bangkok</span>
        </div>
      </div>
    </footer>
  )
}
