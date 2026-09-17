import aboutIcon from '../assets/icons/about.webp'

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,320px)_1fr] force-mobile:grid-cols-1!">
        <div className="card-soft mx-auto flex aspect-[3/4] w-full max-w-xs items-center justify-center bg-sky-light font-heading text-lg font-bold text-sky-dark">
          Фото
          <br />
          Анастасии
        </div>

        <div>
          <p className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-primary">
            <img src={aboutIcon} alt="" className="h-8 w-8" />
            Обо мне
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
            Анастасия — учитель-логопед
          </h2>
          <p className="mt-3 max-w-2xl font-semibold text-primary-dark">
            Миссия: сделать путь к чистой речи лёгким, спокойным и радостным — для ребёнка
            и для родителей.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            [Плейсхолдер] Помогаю детям от 4 до 10 лет говорить чисто, уверенно и красиво.
            Опыт очных и онлайн-занятий — Х лет. Специализируюсь на диагностике речи, постановке
            и автоматизации звуков, формировании правильной и чистой речи. Веду занятия в игровой
            форме, чтобы ребёнок не уставал и ждал следующей встречи.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Высшее дефектологическое образование',
              'Регулярное повышение квалификации',
              'Индивидуальная программа для каждого ребёнка',
              'Обратная связь и материалы для родителей',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-semibold text-ink-soft">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                {item}
              </li>
            ))}
          </ul>

          <blockquote className="card-soft mt-8 border-l-4 border-coral bg-white p-6">
            <p className="font-accent text-2xl leading-snug text-ink sm:text-[28px]">
              «Играя, мы мягко ставим звук [р] — ребёнок даже не замечает, что это занятие».
            </p>
            <footer className="mt-2 font-accent text-xl text-ink-soft">— Анастасия</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
