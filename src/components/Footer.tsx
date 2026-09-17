import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-ink/10 px-4 pt-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Чистая речь" className="h-12 w-12" />
          <span className="font-heading text-sm font-extrabold text-sky-dark">
            Чистая речь
            <br />
            <span className="text-xs font-semibold text-ink-soft">Анастасия · учитель-логопед онлайн</span>
          </span>
        </div>
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} «Чистая речь». Все материалы — плейсхолдеры для разработки.
        </p>
      </div>
    </footer>
  )
}
