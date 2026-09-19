const SERVICES = [
  {
    title: 'Диагностика',
    color: 'bg-sky-light',
    description:
      '[Плейсхолдер] Полное обследование речи ребёнка: звукопроизношение, слух, словарный запас, грамматика — с рекомендациями по дальнейшей работе.',
  },
  {
    title: 'Подготовка артикуляции',
    color: 'bg-yellow-light',
    description:
      '[Плейсхолдер] Артикуляционная гимнастика и постановка «сложных» звуков (Р, Л, шипящих) в игровых упражнениях.',
  },
  {
    title: 'Постановка звука',
    color: 'bg-teal-light',
    description:
      '[Плейсхолдер] Учим ребёнка различать похожие звуки на слух и в речи, чтобы новый звук закрепился и не путался со старым.',
  },
  {
    title: 'Автоматизация звука',
    color: 'bg-coral-light',
    description:
      '[Плейсхолдер] Развитие связного рассказа, пересказа и диалога — подготовка к уверенному общению и школе.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center font-heading text-sm font-bold uppercase tracking-wide text-primary">
          Структура работы
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.title} className={`card-soft p-7 ${service.color}`}>
              <h3 className="font-heading text-xl font-bold text-sky-dark">{service.title}</h3>
              <p className="mt-3 text-ink-soft">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
