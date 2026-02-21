# Настройка PayPal Webhook

## Что такое Webhook?

Webhook — это автоматический уведомление от PayPal о статусе платежа на ваш сервер.

## Зачем нужен Webhook?

- Получать уведомления об успешных платежах
- Сохранять заказы в базу данных
- Отправлять email-уведомления клиентам
- Обрабатывать отказы в оплате

## Настройка Webhook

### 1. Получите публичный URL сервера

#### Для локальной разработки (ngrok):

1. Скачайте ngrok: https://ngrok.com/download
2. Распакуйте и запустите:
```powershell
ngrok http 5000
```
3. Вы увидите URL вида: `https://abc123-xyz.ngrok.io`

#### Для продакшена:

Используйте URL вашего backend на Render/Heroku/другом хостинге.

### 2. Настройте Webhook в PayPal

1. Перейдите на https://developer.paypal.com/dashboard/
2. Выберите ваше приложение (App)
3. Нажмите **Webhooks** → **Add Webhook**

4. Заполните форму:
   - **Webhook URL**: `https://ВАШ_URL/api/paypal/webhook`
   - **Webhook Type**: выберите **Application**
   - Нажмите **Save**

5. Выберите события для отслеживания:

   Обязательно:
   - ✅ `PAYMENT.CAPTURE.COMPLETED` — успешная оплата
   - ✅ `PAYMENT.CAPTURE.DENIED` — отказ в оплате

   Дополнительно:
   - ✅ `PAYMENT.CAPTURE.PENDING` — оплата в ожидании
   - ✅ `PAYMENT.CAPTURE.REFUNDED` — возврат средств
   - ✅ `CHECKOUT.ORDER.APPROVED` — заказ одобрен

6. Нажмите **Save**

### 3. Тестирование Webhook

#### Способ 1: Через PayPal Dashboard

1. На странице Webhook нажмите на ваш webhook
2. Нажмите **Send test webhook**
3. Выберите событие `PAYMENT.CAPTURE.COMPLETED`
4. Нажмите **Send test webhook**
5. Проверьте консоль вашего сервера — должно появиться сообщение

#### Способ 2: Через реальную оплату

1. Сделайте тестовую оплату через сайт
2. После успешной оплаты проверьте консоль сервера
3. Должно появиться сообщение:
```
PayPal Webhook received: PAYMENT.CAPTURE.COMPLETED
Payment captured: { ... }
```

### 4. Верификация Webhook (для продакшена)

В продакшене нужно верифицировать webhooks для безопасности:

Обновите `paypalController.js`:

```javascript
import crypto from 'crypto'

export async function verifyWebhook(headers, body, webhookId) {
  const authAlgo = headers['paypal-auth-algo']
  const certId = headers['paypal-cert-id']
  const transmissionId = headers['paypal-transmission-id']
  const transmissionSig = headers['paypal-transmission-sig']
  const transmissionTime = headers['paypal-transmission-time']

  const webhookEvent = {
    auth_algo: authAlgo,
    cert_id: certId,
    transmission_id: transmissionId,
    transmission_sig: transmissionSig,
    transmission_time: transmissionTime,
    webhook_id: webhookId,
    webhook_event: body
  }

  try {
    const response = await client.execute(
      new paypal.webhooks.WebhooksVerifyPostRequest()
        .requestBody(webhookEvent)
    )

    return response.result.verification_status === 'SUCCESS'
  } catch (error) {
    console.error('Webhook verification failed:', error)
    return false
  }
}
```

### 5. Обработка событий в базе данных

Пример сохранения заказа в MongoDB:

```javascript
import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  paypalOrderId: String,
  amount: Number,
  currency: String,
  status: String,
  payerEmail: String,
  createdAt: { type: Date, default: Date.now }
})

const Order = mongoose.model('Order', OrderSchema)

// В webhook обработчике
app.post('/api/paypal/webhook', async (req, res) => {
  const event = req.body

  if (event.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
    const capture = event.resource
    const order = new Order({
      paypalOrderId: capture.id,
      amount: capture.amount.value,
      currency: capture.amount.currency_code,
      status: capture.status,
      payerEmail: capture.payer.email_address
    })

    await order.save()
    console.log('Order saved:', order)
  }

  res.status(200).json({ status: 'ok' })
})
```

### 6. Уведомления по email

Используйте Nodemailer для отправки email:

```bash
npm install nodemailer
```

```javascript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// После успешной оплаты
await transporter.sendMail({
  from: 'noreply@pravzashita.ru',
  to: 'client@example.com',
  subject: 'Оплата успешно завершена',
  text: 'Спасибо за оплату! Ваш заказ №12345'
})
```

## Полезные ссылки

- [PayPal Webhooks Documentation](https://developer.paypal.com/docs/api-basics/notifications/webhooks/)
- [Webhook Events Reference](https://developer.paypal.com/docs/api-basics/notifications/webhooks/event-names/)
- [Webhook Verification](https://developer.paypal.com/docs/api-basics/notifications/webhooks/verify-webhook-signature/)

## Проблемы и решения

### Webhook не приходит
- Проверьте, что сервер запущен и доступен по URL
- Убедитесь, что ngrok запущен (для локальной разработки)
- Проверьте логи PayPal Dashboard

### Ошибка верификации
- Убедитесь, что используете правильный Webhook ID
- Проверьте, что время на сервере синхронизировано
- В Sandbox верификация может работать некорректно

### Дублирующиеся события
- Реализуйте idempotency key для обработки дубликатов
- Сохраняйте обработанные ID событий
