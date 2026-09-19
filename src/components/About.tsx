export default function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
          Обо мне
        </p>
        <h2 className="mt-2 font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
          Анастасия — учитель-логопед
        </h2>
        <p className="mt-3 font-semibold text-primary-dark">
          Мой принцип: уважение к ученику и уместная требовательность. Я бережно отношусь
          к каждому ребёнку, но работаю на результат, который остаётся с ребёнком на всю жизнь.
        </p>
        <p className="mt-4 text-lg text-ink-soft">
          Помогаю детям от 4 до 17 лет говорить чисто, уверенно и красиво.
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
            «Занимаюсь системно — именно это даёт устойчивый результат».
          </p>
          <footer className="mt-2 font-accent text-xl text-ink-soft">— Анастасия</footer>
        </blockquote>
      </div>
    </section>
  )
}
