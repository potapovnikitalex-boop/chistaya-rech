const PLANS = [
  {
    title: 'Пробное занятие',
    price: '[Цена]',
    features: ['Знакомство с ребёнком', 'Краткая диагностика', 'Рекомендации родителям'],
    highlight: false,
  },
  {
    title: 'Абонемент 4 занятия',
    price: '[Цена]',
    features: ['4 занятия по 25 минут', 'Материалы для дома', 'Поддержка в чате между занятиями'],
    highlight: true,
  },
  {
    title: 'Абонемент 8 занятий',
    price: '[Цена]',
    features: ['8 занятий по 25 минут', 'Материалы для дома', 'Промежуточный срез прогресса'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center font-heading text-sm font-bold uppercase tracking-wide text-primary">
          Тарифы
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
          Выберите подходящий формат
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`card-soft flex flex-col p-7 ${plan.highlight ? 'bg-primary text-white' : 'bg-white'}`}
            >
              <h3 className={`font-heading text-lg font-bold ${plan.highlight ? 'text-white' : 'text-sky-dark'}`}>
                {plan.title}
              </h3>
              <p className="mt-3 font-heading text-3xl font-extrabold">{plan.price}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm font-semibold ${plan.highlight ? 'text-white/90' : 'text-ink-soft'}`}
                  >
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${plan.highlight ? 'bg-white' : 'bg-leaf'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className={`btn-pill mt-6 px-5 py-3 text-center text-sm transition-transform hover:-translate-y-0.5 ${
                  plan.highlight ? 'bg-white text-primary' : 'bg-primary text-white'
                }`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-ink-soft">
          Точные цены уточняйте у Анастасии — раздел в разработке.
        </p>
      </div>
    </section>
  )
}
