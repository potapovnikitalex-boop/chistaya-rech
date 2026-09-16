import { useState } from 'react'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { href: '#about', label: 'Обо мне' },
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Как проходят занятия' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_9px_40px_rgba(22,36,61,0.1)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Чистая речь" className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="font-heading text-lg font-extrabold text-sky-dark sm:text-xl">
            Чистая речь
          </span>
        </a>

        <nav className="hidden items-center gap-7 font-body text-[15px] font-bold text-ink lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacts"
            className="btn-pill hidden bg-primary px-5 py-2.5 text-sm text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark sm:inline-block"
          >
            Записаться
          </a>

          <button
            type="button"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-white px-4 pb-4 pt-2 font-body text-base font-bold text-ink lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-2 py-2.5 transition-colors hover:bg-primary-light hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="btn-pill mt-2 bg-primary px-5 py-3 text-center text-sm text-white"
          >
            Записаться
          </a>
        </nav>
      )}
    </header>
  )
}
