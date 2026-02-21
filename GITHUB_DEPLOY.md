# Деплой на GitHub Pages и Backend

## Часть 1: Деплой фронтенда на GitHub Pages

### Шаг 1: Создайте .gitignore

Создайте файл `.gitignore` в корне проекта:

```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
server/node_modules/
server/.env
```

### Шаг 2: Инициализируйте Git

```powershell
cd legal-website
git init
git add .
git commit -m "Initial commit"
```

### Шаг 3: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Назовите репозиторий `legal-website`
3. Нажмите **Create repository**

### Шаг 4: Свяжите локальный репозиторий с GitHub

```powershell
git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/legal-website.git
git branch -M main
git push -u origin main
```

### Шаг 5: Настройте GitHub Pages

1. Откройте репозиторий на GitHub
2. Перейдите в **Settings** → **Pages**
3. В разделе **Build and deployment** выберите:
   - **Source**: GitHub Actions
4. Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

5. Сохраните изменения и запушьте:
```powershell
git add .
git commit -m "Add GitHub Pages workflow"
git push
```

Сайт будет доступен по адресу:
`https://ВАШ_ЮЗЕРНЕЙМ.github.io/legal-website/`

---

## Часть 2: Настройка Backend

### Шаг 1: Установите зависимости для сервера

```powershell
cd server
npm install
```

### Шаг 2: Создайте .env файл

```powershell
cd server
copy .env.example .env
```

Откройте `.env` и замените значения:
- `PAYPAL_CLIENT_ID` — ваш Sandbox Client ID
- `PAYPAL_CLIENT_SECRET` — ваш Sandbox Client Secret

### Шаг 3: Запустите сервер

```powershell
npm run dev
```

Сервер запустится на `http://localhost:5000`

### Шаг 4: Проверьте API

Откройте в браузере:
```
http://localhost:5000/api/health
```

Должен появиться ответ:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

---

## Часть 3: Настройка Webhook PayPal

### Шаг 1: Получите публичный URL сервера

Для локальной разработки используйте ngrok:
1. Скачайте ngrok: https://ngrok.com/download
2. Запустите:
```powershell
ngrok http 5000
```
3. Скопируйте URL (например, `https://abc123.ngrok.io`)

### Шаг 2: Настройте Webhook в PayPal

1. Перейдите на https://developer.paypal.com/dashboard/
2. Выберите ваше приложение
3. Перейдите в **Webhooks** → **Add Webhook**
4. Введите URL: `https://ВАШ_URL/api/paypal/webhook`
5. Выберите события:
   - PAYMENT.CAPTURE.COMPLETED
   - PAYMENT.CAPTURE.DENIED
   - PAYMENT.CAPTURE.PENDING
6. Нажмите **Save**

---

## Часть 4: Деплой Backend (Render.com)

Для продакшена можно использовать Render.com:

### Шаг 1: Создайте отдельный репозиторий для backend

```powershell
cd server
git init
git add .
git commit -m "Initial backend commit"
```

Создайте репозиторий на GitHub и подключите:
```powershell
git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/legal-website-backend.git
git push -u origin main
```

### Шаг 2: Разверните на Render

1. Перейдите на https://render.com
2. Войдите через GitHub
3. Нажмите **New** → **Web Service**
4. Выберите репозиторий `legal-website-backend`
5. Настройте:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
6. В разделе **Environment Variables** добавьте:
   - `PAYPAL_CLIENT_ID` — ваш Live Client ID
   - `PAYPAL_CLIENT_SECRET` — ваш Live Client Secret
7. Нажмите **Create Web Service**

---

## Часть 5: Обновите фронтенд для продакшена

После деплоя backend обновите URL в `Payment.jsx`:

Замените:
```javascript
fetch('http://localhost:5000/api/paypal/create-order', {
```

На:
```javascript
fetch('https://ВАШ_BACKEND_URL/api/paypal/create-order', {
```

---

## Структура проекта

```
legal-website/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages workflow
├── server/                   # Backend
│   ├── server.js             # Главный файл сервера
│   ├── paypalController.js   # PayPal функции
│   ├── package.json
│   ├── .env                  # Переменные окружения
│   └── .env.example
├── src/                      # Frontend (React)
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

---

## Полезные команды

### Frontend
```powershell
cd legal-website
npm run dev          # Запуск разработки
npm run build        # Сборка для продакшена
```

### Backend
```powershell
cd server
npm run dev          # Запуск с автоперезагрузкой
npm start            # Запуск продакшен-сервера
```

### Git
```powershell
git add .
git commit -m "message"
git push
```
