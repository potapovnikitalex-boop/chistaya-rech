export default function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,320px)_1fr]">
        <div className="card-soft mx-auto flex aspect-square w-full max-w-xs items-center justify-center bg-sky-light font-heading text-lg font-bold text-sky-dark">
          Фото
          <br />
          Анастасии
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
            Обо мне
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
            Анастасия — логопед-дефектолог
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            [Плейсхолдер] Работаю с детьми от 3 лет, опыт очных и онлайн-занятий — Х лет.
            Специализируюсь на постановке и автоматизации звуков, преодолении задержки речевого
            развития, подготовке к школе. Веду занятия в игровой форме, чтобы ребёнок не уставал
            и ждал следующей встречи.
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
        </div>
      </div>
    </section>
  )
}
