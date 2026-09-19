import heroBanner from '../assets/hero-banner.jpg'

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-sky-light">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="sr-only">Чистая речь — Анастасия, учитель-логопед. Для детей от 4 лет</h1>

        <div className="card-soft overflow-hidden bg-white">
          <img
            src={heroBanner}
            alt="Анастасия — учитель-логопед. Чистая речь для детей от 4 лет: диагностика, постановка звуков, дифференцирование, формирование связной речи"
            className="w-full"
          />
        </div>

        <p className="mt-8 max-w-2xl text-lg text-ink-soft">
          Говорить чисто и уверенно — навык, который можно развить.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="#contacts"
            className="btn-pill bg-primary px-7 py-3.5 text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Записаться на диагностику
          </a>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 sm:max-w-sm">
          <div>
            <dt className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">100%</dt>
            <dd className="text-xs font-semibold text-ink-soft sm:text-sm">онлайн-формат</dd>
          </div>
          <div>
            <dt className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">30 мин</dt>
            <dd className="text-xs font-semibold text-ink-soft sm:text-sm">игровое занятие</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
