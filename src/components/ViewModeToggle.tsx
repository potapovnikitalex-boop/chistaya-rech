import { useViewMode, type ViewMode } from '../hooks/useViewMode'

const OPTIONS: { value: ViewMode; label: string }[] = [
  { value: 'auto', label: 'Авто' },
  { value: 'desktop', label: '💻 Компьютер' },
  { value: 'mobile', label: '📱 Телефон' },
]

export default function ViewModeToggle() {
  const { mode, setViewMode } = useViewMode()

  return (
    <div className="flex flex-col items-center gap-2 sm:items-end">
      <span className="text-xs font-semibold text-ink-soft">Версия сайта</span>
      <div className="inline-flex items-center gap-1 rounded-full bg-cream p-1">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setViewMode(option.value)}
            aria-pressed={mode === option.value}
            className={`rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors ${
              mode === option.value ? 'bg-primary text-white' : 'text-ink-soft hover:text-primary'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
