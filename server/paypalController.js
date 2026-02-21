import paypal from '@paypal/checkout-server-sdk'

// Настройка PayPal SDK
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID || 'test',
  process.env.PAYPAL_CLIENT_SECRET || 'test'
)

const client = new paypal.core.PayPalHttpClient(environment)

/**
 * Создание заказа PayPal
 */
export async function createOrder(amount, description) {
  const request = new paypal.orders.OrdersCreateRequest()

  request.prefer('return=representation')
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        description: description || 'Услуга юриста',
        amount: {
          currency_code: 'RUB',
          value: amount.toString()
        }
      }
    ]
  })

  const response = await client.execute(request)
  return {
    orderID: response.result.id,
    status: response.result.status
  }
}

/**
 * Подтверждение (capture) заказа PayPal
 */
export async function captureOrder(orderID) {
  const request = new paypal.orders.OrdersCaptureRequest(orderID)

  request.requestBody({})

  const response = await client.execute(request)
  return {
    orderID: response.result.id,
    status: response.result.status,
    purchase_units: response.result.purchase_units
  }
}

/**
 * Проверка webhook от PayPal
 */
export async function verifyWebhook(headers, body) {
  // Для production нужно реализовать верификацию webhook
  // https://developer.paypal.com/docs/api-basics/notifications/webhooks/#verify-webhook-signature
  return true
}
