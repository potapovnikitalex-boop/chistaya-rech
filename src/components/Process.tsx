const STEPS = [
  {
    n: '1',
    title: 'Заявка',
    description: '[Плейсхолдер] Оставляете заявку на сайте или пишете в мессенджер — согласуем удобное время.',
  },
  {
    n: '2',
    title: 'Диагностика',
    description: '[Плейсхолдер] Первое занятие — знакомство и обследование речи ребёнка, составление программы.',
  },
  {
    n: '3',
    title: 'Регулярные занятия',
    description: '[Плейсхолдер] Онлайн-встречи 2–3 раза в неделю по видеосвязи, в игровом формате.',
  },
  {
    n: '4',
    title: 'Материалы и домашка',
    description: '[Плейсхолдер] После каждого занятия — короткие задания и материалы для закрепления дома.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center font-heading text-sm font-bold uppercase tracking-wide text-primary">
          Формат обучения
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
          Как проходят занятия
        </h2>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="card-soft bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-white">
                {step.n}
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-sky-dark">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
