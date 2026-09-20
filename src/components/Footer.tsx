import logo from '../assets/logo.png'
import ViewModeToggle from './ViewModeToggle'

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-ink/10 px-4 pt-8 sm:px-6">
        <div className="flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ясноречье" className="h-12 w-12" />
            <span className="font-heading text-sm font-extrabold">
              <span className="text-leaf">Ясно</span>
              <span className="text-ink">речье</span>
              <br />
              <span className="text-xs font-semibold text-ink-soft">
                Анастасия · учитель-логопед онлайн
              </span>
            </span>
          </div>

          <ViewModeToggle />
        </div>

        <p className="text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} «Ясноречье». Все материалы — плейсхолдеры для разработки.
        </p>
      </div>
    </footer>
  )
}
