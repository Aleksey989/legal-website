# Настройка PayPal оплаты

## Инструкция по получению Client ID

### 1. Регистрация в PayPal Developer

1. Перейдите на https://developer.paypal.com/dashboard/
2. Нажмите **Log In** и войдите в свой PayPal аккаунт
3. Если нет аккаунта — создайте его (бесплатно)

### 2. Создание приложения

1. На дашборде нажмите **Create App**
2. Заполните поля:
   - **App Name**: `Legal Website` (или любое имя)
   - **App Type**: выберите **Seller** (продавец)
3. Нажмите **Create App**

### 3. Получение Client ID

1. После создания приложения вы увидите:
   - **Client ID** (скопируйте его)
   - **Client Secret** (не нужен для фронтенда)

### 4. Настройка в index.html

Откройте файл `index.html` и замените `test` на ваш Client ID:

**До:**
```html
<script src="https://www.paypal.com/sdk/js?client-id=test&currency=RUB"></script>
```

**После:**
```html
<script src="https://www.paypal.com/sdk.js?client-id=ВАШ_CLIENT_ID_ЗДЕСЬ&currency=RUB"></script>
```

Пример:
```html
<script src="https://www.paypal.com/sdk.js?client-id=AbCdEf1234567890XyZ&currency=RUB"></script>
```

### 5. Тестирование

1. Сохраните файл
2. Обновите страницу браузера
3. Попробуйте оплатить через PayPal

## Тестовый режим (Sandbox)

Для тестирования без реальных денег:

1. В PayPal Developer создайте тестовый аккаунт:
   - Дашборд → Apps & Credentials → Sandbox Accounts
   - Нажмите **Create Account**
2. Используйте тестовый Client ID (он будет отмечен как **Sandbox**)
3. Для продакшена переключитесь на **Live** Client ID

## Дополнительные параметры

Вы можете добавить дополнительные параметры в URL SDK:

```html
<script src="https://www.paypal.com/sdk/js?client-id=ВАШ_CLIENT_ID&currency=RUB&locale=ru_RU"></script>
```

Параметры:
- `currency=RUB` — валюта (RUB, USD, EUR)
- `locale=ru_RU` — язык интерфейса
- `intent=capture` — тип платежа (capture, authorize, order)

## Поддержка

Документация PayPal: https://developer.paypal.com/docs/

## Проблемы и решения

### PayPal кнопка не отображается
- Проверьте, что Client ID указан правильно
- Откройте консоль браузера (F12) на наличие ошибок
- Убедитесь, что нет блокировщиков рекламы

### Ошибка "Invalid Client ID"
- Client ID должен начинаться с букв (например, AbCd...)
- Убедитесь, что используете правильный Client ID (Sandbox или Live)

### Валюта не поддерживается
- PayPal в России поддерживает только определённые валюты
- Для тестов используйте USD или EUR
