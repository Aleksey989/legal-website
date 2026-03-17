# 🚀 Быстрый старт

## Полная установка и запуск проекта (Frontend + Backend)

### Шаг 1: Установка Frontend

```powershell
cd legal-website
npm install
```

### Шаг 2: Установка Backend

```powershell
cd server
npm install
copy .env.example .env
```

Откройте `server/.env` и добавьте свои PayPal ключи:

```env
PAYPAL_CLIENT_ID=ваш_sandbox_client_id
PAYPAL_CLIENT_SECRET=ваш_sandbox_client_secret
```

### Шаг 3: Запуск Frontend

```powershell
cd ..
npm run dev
```

Фронтенд будет на: http://localhost:3000

### Шаг 4: Запуск Backend (откройте новый терминал)

```powershell
cd legal-website/server
npm run dev
```

Backend будет на: http://localhost:5000

---

## ✅ Проверка работоспособности

1. Откройте http://localhost:3000
2. Прокрутите до секции "Оплата онлайн"
3. Выберите услугу и введите сумму
4. Нажмите "PayPal"
5. Должна появиться кнопка PayPal
6. Протестируйте оплату (тестовый аккаунт PayPal)

---

## 📚 Полная документация

- [README_FULL.md](README_FULL.md) — Полная документация проекта
- [GITHUB_DEPLOY.md](GITHUB_DEPLOY.md) — Деплой на GitHub и backend
- [PAYPAL_SETUP.md](PAYPAL_SETUP.md) — Настройка PayPal
- [WEBHOOK_SETUP.md](WEBHOOK_SETUP.md) — Настройка webhook

---

## 🆘 Частые проблемы

### Frontend не запускается

```powershell
cd legal-website
npm install
npm run dev
```

### Backend не запускается

```powershell
cd server
npm install
npm run dev
```

### PayPal кнопка не появляется

1. Проверьте Client ID в `index.html`
2. Откройте консоль браузера (F12) на наличие ошибок
3. Убедитесь, что backend запущен на порту 5000

### Ошибка CORS

Backend должен быть запущен на http://localhost:5000

---

## 🎯 Что дальше?

1. **Тестирование** — протестируйте оплату с тестовым аккаунтом PayPal
2. **Деплой** — разверните фронтенд на GitHub Pages
3. **Backend** — разверните backend на Render.com
4. **Live режим** — переключите PayPal на Live ключи

Удачи! 🚀

## GitHub Actions Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: "./dist"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```
