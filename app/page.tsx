
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a2a52]">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-2xl font-black tracking-tight text-[#1a2a52]">
            BOXPACK
          </p>
          <nav className="hidden gap-8 text-sm font-medium text-gray-600 sm:flex">
            <a href="#" className="transition-colors hover:text-[#1a2a52]">Услуги</a>
            <a href="#" className="transition-colors hover:text-[#1a2a52]">Как работаем</a>
            <a href="#" className="transition-colors hover:text-[#1a2a52]">Тарифы</a>
            <a href="#" className="transition-colors hover:text-[#1a2a52]">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="bg-[#1a2a52] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#40c4d0]">
            Автоматизированный фулфилмент
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Фулфилмент, который держит сроки и репутацию
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Автоматизированная упаковка, видеоконтроль каждого заказа и отправка
            в день поступления. Мы берем на себя хранение, сборку, маркировку
            и логистику.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#1a2a52] transition-all hover:bg-gray-100 hover:shadow-lg">
              Рассчитать стоимость
            </button>
            <button className="rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
              Получить консультацию
            </button>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              ["5000+", "заказов в день"],
              ["99.8%", "точность сборки"],
              ["FBO/FBS", "все маркетплейсы"],
            ].map(([num, text]) => (
              <div key={text} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-3xl font-black text-white">{num}</p>
                <p className="mt-1 text-sm font-medium text-gray-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 flex aspect-video w-full max-w-4xl items-center justify-center rounded-2xl border border-white/10 bg-gray-400/20 shadow-2xl">
            <p className="text-sm font-medium text-gray-300">
              Видео автоматической упаковочной линии
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Как начать работать с нами</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Оставляете заявку", "Через сайт или Telegram"],
              ["Получаете расчет", "Под ваш объем и формат работы"],
              ["Подписываем договор", "Через ЭДО"],
              ["Принимаем товар", "От поставщика или транспортной компании"],
              ["Автоматизированная упаковка", "С видеоконтролем каждого этапа"],
              ["Отправляем", "На маркетплейсы по всей России"],
              ["Получаете результат", "Отчеты и прозрачную статистику"],
            ].map(([title, text], i) => (
              <div 
                key={title} 
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-xl"
              >
                <p className="text-sm font-black text-[#40c4d0]">ШАГ {i + 1}</p>
                <h3 className="mt-3 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Услуги фулфилмента</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Полный цикл обработки товара от приемки до доставки.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Приемка и сортировка", "Принимаем поставки любого объема и размещаем товар на адресное хранение."],
              ["Проверка на брак", "Контроль качества перед отправкой покупателю."],
              ["Автоматизированная упаковка", "Автоматические линии и видеоконтроль каждого заказа."],
              ["Сборка заказов", "Быстрая комплектация заказов по данным маркетплейсов."],
              ["Отправка на маркетплейсы", "FBO и FBS для всех крупных площадок."],
              ["Хранение товаров", "Безопасное адресное хранение продукции."],
              ["Интеграции", "Синхронизация с маркетплейсами и CRM."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border-t-4 border-[#40c4d0] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a2a52] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Почему выбирают BOXPACK
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Скорость", "До 20 000 товаров за смену и отправка день в день."],
              ["Точность", "До 99.8% точность сборки благодаря автоматизации."],
              ["Надежность", "Страхование товара и круглосуточный контроль."],
              ["Поддержка", "Персональный менеджер и оперативная помощь."],
            ].map(([title, text]) => (
              <div 
                key={title} 
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <h3 className="text-lg font-bold text-[#40c4d0]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}