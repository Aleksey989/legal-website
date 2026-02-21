import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { createOrder, captureOrder } from './paypalController.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Проверка работоспособности сервера
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Создание заказа PayPal
app.post('/api/paypal/create-order', async (req, res) => {
  try {
    const { amount, description } = req.body

    if (!amount || !description) {
      return res.status(400).json({ error: 'Amount and description are required' })
    }

    const order = await createOrder(amount, description)
    res.json(order)
  } catch (error) {
    console.error('Error creating order:', error)
    res.status(500).json({ error: error.message })
  }
})

// Подтверждение оплаты PayPal
app.post('/api/paypal/capture-order', async (req, res) => {
  try {
    const { orderID } = req.body

    if (!orderID) {
      return res.status(400).json({ error: 'Order ID is required' })
    }

    const captureData = await captureOrder(orderID)
    res.json(captureData)
  } catch (error) {
    console.error('Error capturing order:', error)
    res.status(500).json({ error: error.message })
  }
})

// Webhook для PayPal (для получения уведомлений)
app.post('/api/paypal/webhook', async (req, res) => {
  try {
    const event = req.body

    console.log('PayPal Webhook received:', event.event_type)

    // Обработка разных типов событий
    switch (event.event_type) {
      case 'PAYMENT.CAPTURE.COMPLETED':
        console.log('Payment captured:', event.resource)
        // Здесь можно сохранить заказ в БД
        break
      case 'PAYMENT.CAPTURE.DENIED':
        console.log('Payment denied:', event.resource)
        break
      default:
        console.log('Unhandled event type:', event.event_type)
    }

    res.status(200).json({ status: 'ok' })
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Получение списка заказов (для админки)
app.get('/api/orders', async (req, res) => {
  try {
    // Здесь будет запрос к базе данных
    res.json({
      orders: [],
      message: 'Orders endpoint - add database integration'
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
})
