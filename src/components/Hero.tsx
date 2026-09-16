import heroBanner from '../assets/banners/banner-1-zanyatie.svg'

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-sky-light">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="btn-pill inline-block bg-primary-light px-4 py-1.5 text-sm font-bold text-primary-dark">
            Онлайн-занятия для детей от 3 лет
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-sky-dark sm:text-4xl lg:text-[42px]">
            Учим говорить чисто —{' '}
            <span className="text-primary">легко и с удовольствием</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-soft">
            Логопед Анастасия проводит игровые занятия по видеосвязи: диагностика,
            постановка и автоматизация звуков — без очередей и поездок, прямо из дома.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="btn-pill bg-primary px-7 py-3.5 text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Записаться на диагностику
            </a>
            <a
              href="#services"
              className="btn-pill bg-white px-7 py-3.5 text-sky-dark shadow-md transition-transform hover:-translate-y-0.5"
            >
              Что мы разбираем
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            <div>
              <dt className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">100%</dt>
              <dd className="text-xs font-semibold text-ink-soft sm:text-sm">онлайн-формат</dd>
            </div>
            <div>
              <dt className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">25 мин</dt>
              <dd className="text-xs font-semibold text-ink-soft sm:text-sm">игровое занятие</dd>
            </div>
            <div>
              <dt className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">4</dt>
              <dd className="text-xs font-semibold text-ink-soft sm:text-sm">направления работы</dd>
            </div>
          </dl>
        </div>

        <div className="card-soft overflow-hidden bg-white">
          <img
            src={heroBanner}
            alt="Дети занимаются с логопедом, рядом попугай-помощник"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
