import parrotBanner from '../assets/banners/banner-2-popugay.svg'

const UPCOMING_GAMES = [
  { title: 'Звуковой остров', tag: 'автоматизация Р' },
  { title: 'Эхо-пещера', tag: 'фонематический слух' },
  { title: 'Сказка по картинкам', tag: 'связная речь' },
  { title: 'Гонка слогов', tag: 'слоговая структура' },
]

export default function GamesTeaser() {
  return (
    <section id="games" className="bg-mint py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 force-mobile:grid-cols-1!">
        <div className="card-soft overflow-hidden bg-white order-2 lg:order-1 force-mobile:order-2!">
          <img
            src={parrotBanner}
            alt="Попугай-помощник — маскот игровой платформы «Ясноречье»"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2 force-mobile:order-1!">
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
            Скоро на сайте
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
            Игровая платформа «Ясноречье»
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Мы делаем отдельные развивающие игры для отработки звуков дома — между занятиями с
            логопедом. Первые игры откроются здесь совсем скоро.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {UPCOMING_GAMES.map((game) => (
              <div key={game.title} className="card-soft flex items-center gap-3 bg-white p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun/30 text-lg">
                  🔒
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-sky-dark">{game.title}</p>
                  <p className="text-xs font-semibold text-ink-soft">{game.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 font-semibold text-ink-soft">
            Хотите узнать первыми о запуске? Оставьте заявку в разделе «Контакты».
          </p>
        </div>
      </div>
    </section>
  )
}
