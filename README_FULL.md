# Юридический сайт с онлайн оплатой

Полный стек: React фронтенд + Express backend + PayPal интеграция + GitHub деплой

## 🚀 Быстрый старт

### 1. Клонируйте репозиторий

```powershell
git clone https://github.com/ВАШ_ЮЗЕРНЕЙМ/legal-website.git
cd legal-website
```

### 2. Запустите фронтенд

```powershell
npm install
npm run dev
```

Откройте http://localhost:3000

### 3. Запустите backend

```powershell
cd server
npm install
copy .env.example .env
```

Отредактируйте `.env` — добавьте PayPal Client ID и Secret

```powershell
npm run dev
```

Backend будет доступен на http://localhost:5000

---

## 📁 Структура проекта

```
legal-website/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages workflow
├── server/                         # Backend
│   ├── server.js                   # Express сервер
│   ├── paypalController.js         # PayPal API
│   ├── package.json
│   ├── .env.example
│   └── .env                        # Переменные окружения (не коммитить)
├── src/                            # Frontend (React)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ConsultationForm.jsx
│   │   ├── Payment.jsx             # Оплата через PayPal
│   │   ├── Contacts.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
├── GITHUB_DEPLOY.md                # Инструкция по деплою
├── PAYPAL_SETUP.md                 # Настройка PayPal
└── WEBHOOK_SETUP.md                # Настройка webhook
```

---

## 🔧 Настройка PayPal

### 1. Получите Client ID и Secret

1. Перейдите на https://developer.paypal.com/dashboard/
2. Нажмите **Create App**
3. Скопируйте **Client ID** и **Client Secret**

### 2. Настройте frontend

Откройте `index.html` и замените Client ID:

```html
<script src="https://www.paypal.com/sdk/js?client-id=ВАШ_CLIENT_ID&currency=RUB"></script>
```

### 3. Настройте backend

Откройте `server/.env`:

```env
PAYPAL_CLIENT_ID=ваш_client_id
PAYPAL_CLIENT_SECRET=ваш_client_secret
```

Подробнее: [PAYPAL_SETUP.md](PAYPAL_SETUP.md)

---

## 🌐 Деплой

### Frontend на GitHub Pages

См. инструкцию: [GITHUB_DEPLOY.md](GITHUB_DEPLOY.md)

Кратко:
```powershell
git add .
git commit -m "Deploy"
git push
```

Сайт будет на: `https://ВАШ_ЮЗЕРНЕЙМ.github.io/legal-website/`

### Backend на Render.com

1. Создайте отдельный репозиторий для `server/`
2. Разверните на https://render.com
3. Добавьте переменные окружения в Render

---

## 🔌 API Endpoints

### Backend API (http://localhost:5000)

| Метод | Endpoint | Описание |
|-------|----------|----------|
| GET | `/api/health` | Проверка работоспособности |
| POST | `/api/paypal/create-order` | Создать заказ PayPal |
| POST | `/api/paypal/capture-order` | Подтвердить оплату |
| POST | `/api/paypal/webhook` | Webhook от PayPal |
| GET | `/api/orders` | Получить список заказов |

### Пример запроса

```javascript
// Создать заказ
const response = await fetch('http://localhost:5000/api/paypal/create-order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    amount: 5000,
    description: 'Консультация юриста'
  })
})

const order = await response.json()
console.log(order.orderID)
```

---

## 📊 Webhook

Настройка webhook: [WEBHOOK_SETUP.md](WEBHOOK_SETUP.md)

### Обработка событий

Backend автоматически обрабатывает:
- `PAYMENT.CAPTURE.COMPLETED` — успешная оплата
- `PAYMENT.CAPTURE.DENIED` — отказ в оплате
- Другие события PayPal

---

## 🛠️ Команды

### Frontend
```powershell
npm run dev          # Разработка
npm run build        # Сборка
npm run preview      # Предпросмотр сборки
```

### Backend
```powershell
cd server
npm run dev          # Разработка с nodemon
npm start            # Продакшен
```

### Git
```powershell
git add .
git commit -m "message"
git push
```

---

## 🔒 Безопасность

- Никогда не коммитить `.env` файлы
- Использовать разные ключи для Sandbox и Live
- Верифицировать webhooks в продакшене
- Использовать HTTPS для API

---

## 📝 Документация

- [GITHUB_DEPLOY.md](GITHUB_DEPLOY.md) — Деплой на GitHub и backend
- [PAYPAL_SETUP.md](PAYPAL_SETUP.md) — Настройка PayPal
- [WEBHOOK_SETUP.md](WEBHOOK_SETUP.md) — Настройка webhook

---

## 🆘 Поддержка

- PayPal Developer: https://developer.paypal.com/
- Vite Documentation: https://vitejs.dev/
- Express Documentation: https://expressjs.com/

---

## 📄 Лицензия

MIT License
