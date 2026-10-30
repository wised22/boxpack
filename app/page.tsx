export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. ШАПКА */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-[#111e38]">
              BOXPACK
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">
              Услуги
            </a>
            <a href="#how-it-works" className="hover:text-blue-600 transition">
              Как это работает
            </a>
            <a href="#video" className="hover:text-blue-600 transition">
              Видеофиксация
            </a>
            <a href="#calculator" className="hover:text-blue-600 transition">
              Калькулятор
            </a>
            <a href="#cases" className="hover:text-blue-600 transition">
              Кейсы
            </a>
            <a href="#contacts" className="hover:text-blue-600 transition">
              Контакты
            </a>
          </nav>
          <a
            href="#contacts"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-50 transition"
          >
            Связаться
          </a>
        </div>
      </header>

      <main>
        {/* 2. ПЕРВЫЙ ЭКРАН (HERO) */}
        <section className="bg-[#111e38] text-white pt-16 pb-20 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Левая колонка */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-md">
                  <span className="text-xs font-semibold tracking-wide uppercase text-blue-400">
                    Автоматизированный фулфилмент
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                  Фулфилмент, который держит сроки и репутацию
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                  Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления. Мы берем на себя хранение, сборку, маркировку и логистику.
                </p>

                {/* Кнопки */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
                  >
                    <span>Рассчитать стоимость</span>
                    <span>→</span>
                  </a>
                  <a
                    href="#contacts"
                    className="inline-flex items-center px-7 py-3.5 border border-slate-600 hover:border-slate-400 text-white font-semibold rounded-lg transition"
                  >
                    Получить консультацию
                  </a>
                </div>

                {/* 3 карточки с цифрами */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      5000+
                    </div>
                    <div className="text-xs text-slate-400">заказов в день</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">
                      99.8%
                    </div>
                    <div className="text-xs text-slate-400">точность сборки</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      FBO/FBS
                    </div>
                    <div className="text-xs text-slate-400">все маркетплейсы</div>
                  </div>
                </div>
              </div>

              {/* Правая колонка — Место под видео */}
              <div id="video" className="lg:col-span-5">
                <div className="relative aspect-video rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-2xl flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:border-blue-500/50 transition">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition">
                    <svg
                      className="w-7 h-7 fill-current translate-x-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Видео автоматической упаковочной линии
                  </p>
                  <span className="text-[11px] text-slate-500 mt-1">1:45 мин</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. БЛОК «КАК НАЧАТЬ РАБОТАТЬ С НАМИ» (7 карточек) */}
        <section id="how-it-works" className="py-20 lg:py-28 bg-[#fbfbfb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111e38] tracking-tight">
                Как начать работать с нами
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Шаг 1 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">
                  ШАГ 1
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Оставляете заявку
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Через сайт или Telegram
                </p>
              </div>

              {/* Шаг 2 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">
                  ШАГ 2
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Получаете расчет
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Под ваш объем и формат работы
                </p>
              </div>

              {/* Шаг 3 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">
                  ШАГ 3
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Подписываем договор
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Через ЭДО
                </p>
              </div>

              {/* Шаг 4 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">
                  ШАГ 4
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Принимаем товар
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  От поставщика или транспортной компании
                </p>
              </div>

              {/* Шаг 5 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">
                  ШАГ 5
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Автоматизированная упаковка
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  С видеоконтролем каждого этапа
                </p>
              </div>

              {/* Шаг 6 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">
                  ШАГ 6
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Отправляем
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  На маркетплейсы по всей России
                </p>
              </div>

              {/* Шаг 7 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">
                  ШАГ 7
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  Получаете результат
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Отчеты и прозрачную аналитику
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. БЛОК «УСЛУГИ ФУЛФИЛМЕНТА» (7 карточек) */}
        <section id="services" className="py-20 lg:py-28 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111e38] tracking-tight">
                Услуги фулфилмента
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Полный цикл обработки товара от приемки до доставки.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Услуга 1 */}
              <div className="p-7 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-white shadow-sm hover:border-blue-300 hover:shadow-md transition">
                <div className="w-2 h-2 rounded-full bg-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  Приемка и сортировка
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Принимаем поставки любого объема и размещаем товар на адресное хранение.
                </p>
              </div>

              {/* Услуга 2 */}
              <div className="p-7 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-white shadow-sm hover:border-blue-300 hover:shadow-md transition">
                <div className="w-2 h-2 rounded-full bg-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  Проверка на брак
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Контроль качества перед отправкой покупателю.
                </p>
              </div>

              {/* Услуга 3 */}
              <div className="p-7 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-white shadow-sm hover:border-blue-300 hover:shadow-md transition">
                <div className="w-2 h-2 rounded-full bg-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  Автоматизированная упаковка
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Автоматические линии и видеоконтроль каждого заказа.
                </p>
              </div>

              {/* Услуга 4 */}
              <div className="p-7 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-white shadow-sm hover:border-blue-300 hover:shadow-md transition">
                <div className="w-2 h-2 rounded-full bg-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  Сборка заказов
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Быстрая комплектация заказов по данным маркетплейсов.
                </p>
              </div>

              {/* Услуга 5 */}
              <div className="p-7 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-white shadow-sm hover:border-blue-300 hover:shadow-md transition">
                <div className="w-2 h-2 rounded-full bg-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  Отправка на маркетплейсы
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  FBO и FBS для всех крупных площадок.
                </p>
              </div>

              {/* Услуга 6 */}
              <div className="p-7 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-white shadow-sm hover:border-blue-300 hover:shadow-md transition">
                <div className="w-2 h-2 rounded-full bg-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  Хранение товаров
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Безопасное адресное хранение продукции.
                </p>
              </div>

              {/* Услуга 7 */}
              <div className="p-7 rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-white shadow-sm hover:border-blue-300 hover:shadow-md transition sm:col-span-2 lg:col-span-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900">
                  Интеграции
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Синхронизация с маркетплейсами и CRM.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. БЛОК «ПОЧЕМУ ВЫБИРАЮТ BOXPACK» (4 карточки) */}
        <section className="py-20 lg:py-28 bg-[#111e38] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Почему выбирают BOXPACK
              </h2>
              <p className="mt-4 text-slate-400">
                Надежный логистический партнер для вашего бизнеса.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#1b2b4d] p-6 rounded-xl border border-slate-700/60 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-2">Скорость</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  До 20 000 товаров за смену и отправка день в день.
                </p>
              </div>

              <div className="bg-[#1b2b4d] p-6 rounded-xl border border-slate-700/60 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-2">Точность</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  99.8% точность сборки благодаря автоматизации.
                </p>
              </div>

              <div className="bg-[#1b2b4d] p-6 rounded-xl border border-slate-700/60 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-2">Надежность</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Страхование товара и круглосуточный контроль.
                </p>
              </div>

              <div className="bg-[#1b2b4d] p-6 rounded-xl border border-slate-700/60 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-2">Поддержка</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Персональный менеджер и оперативная помощь.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. ПОДВАЛ */}
      <footer id="contacts" className="bg-[#0b1426] border-t border-slate-800 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 BOXPACK. Все права защищены.</p>
          <p>
            Выполнил: <span className="text-white font-medium">Константинов Фёдор Андреевич</span>, группа <span className="text-white font-medium">ИС-14/9</span>
          </p>
        </div>
      </footer>
    </div>
  );
}