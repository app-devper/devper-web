import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NAV = [
  { href: '#products', label: 'ผลิตภัณฑ์' },
  { href: '#features', label: 'ฟีเจอร์' },
  { href: '#contact', label: 'ติดต่อ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? 'backdrop-blur bg-slate-950/70 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-black">
            dp
          </span>
          <span>DevPer</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition-colors"
        >
          เริ่มใช้งาน
        </a>
      </div>
    </header>
  )
}
