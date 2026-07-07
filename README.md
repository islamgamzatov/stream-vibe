# Stream Vibe

Статический сайт для стримингового сервиса, собранный на **Minista**.

## 🚀 Быстрый старт

### Требования

- Node.js ≥ 18
- npm ≥ 9

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/islamgamzatov/stream-vibe.git
cd stream-vibe

# Установить зависимости
npm install
```

### Запуск

```bash
# Локальная разработка (dev-сервер)
npm start

# Сборка проекта
npm run build

# Предпросмотр собранной версии
npm run preview
```

После запуска dev-сервера откройте в браузере:
```
http://localhost:3000
```

---

## 📁 Структура проекта

```
stream-vibe/
├── src/                    # Исходный код
│   ├── assets/             # Статические файлы (изображения, шрифты, иконки)
│   ├── components/         # Переиспользуемые React-компоненты
│   ├── layouts/            # Шаблоны страниц (Header, Footer)
│   ├── pages/              # Страницы сайта
│   ├── sections/           # Секции страниц
│   ├── styles/             # Глобальные стили и миксины
│   └── utils/              # Утилиты и хелперы
├── public/                 # Файлы, копируемые в сборку без изменений
├── docs/                   # Готовая сборка (для GitHub Pages)
├── minista.config.js       # Конфигурация сборщика
└── package.json
```

---

## 🛠 Технологии

- **Minista** — статический сайт-генератор
- **Sass/SCSS** — препроцессор стилей
- **PostCSS** — обработка CSS
  - `postcss-preset-env` — современные CSS-функции
  - `postcss-pxtorem` — конвертация px в rem
- **Swiper** — слайдеры
- **IMask** — маски для ввода

---

