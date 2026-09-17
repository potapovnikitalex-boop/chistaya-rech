import { type FormEvent, useState } from 'react'
import contactsIcon from '../assets/icons/contacts.webp'

const CONTACT_EMAIL = '[email@example.com]'

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacts" className="bg-sky-light py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 force-mobile:grid-cols-1!">
        <div>
          <p className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-primary">
            <img src={contactsIcon} alt="" className="h-8 w-8" />
            Контакты
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-sky-dark sm:text-3xl">
            Запишитесь на занятие
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-soft">
            Оставьте заявку — свяжемся, чтобы подобрать удобное время для первого занятия.
          </p>

          <dl className="mt-8 space-y-3 text-ink-soft">
            <div className="flex gap-2">
              <dt className="font-bold text-sky-dark">Телефон:</dt>
              <dd>[+7 (___) ___-__-__]</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-sky-dark">Email:</dt>
              <dd>{CONTACT_EMAIL}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-sky-dark">Telegram / WhatsApp:</dt>
              <dd>[ссылка на мессенджер]</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="card-soft bg-white p-6 sm:p-8">
          {submitted ? (
            <p className="text-ink-soft">
              Спасибо! Заявка отправлена — Анастасия свяжется с вами в ближайшее время.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-bold text-ink-soft">
                  Имя родителя
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="mt-1 w-full rounded-2xl border-2 border-ink/10 px-4 py-2.5 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="contact" className="text-sm font-bold text-ink-soft">
                  Телефон или email
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  type="text"
                  className="mt-1 w-full rounded-2xl border-2 border-ink/10 px-4 py-2.5 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-bold text-ink-soft">
                  Возраст ребёнка / комментарий
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 w-full rounded-2xl border-2 border-ink/10 px-4 py-2.5 outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="btn-pill w-full bg-primary px-4 py-3.5 text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-ink-soft">
                Форма пока не подключена к бэкенду — это заглушка для будущей интеграции.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
