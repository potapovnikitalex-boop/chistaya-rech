import testimonialsIcon from '../assets/icons/testimonials.webp'

const REVIEWS = [
  {
    name: '[Имя родителя]',
    text: '[Плейсхолдер отзыва] Ребёнок сам просит «поиграть с Анастасией» — раньше от логопедических занятий были слёзы, теперь наоборот.',
  },
  {
    name: '[Имя родителя]',
    text: '[Плейсхолдер отзыва] Звук «Р» поставили за несколько недель, всё удобно, занимались онлайн вечером после сада.',
  },
  {
    name: '[Имя родителя]',
    text: '[Плейсхолдер отзыва] Очень понравился формат: короткие занятия, понятные задания на дом, всегда на связи в чате.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="flex items-center justify-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-primary">
          <img src={testimonialsIcon} alt="" className="h-8 w-8" />
          Отзывы
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
          Что говорят родители
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <figure key={i} className="card-soft flex h-full flex-col justify-between bg-sky-light p-6">
              <blockquote className="text-ink-soft">«{review.text}»</blockquote>
              <figcaption className="mt-4 font-heading font-bold text-sky-dark">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
