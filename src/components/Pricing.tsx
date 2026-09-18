const PLANS = [
  {
    title: '4 занятия',
    price: '3 800 ₽',
    perLesson: '950 ₽ за занятие',
    bonus: null,
    highlight: false,
  },
  {
    title: '8 занятий',
    price: '7 600 ₽',
    perLesson: '950 ₽ за занятие',
    bonus: '+ 1 занятие в подарок',
    highlight: false,
  },
  {
    title: '16 занятий',
    price: '14 400 ₽',
    perLesson: '900 ₽ за занятие',
    bonus: '+ 2 занятия в подарок',
    highlight: true,
  },
  {
    title: '24 занятия',
    price: '21 600 ₽',
    perLesson: '900 ₽ за занятие',
    bonus: '+ 3 занятия в подарок',
    highlight: false,
  },
  {
    title: '32 занятия и более',
    price: '27 200 ₽',
    perLesson: '850 ₽ за занятие',
    bonus: 'до 5 занятий в подарок',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center font-heading text-sm font-bold uppercase tracking-wide text-primary">
          Направление «Логопедия» · 2026
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
          Стоимость занятий
        </h2>

        <div className="card-soft mt-12 flex flex-col items-center gap-2 bg-teal-light p-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-heading text-lg font-bold text-teal-dark">Диагностика — бесплатно</h3>
            <p className="mt-1 text-sm font-semibold text-ink-soft">
              30 минут диагностика + 10 минут консультация для родителей
            </p>
          </div>
          <a
            href="#contacts"
            className="btn-pill mt-2 shrink-0 bg-primary px-5 py-3 text-center text-sm text-white transition-transform hover:-translate-y-0.5 sm:mt-0"
          >
            Записаться на диагностику
          </a>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 force-mobile:grid-cols-1!">
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
                <li
                  className={`flex items-start gap-2 text-sm font-semibold ${plan.highlight ? 'text-white/90' : 'text-ink-soft'}`}
                >
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${plan.highlight ? 'bg-white' : 'bg-leaf'}`} />
                  {plan.perLesson}
                </li>
                {plan.bonus && (
                  <li
                    className={`flex items-start gap-2 text-sm font-semibold ${plan.highlight ? 'text-white/90' : 'text-ink-soft'}`}
                  >
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${plan.highlight ? 'bg-white' : 'bg-sun'}`} />
                    {plan.bonus}
                  </li>
                )}
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
      </div>
    </section>
  )
}
